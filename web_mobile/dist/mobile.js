// Runs before the game iframe: no engine or level downloads until a choice.
window.NCDLSChooseResources = async function ({base, supported, downloadAll}) {
  if (!supported) return 'lazy';
  const prefix = `ncdls-mobile:${base.pathname}:`;
  try {
    for (const name of await caches.keys()) {
      if (!name.startsWith(prefix)) continue;
      const keys = await (await caches.open(name)).keys();
      if (keys.some(request => request.url.startsWith(base.href) &&
          /^(runtime\/|res\/|prefab\/)/.test(request.url.slice(base.href.length)))) return 'cached';
    }
  } catch { return 'lazy'; } // Storage unavailable: online play still works.
  const dialog = document.querySelector('#resource-choice');
  const lazy = document.querySelector('#resource-lazy');
  const all = document.querySelector('#resource-all');
  const status = document.querySelector('#resource-choice-status');
  const progress = document.querySelector('#resource-choice-progress');
  window.NCDLSStartup?.show({stage:'choice',title:'请选择资源加载方式',detail:'尚未下载游戏运行文件和关卡资源。'});
  return new Promise(resolve => {
    const finish = mode => {dialog.close();resolve(mode);};
    dialog.addEventListener('cancel', event => {event.preventDefault();if(!all.disabled)finish('lazy');});
    lazy.onclick = () => finish('lazy');
    all.onclick = async () => {
      window.NCDLSResourceChoiceError="";
      all.disabled = lazy.disabled = true;
      progress.hidden = false; progress.removeAttribute('value');
      status.textContent = '正在准备下载全部资源，请保持页面打开…';
      try {
        await downloadAll(data => {
          status.textContent = data.text;
          if (Number.isFinite(data.percent)) progress.value = data.percent;
        });
        finish('all');
      } catch (error) {
        window.NCDLSResourceChoiceError=String(error);
        status.textContent = '资源下载暂未完成。已保存的部分会保留，可重试全部下载，或选择按需加载。';
        all.disabled = lazy.disabled = false;
      }
    };
    dialog.showModal();
  });
};

