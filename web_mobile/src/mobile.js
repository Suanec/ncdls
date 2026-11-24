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
    installError = "";
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
    update.hidden = !registration?.waiting;
    if (busy) return;
    const worker = registration?.active;
    if (worker) {
      const status = await workerStatus(worker);
      if (status.ready) {
        display(
          `离线资源已就绪 · ${mib(status.bytes)}。可以断网重新打开游戏。`,
          true,
        );
        progress.hidden = true;
        download.textContent = "检查并下载更新";
      } else display("离线资源不完整，请联网后重新保存。");
    } else {
      const response = await fetch("offline-manifest.json");
      if (!response.ok) throw new Error("无法读取资源清单");
      const manifest = await response.json();
      display(`保存约 ${mib(manifest.totalBytes)} 的资源后，就能离线玩。`);
    }
    download.disabled = !navigator.onLine;
  }
  function watch(worker) {
    if (!worker) return;
    busy = true;
    download.disabled = true;
    const changed = () => {
      if (worker.state === "installed" || worker.state === "activated") {
        busy = false;
        download.disabled = false;
        if (registration?.waiting) {
          update.hidden = false;
          display("新版离线资源已下载。点击“应用更新并重启游戏”后生效。", true);
        } else if (worker.state === "activated") refresh().catch(showError);
      } else if (worker.state === "redundant") {
        busy = false;
        download.disabled = false;
        showError(
          new Error(installError || "下载中断，已保存的资源会在重试时复用"),
        );
      }
    };
    worker.addEventListener("statechange", changed);
    changed();
  }
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
  download.addEventListener("click", async () => {
    if (!supported || busy) return;
    installError = "";
    busy = true;
    download.disabled = true;
    progress.hidden = false;
    display("正在准备离线资源，请保持页面打开…");
    try {
      registration = await navigator.serviceWorker.register("sw.js", {
        scope: "./",
        updateViaCache: "none",
      });
      registration.addEventListener("updatefound", () =>
        watch(registration.installing),
      );
      if (registration.installing) watch(registration.installing);
      else {
        await registration.update();
        if (registration.installing) watch(registration.installing);
        else if (
          registration.active &&
          !(await workerStatus(registration.active)).ready
        ) {
          registration.active.postMessage({ type: "repair" });
        } else {
          busy = false;
          download.disabled = false;
          await refresh();
        }
      }
      navigator.storage?.persist?.().catch(() => {});
    } catch (error) {
      busy = false;
      showError(error);
    }
  });
  update.addEventListener("click", () => {
    if (!registration?.waiting) return;
    reloading = true;
    update.disabled = true;
    registration.waiting.postMessage({ type: "activate-update" });
  });
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (event) => {
      const data = event.data;
      if (data?.app !== "ncdls-mobile") return;
      if (data.type === "progress") {
        busy = true;
        progress.hidden = false;
        download.disabled = true;
        progress.value = Math.floor(
          (data.bytes / Math.max(1, data.totalBytes)) * 100,
        );
        display(
          `正在保存 ${progress.value}% · ${mib(data.bytes)} / ${mib(data.totalBytes)}（${data.files}/${data.totalFiles}）`,
        );
      } else if (data.type === "error") {
        installError = data.message;
        busy = false;
        showError(new Error(data.message));
      } else if (
        data.type === "ready" ||
        (data.type === "downloaded" && !registration?.installing)
      ) {
        busy = false;
        refresh().catch(showError);
      }
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloading) location.reload();
      else {
        busy = false;
        refresh().catch(showError);
      }
    });
  }
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
  refresh().catch(showError);
})();
