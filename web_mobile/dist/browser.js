(() => {
  "use strict";
  const status = document.querySelector("#status");
  const modules = new Map();
  const reload = document.querySelector("#reload-game");
  let bootFailed = false, assetTimer;
  const mib = (bytes) => (bytes / 1048576).toFixed(1) + " MB";
  function report(data) {
    if (bootFailed && data.stage !== "error") return;
    status.textContent = data.title + (data.detail ? " · " + data.detail : "");
    window.parent.postMessage({ type: "ncdls:progress", ...data }, location.origin);
  }
  const painted = () => new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  );
  reload.addEventListener("click", () => {
    if (window.parent !== window) {
      window.parent.postMessage({ type: "ncdls:restart" }, location.origin);
    } else {
      try {
        window.W?.ICache?.saveData();
      } catch { /* Keep the last saved progress. */ }
      location.reload();
    }
  });
  // This cached engine does not rebuild its textures and buffers on restoration.
  // Recreate the iframe's engine instead of allowing a blank or partial scene.
  document.addEventListener("webglcontextlost", (event) => {
    if (!(event.target instanceof HTMLCanvasElement)) return;
    event.preventDefault();
    fail(new Error("绘图环境已中断，请点下方按钮重启游戏。已保存的进度会保留。"));
  }, true);
  window.define = (id, factory) => {
    const module = { exports: {} };
    factory(
      (name) => {
        if (!modules.has(name)) throw new Error("Missing module: " + name);
        return modules.get(name);
      },
      module,
      module.exports,
    );
    modules.set(id, module.exports);
  };
  // Fixed-size buffers avoid allocating objects or sorting on every frame.
  function frameMetrics() {
    const capacity = 2048, times = new Float64Array(capacity), gaps = new Float64Array(capacity), costs = new Float64Array(capacity);
    let cursor = 0, count = 0, previous = 0, last = 0;
    const state = {repairs:0, falseWrites:0, writes:[], lastError:""};
    document.addEventListener("visibilitychange", () => { previous = 0; cursor = 0; count = 0; });
    state.record = (time, cost) => {
      times[cursor] = time; gaps[cursor] = previous ? time - previous : 0; costs[cursor] = cost;
      previous = last = time; cursor = (cursor + 1) % capacity; count = Math.min(capacity, count + 1);
    };
    state.read = () => {
      const now = performance.now(), gap = [], cpu = [];
      // Keep the last active window even when the user waits before diagnosing a freeze.
      const stale = !!last && now-last > 1000, end = stale ? last : now;
      let first = end, samples = 0;
      for (let i = 0; i < count; i++) {
        if (times[i] < end - 10000) continue;
        first = Math.min(first, times[i]); samples++;
        if (gaps[i] > 0) gap.push(gaps[i]); cpu.push(costs[i]);
      }
      const percentile = (values, p) => {
        if (!values.length) return null;
        values.sort((a,b) => a-b); return Math.round(values[Math.floor((values.length-1)*p)] * 10) / 10;
      };
      return {samples, stale, seconds:Math.round((end-first)/100)/10,
        fps:samples > 1 ? Math.round((samples-1)*10000/Math.max(1,end-first))/10 : 0,
        gap95:percentile(gap,.95), maxGap:percentile(gap,1), cpu95:percentile(cpu,.95), cpuMax:percentile(cpu,1),
        over50:gap.filter(n=>n>50).length, lastFrameMs:last ? Math.round(now-last) : null,
        repairs:state.repairs, falseWrites:state.falseWrites, lastError:state.lastError};
    };
    return state;
  }
  let assetSources = {cache:0, network:0}, collectingAssets = false, gameReady = false;
  const resourcePending = new Map(), resourceDone = new Set();
  let resourceFailed = "", resourceOverlay = false;
  function resourceProgress() {
    if (!resourcePending.size) return false;
    const list=[...resourcePending.values()], update=list.some(item=>item.updating);
    const active=list[0], received=list.reduce((sum,item)=>sum+(item.received||0),0);
    const core=active.path.startsWith("runtime/");
    report({stage:update?"updating":core?"scripts":"assets",title:update?"资源版本不匹配，正在更新":core?"正在下载核心运行文件":"正在下载资源",
      files:resourceDone.size,loaded:received,total:core?active.total:undefined,
      detail:`已完成 ${resourceDone.size} 项 · 待完成 ${list.length} 项 · 当前接收 ${mib(received)} · ${active.path.split("/").pop()}`});
    resourceOverlay=true;
    return true;
  }
  navigator.serviceWorker?.addEventListener("message", event => {
    const data=event.data;
    if(data?.app!=="ncdls-resource")return;
    if(navigator.serviceWorker.controller && event.source!==navigator.serviceWorker.controller)return;
    if(data.phase==="failed"){
      resourcePending.delete(data.path);resourceFailed=data.path;
      fail(new Error("资源更新暂未完成，请检查网络后重新加载。"));return;
    }
    if(["start","progress","updating"].includes(data.phase)) {
      const previous=resourcePending.get(data.path);
      resourcePending.set(data.path,{...previous,...data,updating:previous?.updating||data.phase==="updating"});
      resourceProgress();return;
    }
    resourcePending.delete(data.path);
    if(!resourceDone.has(data.path)) {
      resourceDone.add(data.path);
      if(data.source in assetSources)assetSources[data.source]++;
    }
    if(!resourceProgress() && gameReady && resourceOverlay && !bootFailed) {
      resourceOverlay=false;window.parent.postMessage({type:"ncdls:ready"},location.origin);
    }
  });
  function protectAudioPlayback() {
    const manager = Laya.SoundManager;
    if (!manager) return;
    const warnings = { context: "", media: "" }, media = new WeakMap();
    let audioPending = false, blockedMusic = null;
    const warning = (kind, error) => {
      warnings[kind] = error ? String(error.message || error).slice(0, 120) : "";
      window.NCDLSWeb.audioWarning = warnings.media || warnings.context;
    };
    const recover = manager._recoverWebAudio = () => {
      const context = Laya.WebAudioSound?.ctx;
      if (!context || context.state === "running" || !context.resume || audioPending) return;
      audioPending = true;
      try {
        Promise.resolve(context.resume()).then(() => {
          if (context.state === "running") warning("context", null);
        }, error => warning("context", error)).finally(() => { audioPending = false; });
      } catch (error) { warning("context", error); audioPending = false; }
    };
    // Guard only media elements owned by Laya audio channels. Do not suppress
    // unrelated errors or modify the global HTMLMediaElement/video prototype.
    function guard(element, channel) {
      if (!element || typeof element.play !== "function") return;
      let state = media.get(element);
      if (!state) {
        state = { element, native: element.play, channel: null, pending: null, serial: 0 };
        media.set(element, state);
        element.play = function (...args) {
          if (state.pending) return state.pending;
          const owner = state.channel, serial = ++state.serial;
          const finish = error => {
            // A stopped/replaced channel must not be resurrected by an old promise.
            if (serial !== state.serial || owner !== state.channel) return;
            state.pending = null;
            if (owner && (owner.isStopped || owner._audio !== element)) return;
            if (!error) {
              if (!blockedMusic || blockedMusic === state) {
                blockedMusic = null;
                warning("media", null);
              }
              return;
            }
            warning("media", error);
            if (owner && element === Laya.AudioSound?._musicAudio) blockedMusic = state;
            else if (owner) {
              // Drop a failed one-shot sound instead of replaying stale effects later.
              try { owner.stop(); } catch (cleanupError) { warning("media", cleanupError); }
            }
          };
          let result;
          try { result = state.native.apply(this, args); }
          catch (error) { finish(error); return; }
          if (!result || typeof result.then !== "function") { finish(null); return result; }
          state.pending = Promise.resolve(result).then(() => finish(null), finish);
          return state.pending;
        };
      }
      if (channel && state.channel !== channel) {
        state.channel = channel; state.serial++; state.pending = null;
        if (blockedMusic === state) blockedMusic = null;
      }
    }
    const channel = Laya.AudioSoundChannel?.prototype;
    if (channel) for (const name of ["play", "resume", "__resumePlay"]) {
      const original = channel[name];
      if (typeof original !== "function") continue;
      channel[name] = function (...args) {
        guard(this._audio, this);
        return original.apply(this, args);
      };
    }
    const unlock = Laya.AudioSound?._makeMusicOK;
    if (unlock) Laya.AudioSound._makeMusicOK = function (...args) {
      guard(Laya.AudioSound._musicAudio, manager._musicChannel);
      return unlock.apply(this, args);
    };
    document.addEventListener("pointerdown", () => {
      recover();
      const state = blockedMusic, current = manager._musicChannel;
      if (!state) return;
      if (!current || current !== state.channel || current.isStopped || current._audio !== state.element) {
        blockedMusic = null;
        return;
      }
      if (document.hidden || manager._isActive === false || manager.muted || manager.musicMuted) return;
      state.element.play();
    }, true);
  }
  window.NCDLSWeb = {
    errors: [],
    audioWarning: "",
    start(config, loadingUI) {
      // Keep the saved setting and its UI, but never reach a device vibration API.
      if (window.Ad) Ad.vibrateShort = Ad.vibrateLong = () => {};
      protectAudioPlayback();
      // Keep the user's displayed grade separate from the modulo template.
      // Classic Save originally skipped the tutorial template after each cycle.
      const modes = window.NCDLSWeb.hooks?.mode;
      if (modes?.Save) {
        const save = modes.Save;
        modes.Save = function (...args) {
          if (this.GetGrade() >= Number.MAX_SAFE_INTEGER) {
            W.ICache.saveData();
            return;
          }
          if (this.GetMode() !== 0) return save.apply(this, args);
          W.ICache.addGrade();
          W.ICache.saveData();
        };
      }
      const meter = window.NCDLSWeb.metrics = frameMetrics();
      let watchedStage, timedStage;
      function watchRendering(stage) {
        if (watchedStage === stage) return;
        watchedStage = stage;
        const descriptor = Object.getOwnPropertyDescriptor(stage, "renderingEnabled");
        if (!descriptor?.configurable || !("value" in descriptor)) return;
        let value = descriptor.value, lastTrace = -Infinity;
        Object.defineProperty(stage, "renderingEnabled", {configurable:true, enumerable:descriptor.enumerable,
          get:() => value, set(next) {
            if (next === false && value !== next) {
              meter.falseWrites++;
              const now = performance.now();
              if (now-lastTrace > 1000) {
                lastTrace = now;
                meter.writes.push({time:Date.now(),hidden:document.hidden,stack:new Error().stack?.split("\n").slice(1,4).join("\n")});
                if (meter.writes.length > 3) meter.writes.shift();
              }
            }
            value = next;
          }});
      }
      const render = Laya.Stage.prototype.render;
      const repairs = window.NCDLSWeb.renderRepairs = [];
      Laya.Stage.prototype.render = function (...args) {
        watchRendering(this);
        // W replaces Stage.prototype._loop during startup. Wait for its first
        // frame, then time the actual loop including its deferred task queue.
        if (timedStage !== this && window.W?.FPS?.lc > 0) {
          timedStage = this;
          const loop = this._loop;
          this._loop = function (...values) {
            const started = performance.now(), before = Laya.Stat?.loopCount;
            try { return loop.apply(this, values); }
            catch (error) { meter.lastError = String(error).slice(0,160); throw error; }
            finally {
              if (!document.hidden && this.renderingEnabled && this.visible !== false &&
                  (before === undefined || Laya.Stat.loopCount !== before)) meter.record(started,performance.now()-started);
            }
          };
        }
        if (!document.hidden && this.isVisibility && this.renderingEnabled === false &&
            !Laya.WebGLContext?.mainContext?.isContextLost?.()) {
          repairs.push({time:Date.now(),frame:Laya.timer?.currFrame,
            paused:!!window.Ad?.Var?._Global?.pause});
          if (repairs.length > 10) repairs.shift();
          this.renderingEnabled = true;
          meter.repairs++;
        }
        return render.apply(this, args);
      };
      // Keep the matching engine's texture crop routine instead of the mini-game
      // framework's WASM fast path, whose layout differs in this cached engine.
      const createTexture = Laya.Texture.create;
      Object.defineProperty(Laya.Texture, "create", {
        configurable: true,
        get: () => createTexture,
        set: () => {},
      });
      const metadata = window.MediaMetaMap.ani9;
      metadata.base_url = new URL("./", location.href).href.replace(/\/$/, "");
      metadata.pub.spz = 0;
      metadata.pub.spe = false;
      metadata.pub.esp = [];
      metadata.m2.oss_cache = null;
      metadata.m2.n = "ncdls_web";
      window.NCDLSWeb.renderCompatibility = "engine-default";
      window.NCDLSWeb.config = config;
      window.NCDLSWeb.loadingUI = loadingUI;
      // A delayed layout callback may retain an already disposed FGUI object.
      // Keep live layout unchanged, but never resize its destroyed display object.
      const object = window.fgui?.GObject?.prototype;
      if (object) {
        for (const name of ["setSize", "handleSizeChanged"]) {
          const method=object[name];
          object[name]=function (...args) {
            if(this.isDisposed)return;
            return method.apply(this,args);
          };
        }
      }
      const onProgress = loadingUI.prototype?.onEvtProgress;
      if (onProgress) loadingUI.prototype.onEvtProgress = function (...args) {
        if (this.isDisposed || !this.displayObject || this.progress0?.isDisposed) return;
        return onProgress.apply(this,args);
      };
      const assetsStarted = performance.now();
      assetSources = {cache:0, network:0}; resourceDone.clear(); collectingAssets = true;
      report({stage:"assets",title:"正在加载本关资源",detail:"正在准备关卡、车辆和图片…"});
      window.NCDLSWeb.main = new W.M2(config, loadingUI);
      document.querySelector("#boot").classList.add("hidden");
      window.parent.postMessage({ type: "ncdls:started" }, location.origin);
      assetTimer = setInterval(() => {
        if (bootFailed) return;
        const resources = performance.getEntriesByType("resource")
          .filter((entry) => entry.startTime >= assetsStarted);
        const bytes = resources.reduce((sum, entry) => sum + (entry.decodedBodySize || 0), 0);
        if (!resourceProgress()) report({stage:"assets",title:"正在解析资源和创建场景",files:resources.length,loaded:bytes,
          detail: assetSources.cache + assetSources.network > 0
            ? `本机缓存 ${assetSources.cache} 项 · 网络下载 ${assetSources.network} 项 · 正在解析模型和图片`
            : `已读取 ${resources.length} 项 · ${mib(bytes)} · 正在解析模型和图片`});
        const game = window.Game;
        if (game?.scene3D && !game.initing && !loadingUI.instance && !resourcePending.size) {
          clearInterval(assetTimer); collectingAssets = false; gameReady = true; resourceOverlay = false;
          report({stage:"drawing",title:"正在创建游戏场景",detail:"资源已就绪，正在创建车辆、螺丝和画面…"});
          painted().then(() => {
            if (!bootFailed) window.parent.postMessage({type:"ncdls:ready"}, location.origin);
          });
        }
      }, 500);
    },
  };
  function fail(error) {
    bootFailed = true;
    clearInterval(assetTimer);
    const description = (error?.name ? error.name + ": " : "") + (error?.message || String(error));
    const message = error?.stack?.includes(description) ? error.stack
      : [description, error?.stack].filter(Boolean).join("\n");
    window.NCDLSWeb.errors.push(message);
    console.error("[web]", error);
    const friendly = resourceFailed ? "资源更新暂未完成，请检查网络后重新加载。已下载的资源和存档会保留。"
      : /绘图环境|运行文件|加载清单|网络|站点正在更新/.test(error?.message || "") ? error.message
      : "游戏加载暂未完成，请重新加载。已下载的资源和存档会保留。";
    window.NCDLSWeb.errorMessage = friendly;
    report({stage:"error",title:resourceFailed?"资源更新暂未完成":"加载未完成",detail:friendly});
    document.querySelector("#boot").classList.remove("hidden");
    reload.hidden = false;
  }
  window.addEventListener("error", (e) => fail(e.error || e.message));
  window.addEventListener("unhandledrejection", (e) => fail(e.reason));
  async function boot() {
    report({stage:"manifest",title:"正在读取加载清单",detail:"只加载游戏运行文件和当前关卡资源…"});
    const response = await fetch("scripts.json", {cache:"no-cache"});
    if (!response.ok) throw new Error("无法读取加载清单，请重新加载。");
    const scripts = (await response.json()).map((entry) =>
      typeof entry === "string" ? {src:entry,bytes:0} : entry,
    );
    const total = scripts.reduce((sum, file) => sum + file.bytes, 0);
    let loaded = 0, lastNotice = 0;
    const sourceBytes = {cache:0, network:0, unknown:0};
    function progress(force = false) {
      if (!force && Date.now() - lastNotice < 200) return;
      lastNotice = Date.now();
      const cache = sourceBytes.cache > 0, network = sourceBytes.network > 0;
      const title = cache && network ? "正在读缓存并补下载" : cache ? "正在读取本机缓存" : network ? "正在下载运行文件" : "正在确认运行文件来源";
      const parts = [];
      if (cache) parts.push(`本机 ${mib(sourceBytes.cache)}`);
      if (network) parts.push(`网络 ${mib(sourceBytes.network)}`);
      if (sourceBytes.unknown) parts.push(`来源待确认 ${mib(sourceBytes.unknown)}`);
      report({stage:"scripts",title,loaded,total,sourceBytes:{...sourceBytes},
        detail: `${parts.join(" · ") || "正在检查本机缓存…"}${total ? ` · 共 ${mib(total)}（${Math.min(100,Math.floor(loaded/total*100))}%）` : ""}`});
    }
    progress(true);
    // Download once with byte progress, then execute in the original order.
    // Blob scripts also work when the original response is served from the SW.
    const downloads = await Promise.all(scripts.map(async (file) => {
      const controller = new AbortController();
      let idle;
      const arm = () => { clearTimeout(idle); idle = setTimeout(() => controller.abort(), 60000); };
      try {
        arm();
        const resource = await fetch(file.src, {signal:controller.signal});
        if (!resource.ok) throw new Error("运行文件下载失败，请重新加载。");
        resourcePending.delete(file.src);
        const chunks = [];
        const label=resource.headers.get("x-ncdls-source");
        const source=label==="network"?"network":label==="cache"||resource.headers.get("x-ncdls-sha256")?"cache":"unknown";
        let bytes = 0;
        const received = length => { bytes += length; loaded += length; sourceBytes[source] += length; };
        if (resource.body?.getReader) {
          const reader = resource.body.getReader();
          for (;;) {
            const {done,value} = await reader.read();
            if (done) break;
            chunks.push(value); received(value.byteLength);
            arm(); progress();
          }
        } else {
          const data = await resource.arrayBuffer();
          chunks.push(data); received(data.byteLength); progress();
        }
        if (source === "unknown") {
          const entries = performance.getEntriesByName?.(new URL(file.src, location.href).href) || [];
          const timing = entries[entries.length-1];
          if (timing?.decodedBodySize > 0) {
            const resolved = timing.transferSize > 0 ? "network" : "cache";
            sourceBytes.unknown -= bytes; sourceBytes[resolved] += bytes;
          }
        }
        if (file.bytes && bytes !== file.bytes) throw new Error("运行文件不完整或站点正在更新，请重新加载。");
        return new Blob(chunks, {type:"text/javascript"});
      } catch (error) {
        throw new Error(error.name === "AbortError" ? "网络已超过 60 秒没有响应，请检查网络后重新加载。" : error.message);
      } finally { clearTimeout(idle); }
    }));
    progress(true);
    report({stage:"engine",title:"正在初始化游戏引擎",detail:"运行文件已读取，正在执行代码；此步骤不重新下载或解包离线资源包。"});
    await painted();
    for (const blob of downloads) {
      const url = URL.createObjectURL(blob);
      try {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = url;
          script.onload = resolve;
          script.onerror = () => reject(new Error("游戏运行文件执行失败，请重新加载。"));
          document.head.append(script);
        });
        if (bootFailed) return;
      } finally { URL.revokeObjectURL(url); }
    }
  }
  boot().catch(fail);
})();
