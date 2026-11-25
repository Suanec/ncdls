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
  let assetSources = {cache:0, network:0}, collectingAssets = false;
  navigator.serviceWorker?.addEventListener("message", event => {
    if (event.data?.app !== "ncdls-resource" || !collectingAssets || event.data.path?.startsWith("runtime/")) return;
    if (event.data.source in assetSources) assetSources[event.data.source]++;
  });
  window.NCDLSWeb = {
    errors: [],
    start(config, loadingUI) {
      // Repair the precise inconsistent state captured on iOS 15: the document
      // and engine are visible, but rendering remains disabled. Run before a
      // real render frame, not a background timer; leave game/dialog pause alone.
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
      const assetsStarted = performance.now();
      assetSources = {cache:0, network:0}; collectingAssets = true;
      report({stage:"assets",title:"正在加载本关资源",detail:"正在准备关卡、车辆和图片…"});
      window.NCDLSWeb.main = new W.M2(config, loadingUI);
      document.querySelector("#boot").classList.add("hidden");
      window.parent.postMessage({ type: "ncdls:started" }, location.origin);
      assetTimer = setInterval(() => {
        if (bootFailed) return;
        const resources = performance.getEntriesByType("resource")
          .filter((entry) => entry.startTime >= assetsStarted);
        const bytes = resources.reduce((sum, entry) => sum + (entry.decodedBodySize || 0), 0);
        report({stage:"assets",title:"正在加载本关资源",files:resources.length,loaded:bytes,
          detail: assetSources.cache + assetSources.network > 0
            ? `本机缓存 ${assetSources.cache} 项 · 网络下载 ${assetSources.network} 项 · 正在解析模型和图片`
            : `已读取 ${resources.length} 项 · ${mib(bytes)} · 正在解析模型和图片`});
        const game = window.Game;
        if (game?.scene3D && !game.initing && !loadingUI.instance) {
          clearInterval(assetTimer); collectingAssets = false;
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
    const message = error?.stack || error?.message || String(error);
    window.NCDLSWeb.errors.push(message);
    console.error("[web]", error);
    report({stage:"error",title:"加载未完成",detail:error?.message || message});
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
        const chunks = [];
        const source = resource.headers.get("x-ncdls-source") === "cache" || resource.headers.get("x-ncdls-sha256") ? "cache"
          : resource.headers.get("x-ncdls-source") === "network" ? "network" : "unknown";
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
