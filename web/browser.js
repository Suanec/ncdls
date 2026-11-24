(() => {
  "use strict";
  const status = document.querySelector("#status");
  const modules = new Map();
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
      window.NCDLSWeb.config = config;
      window.NCDLSWeb.loadingUI = loadingUI;
      window.NCDLSWeb.main = new W.M2(config, loadingUI);
      document.querySelector("#boot").classList.add("hidden");
      window.parent.postMessage({ type: "ncdls:started" }, location.origin);
    },
  };
  function fail(error) {
    const message = error?.stack || error?.message || String(error);
    window.NCDLSWeb.errors.push(message);
    console.error("[web]", error);
    status.textContent = "加载出错：" + (error?.message || message);
    document.querySelector("#boot").classList.remove("hidden");
  }
  window.addEventListener("error", (e) => fail(e.error || e.message));
  window.addEventListener("unhandledrejection", (e) => fail(e.reason));
  async function boot() {
    const response = await fetch("scripts.json");
    const scripts = await response.json();
    for (let i = 0; i < scripts.length; i++) {
      status.textContent = `正在加载游戏 ${Math.round((i / scripts.length) * 100)}%`;
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = scripts[i];
        script.onload = resolve;
        script.onerror = () => reject(new Error("无法加载 " + scripts[i]));
        document.head.append(script);
      });
    }
  }
  boot().catch(fail);
})();