(() => {
  "use strict";
  const KEY = "user_json_ncdls_web";
  const base = new URL("./", location.href);
  const panel = document.querySelector("#mobile-panel");
  const state = document.querySelector("#offline-state");
  const download = document.querySelector("#offline-download");
  const update = document.querySelector("#offline-update");
  const progress = document.querySelector("#offline-progress");
  const saveStatus = document.querySelector("#save-status");
  const frame = document.querySelector("#game");
  let registration,
    busy = false,
    reloading = false,
    downloaded = false,
    activeWorker = null, lastMessage = 0, checkingDownload = false, firstDownload = null;
  const supported =
    isSecureContext && "serviceWorker" in navigator && "caches" in window;
  const mib = (size) => (size / 1024 / 1024).toFixed(1) + " MB";
  function display(text, ready = false) {
    state.textContent = text;
    state.dataset.ready = String(ready);
  }
  function workerStatus(worker) {
    return new Promise((resolve, reject) => {
      const channel = new MessageChannel();
      const timer = setTimeout(() => {
        channel.port1.close();
        reject(new Error("离线状态检查超时，请重试"));
      }, 12000);
      channel.port1.onmessage = (event) => {
        clearTimeout(timer);
        channel.port1.close();
        resolve(event.data);
      };
      worker.postMessage({ type: "status" }, [channel.port2]);
    });
  }
  async function refresh() {
    if (!supported) {
      display(
        "当前地址不能保存离线资源。请通过 HTTPS 打开；普通局域网 HTTP 地址只能在线试玩。",
      );
      download.disabled = true;
      return;
    }
    registration = await navigator.serviceWorker.getRegistration(base.href);
    if (registration && registration.scope !== base.href) {
      display("当前地址被其他离线应用占用，请将此游戏部署到独立目录。");
      download.disabled = true;
      return;
    }
    if (busy) return;
    const waiting = registration?.waiting;
    const pending = waiting && await workerStatus(waiting);
    update.hidden = !pending?.ready && !downloaded;
    download.textContent = registration?.active ? "检查并下载更新" : "保存离线资源";
    if (pending?.ready) {
      display("完整新版已下载。点击“应用更新并重启游戏”后生效。", true);
      progress.hidden = true;
    } else if (pending) {
      display("有新版本可下载。当前游戏可继续玩；点击下方按钮才下载完整新版。");
    } else if (registration?.active) {
      const status = await workerStatus(registration.active);
      if (status.ready) {
        display(`离线资源已就绪 · ${mib(status.bytes)}。可以断网重新打开游戏。`, true);
        progress.hidden = true;
      } else display("已启用按需保存：下载过的资源会复用。点击下方按钮可下载全部关卡。");
    } else {
      display("默认按关卡加载并保存资源。点击“保存离线资源”才下载全部关卡。");
    }
    download.disabled = !navigator.onLine;
  }
  function installedWorker(worker) {
    if (!worker) return Promise.reject(new Error("离线组件未启动，请重试"));
    return new Promise((resolve, reject) => {
      const changed = () => {
        if (["installed", "activating", "activated"].includes(worker.state)) {
          worker.removeEventListener("statechange", changed);
          resolve(worker);
        } else if (worker.state === "redundant") {
          worker.removeEventListener("statechange", changed);
          reject(new Error("离线组件更新失败，请重试"));
        }
      };
      worker.addEventListener("statechange", changed);
      changed();
    });
  }
  // Register a small cache worker automatically, without downloading all levels.
  // A complete older offline installation still upgrades through the explicit button.
  async function prepareCache() {
    if (!supported) return;
    const existing = await navigator.serviceWorker.getRegistration(base.href);
    if (existing) return;
    registration = await navigator.serviceWorker.register("sw.js", {scope:"./",updateViaCache:"none"});
    // Re-registering can revive the old registration while another tab is open.
    // Wait for the new script before sending a message older workers do not know.
    if (!registration.installing) await registration.update();
    const worker = await installedWorker(registration.installing || registration.waiting || registration.active);
    await new Promise((resolve, reject) => {
      const channel = new MessageChannel();
      const timer = setTimeout(() => {channel.port1.close(); reject(new Error("按需缓存准备超时"));}, 6000);
      channel.port1.onmessage = () => {clearTimeout(timer);channel.port1.close();resolve();};
      worker.postMessage({type:"prepare-lazy"}, [channel.port2]);
    });
    if (!navigator.serviceWorker.controller) await new Promise((resolve, reject) => {
      const changed = () => {
        if (!navigator.serviceWorker.controller) return;
        clearTimeout(timer); navigator.serviceWorker.removeEventListener("controllerchange", changed); resolve();
      };
      const timer = setTimeout(() => {
        navigator.serviceWorker.removeEventListener("controllerchange", changed); reject(new Error("按需缓存接管超时"));
      }, 6000);
      navigator.serviceWorker.addEventListener("controllerchange", changed); changed();
    });
    // These small shell files were read before the worker could control the page.
    // Save them too so a previously visited level can reopen without a connection.
    void Promise.all(["./","launcher.js","launcher.css","mobile.js","mobile.css"]
      .map(file => fetch(file))).catch(() => {});
  }
  window.NCDLSPrepareCache = new Promise(resolve => {
    const timer = setTimeout(resolve, 8000); // Cache failures never block online play.
    prepareCache().catch(() => {}).finally(() => {clearTimeout(timer);resolve();});
  });
  function showError(error) {
    display(error.message || String(error));
    if (!busy && supported) download.disabled = !navigator.onLine;
  }
  document.querySelector("#mobile-menu").addEventListener("click", () => {
    panel.showModal();
    refresh().catch(showError);
  });
  document
    .querySelector("#mobile-close")
    .addEventListener("click", () => panel.close());
  async function startDownload() {
    if (!supported || busy) return;
    downloaded = false;
    activeWorker = null;
    busy = true;
    lastMessage = Date.now();
    download.disabled = true;
    progress.hidden = false;
    display("正在准备离线资源，请保持页面打开…");
    try {
      // First-load preparation already installed this page's worker. Repeating
      // update() here can take long enough to trip the download watchdog before
      // any download has started (observed in Chrome).
      if (!firstDownload || !registration) {
        registration = await navigator.serviceWorker.register("sw.js", {
          scope: "./", updateViaCache: "none",
        });
        if (!registration.installing) await registration.update();
      }
      const worker = await installedWorker(
        registration.installing || registration.waiting || registration.active,
      );
      // Explicit user action authorizes the complete offline package download.
      activeWorker = worker;
      lastMessage = Date.now();
      worker.postMessage({ type: "download-all" });
      navigator.storage?.persist?.().catch(() => {});
    } catch (error) {
      busy = false;
      showError(error);
      if (firstDownload) { firstDownload.reject(error); firstDownload = null; }
    }
  }
  download.addEventListener("click", startDownload);
  update.addEventListener("click", () => {
    if (!registration?.waiting) {
      if (downloaded) location.reload();
      return;
    }
    reloading = true;
    update.disabled = true;
    registration.waiting.postMessage({ type: "activate-update" });
  });
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (event) => {
      const data = event.data;
      if (data?.app !== "ncdls-mobile") return;
      const workers = [activeWorker, registration?.active, registration?.waiting, registration?.installing];
      if (!workers.some(worker => worker && worker === event.source)) return;
      lastMessage = Date.now();
      if (data.type === "progress") {
        busy = true;
        progress.hidden = false;
        download.disabled = true;
        progress.value = Math.floor(
          (data.bytes / Math.max(1, data.totalBytes)) * 100,
        );
        const transfer = data.transfer;
        const waiting = transfer?.waitingSeconds >= 3
          ? ` · ${transfer.buffered ? "正在接收" : "等待数据"} ${transfer.waitingSeconds} 秒（尝试 ${transfer.attempt}/3）` : "";
        display(
          (data.phase === "reuse"
            ? `正在检查已保存的资源（${data.files}/${data.totalFiles}），可复用的文件不会重复下载…`
            : data.phase === "download"
              ? `下载${transfer?.path?.startsWith("runtime/") ? "游戏运行文件" : data.totalPacks ? `资源包 ${data.completedPacks}/${data.totalPacks}` : "更新文件"} · 已接收 ${mib(data.receivedBytes)} · 已保存 ${progress.value}%（${data.files}/${data.totalFiles}）`
              : `正在保存 ${progress.value}% · ${mib(data.bytes)} / ${mib(data.totalBytes)}（${data.files}/${data.totalFiles}）`) + waiting,
        );
        firstDownload?.notify({text:state.textContent,percent:progress.value});
      } else if (data.type === "error") {
        if (firstDownload) {firstDownload.reject(new Error(data.message)); firstDownload = null;}
        busy = false;
        showError(new Error(data.message));
      } else if (data.type === "ready" || data.type === "downloaded") {
        if (data.type === "downloaded") downloaded = true;
        if (firstDownload) {
          const pending = firstDownload; firstDownload = null;
          (async () => {
            if (registration?.waiting) {
              const worker = registration.waiting;
              worker.postMessage({type:"activate-update"});
              await new Promise((resolve,reject) => {
                const timer=setTimeout(()=>{worker.removeEventListener("statechange",change);reject(new Error("资源已保存，组件切换超时，请重试"));},12000);
                const change=()=>{if(worker.state==="activated"){clearTimeout(timer);worker.removeEventListener("statechange",change);resolve();}};
                worker.addEventListener("statechange",change);change();
              });
            }
          })().then(pending.resolve,pending.reject);
        }
        busy = false;
        refresh().catch(showError);
      }
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloading) location.reload();
      else if (!busy) refresh().catch(showError);
    });
  }
  // iOS may terminate a background worker while its page still says "busy".
  setInterval(async () => {
    if (!busy || !activeWorker || checkingDownload || Date.now() - lastMessage < 15000) return;
    checkingDownload = true;
    try {
      const worker = activeWorker || registration?.waiting || registration?.active;
      if (!worker) throw new Error("离线组件未启动，请重试或使用下方在线恢复入口。");
      const status = await workerStatus(worker);
      if (status.downloading === false) {
        busy = false;
        if (status.ready) { downloaded = true; if(firstDownload){firstDownload.resolve();firstDownload=null;} await refresh(); }
        else throw new Error("下载已中断，已保存资源保留。可以重试，或使用下方入口切回在线版。");
      }
      lastMessage = Date.now();
    } catch (error) {
      busy = false;
      showError(error);
      if (firstDownload) {firstDownload.reject(error); firstDownload=null;}
    } finally { checkingDownload = false; }
  }, 5000);
  window.addEventListener("online", () => refresh().catch(showError));
  window.addEventListener("offline", () => refresh().catch(showError));
  if (
    matchMedia("(display-mode: standalone)").matches ||
    navigator.standalone
  ) {
    document.querySelector("#install-help").textContent =
      "已从主屏幕打开。离线资源就绪后，建议开启飞行模式，再关闭并重新打开一次游戏进行确认。";
  }
  function readSave() {
    try {
      frame.contentWindow.W?.ICache?.saveData();
    } catch {
      /* The game may still be loading. */
    }
    const data = localStorage.getItem(KEY);
    if (!data) throw new Error("还没有存档，请先进入一关游戏。");
    return data;
  }
  document.querySelector("#save-view").addEventListener("click", () => {
    try {
      const data = readSave();
      let pretty;
      try {
        pretty = JSON.stringify(JSON.parse(data), null, 2);
      } catch {
        pretty = data;
      }
      const output = document.querySelector("#save-content");
      output.value = pretty;
      output.hidden = false;
      saveStatus.textContent = "这是当前浏览器保存的存档内容。";
    } catch (error) {
      saveStatus.textContent = error.message;
    }
  });
  document.querySelector("#save-export").addEventListener("click", () => {
    try {
      const data = readSave();
      const file = new Blob(
        [
          JSON.stringify(
            {
              format: "ncdls-save",
              version: 1,
              exportedAt: new Date().toISOString(),
              key: KEY,
              data,
            },
            null,
            2,
          ),
        ],
        { type: "application/json" },
      );
      const url = URL.createObjectURL(file),
        link = document.createElement("a");
      link.href = url;
      link.download = `ncdls-save-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      saveStatus.textContent = "已生成存档文件，可保存到“文件”App。";
    } catch (error) {
      saveStatus.textContent = error.message;
    }
  });
  document
    .querySelector("#save-import")
    .addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      try {
        if (file.size > 2 * 1024 * 1024) throw new Error("存档文件过大");
        const saved = JSON.parse(await file.text());
        if (
          saved.format !== "ncdls-save" ||
          saved.version !== 1 ||
          saved.key !== KEY ||
          typeof saved.data !== "string" ||
          !saved.data.length
        )
          throw new Error("请选择通过“导出存档”生成的 JSON 文件");
        // Require the original storage JSON too, rather than accepting arbitrary text.
        const payload = JSON.parse(saved.data);
        if (
          !payload ||
          typeof payload !== "object" ||
          Array.isArray(payload) ||
          !Number.isFinite(payload.version) ||
          !Number.isInteger(payload.total_type?.grade) ||
          payload.total_type.grade < 1 ||
          !Array.isArray(payload.user_item_box)
        )
          throw new Error("存档内容格式不正确");
        frame.contentWindow.W?.ICache?.saveData();
        await new Promise((resolve) => {
          frame.addEventListener("load", resolve, { once: true });
          frame.src = "about:blank";
        });
        localStorage.setItem(KEY, saved.data);
        frame.src = "game.html";
        saveStatus.textContent = "存档已导入，正在重新打开游戏。";
      } catch (error) {
        saveStatus.textContent = error.message;
      } finally {
        event.target.value = "";
      }
    });
  window.NCDLSBeforeGame = window.NCDLSPrepareCache.then(() => window.NCDLSChooseResources({
    base, supported,
    downloadAll: notify => new Promise((resolve,reject) => {
      firstDownload = {resolve,reject,notify};
      void startDownload();
    }),
  }));
  refresh().catch(showError);
})();
