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
  window.NCDLSWeb = {
    errors: [],
    start(config, loadingUI) {
      // Repair the precise inconsistent state captured on iOS 15: the document
      // and engine are visible, but rendering remains disabled. Run before a
      // real render frame, not a background timer; leave game/dialog pause alone.
      const render = Laya.Stage.prototype.render;
      const repairs = window.NCDLSWeb.renderRepairs = [];
      Laya.Stage.prototype.render = function (...args) {
        if (!document.hidden && this.isVisibility && this.renderingEnabled === false &&
            !Laya.WebGLContext?.mainContext?.isContextLost?.()) {
          repairs.push({time:Date.now(),frame:Laya.timer?.currFrame,
            paused:!!window.Ad?.Var?._Global?.pause});
          if (repairs.length > 10) repairs.shift();
          this.renderingEnabled = true;
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
          detail:`已完成 ${resources.length} 项资源 · ${mib(bytes)}`});
        const game = window.Game;
        if (game?.scene3D && !game.initing && !loadingUI.instance) {
          clearInterval(assetTimer);
          report({stage:"drawing",title:"正在准备游戏画面",detail:"本关资源已就绪，即将进入游戏…"});
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
    function progress(force = false) {
      if (!force && Date.now() - lastNotice < 200) return;
      lastNotice = Date.now();
      report({stage:"scripts",title:"正在读取游戏运行文件",loaded,total,
        detail:total ? `${mib(loaded)} / ${mib(total)}（${Math.min(100,Math.floor(loaded/total*100))}%）` : `已读取 ${mib(loaded)}`});
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
        let bytes = 0;
        if (resource.body?.getReader) {
          const reader = resource.body.getReader();
          for (;;) {
            const {done,value} = await reader.read();
            if (done) break;
            chunks.push(value); bytes += value.byteLength; loaded += value.byteLength;
            arm(); progress();
          }
        } else {
          const data = await resource.arrayBuffer();
          chunks.push(data); bytes = data.byteLength; loaded += bytes; progress();
        }
        if (file.bytes && bytes !== file.bytes) throw new Error("运行文件不完整或站点正在更新，请重新加载。");
        return new Blob(chunks, {type:"text/javascript"});
      } catch (error) {
        throw new Error(error.name === "AbortError" ? "网络已超过 60 秒没有响应，请检查网络后重新加载。" : error.message);
      } finally { clearTimeout(idle); }
    }));
    progress(true);
    report({stage:"engine",title:"正在启动游戏",detail:"运行文件已就绪，正在初始化游戏引擎…"});
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
