(() => {
  "use strict";
  const frame = document.querySelector("#game");
  const screen = document.querySelector("#startup");
  const title = document.querySelector("#startup-title");
  const detail = document.querySelector("#startup-detail");
  const progress = document.querySelector("#startup-progress");
  const elapsed = document.querySelector("#startup-time");
  const help = document.querySelector("#startup-help");
  let started = Date.now(), activity = started, fingerprint = "", failed = false;
  function show(data) {
    screen.hidden = false;
    const next = [data.stage, data.loaded, data.files, data.detail].join("|");
    if (fingerprint !== next) { activity = Date.now(); fingerprint = next; }
    failed = data.stage === "error";
    title.textContent = data.title || "正在准备游戏";
    detail.textContent = data.detail || "请稍候…";
    if (data.total > 0) progress.value = Math.min(100, 100 * data.loaded / data.total);
    else progress.removeAttribute("value");
  }
  window.NCDLSStartup = {
    show,
    reset() { started = activity = Date.now(); fingerprint = ""; show({stage:"shell",title:"正在重新加载",detail:"已保留存档，正在连接游戏…"}); },
    ready() { screen.hidden = true; },
  };
  document.querySelector("#startup-retry").addEventListener("click", () => {
    if (window.NCDLSStartup.retry) window.NCDLSStartup.retry();
    else location.reload();
  });
  setInterval(() => {
    if (screen.hidden) return;
    const waiting = Math.floor((Date.now() - activity) / 1000);
    elapsed.textContent = `已等待 ${Math.floor((Date.now() - started) / 1000)} 秒`;
    help.textContent = failed
      ? "请检查网络后重新加载，已保存的进度会保留。"
      : waiting >= 12
        ? `已有 ${waiting} 秒没有新的加载进展。可以继续等待，或检查网络后重新加载。`
        : "正在加载当前关卡所需内容，不会自动下载全部离线包。";
  }, 1000);
  window.addEventListener("message", (event) => {
    if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
    if (event.data?.type === "ncdls:progress") show(event.data);
    if (event.data?.type === "ncdls:ready") window.NCDLSStartup.ready();
  });
  function loadPage() {
    const begin = () => {
      performance.mark("ncdls:shell-painted");
      for (const link of document.querySelectorAll("link[data-href]")) {
        link.href = link.dataset.href;
      }
      const sources = [...document.querySelectorAll("script[data-src]")];
      let launcherReady = false, pending = sources.filter(s => s.hasAttribute("data-before-game")).length, launched = false;
      const launch = () => {
        if (launched || !launcherReady || pending) return;
        launched = true;
        const enter = () => {
          show({stage:"frame",title:"正在连接游戏",detail:"优先读取已保存资源，缺少时才下载…"});
          frame.src = frame.dataset.src;
        };
        if (window.NCDLSPrepareCache) window.NCDLSPrepareCache.then(enter, enter);
        else enter();
      };
      for (const source of sources) {
        const script = document.createElement("script");
        script.src = source.dataset.src;
        script.onload = () => {
          if (source.hasAttribute("data-launcher")) launcherReady = true;
          if (source.hasAttribute("data-before-game")) pending--;
          launch();
        };
        script.onerror = () => {
          if (source.hasAttribute("data-before-game")) { pending--; launch(); }
          else show({stage:"error",title:"页面组件加载失败",detail:"暂时无法连接，请重新加载。"});
        };
        document.head.append(script);
      }
    };
    const afterPaint = () => requestAnimationFrame(() =>
      requestAnimationFrame(() => setTimeout(begin, 0)),
    );
    // Paint timing is available in Chromium; older Safari falls back to yielding
    // past two animation frames and a task before starting any external work.
    if (typeof PerformanceObserver !== "undefined" &&
        PerformanceObserver.supportedEntryTypes?.includes("paint")) {
      const observer = new PerformanceObserver((list) => {
        if (list.getEntries().some((entry) => entry.name === "first-contentful-paint")) {
          observer.disconnect();
          afterPaint();
        }
      });
      observer.observe({type:"paint",buffered:true});
    } else afterPaint();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", loadPage, {once:true});
  else loadPage();
})();
