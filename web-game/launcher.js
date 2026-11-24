(() => {
  const frame = document.querySelector("#game");
  const gameURL = frame.getAttribute("src");
  const dialog = document.querySelector("#levels");
  const mode = document.querySelector("#mode");
  const level = document.querySelector("#level");
  const status = document.querySelector("#menu-status");
  const limits = { 0: 294, 2: 12, 3: 27, 4: 30, 5: 30 };
  const restart = document.querySelector("#restart-game");
  let restarting = false;
  function waitForGame(predicate = () => true) {
    const deadline = Date.now() + 90000;
    return new Promise((resolve, reject) => {
      function check() {
        const web = frame.contentWindow.NCDLSWeb;
        if (web?.errors.length) return reject(new Error(web.errors[web.errors.length - 1]));
        const hooks = web?.hooks;
        if (hooks?.game.hfsm.isGaming && !hooks.game.initing && predicate(hooks))
          return resolve(hooks);
        if (Date.now() >= deadline) return reject(new Error("加载超时，请检查网络后重试。"));
        setTimeout(check, 100);
      }
      check();
    });
  }
  async function restartGame() {
    if (restarting) return;
    restarting = true;
    restart.disabled = true;
    const previous = frame.contentWindow.NCDLSWeb?.hooks;
    let selectedMode, selectedLevel;
    try {
      selectedMode = previous?.mode.GetMode();
      selectedLevel = previous?.mode.GetGrade();
    } catch { /* Initialization can fail before the save is loaded. */ }
    try {
      try { frame.contentWindow.W?.ICache?.saveData(); } catch { /* Use the last saved progress. */ }
      if (!dialog.open) dialog.showModal();
      status.textContent = "正在重新加载游戏，存档会保留…";
      // Tear down the old document before starting another engine. This also
      // stops its timers and releases the old WebGL context and scene caches.
      await new Promise((resolve) => {
        frame.addEventListener("load", resolve, { once: true });
        frame.src = "about:blank";
      });
      frame.src = gameURL;
      let hooks = await waitForGame();
      if (Number.isInteger(selectedLevel) && selectedLevel > 0 &&
          selectedLevel <= limits[selectedMode] &&
          (hooks.mode.GetMode() !== selectedMode || hooks.mode.GetGrade() !== selectedLevel)) {
        const scene = hooks.game.scene3D;
        await hooks.openLevel(selectedMode, selectedLevel);
        await waitForGame((next) => next.game.scene3D !== scene &&
          next.mode.GetMode() === selectedMode && next.mode.GetGrade() === selectedLevel);
      }
      dialog.close();
      frame.focus();
    } catch (error) {
      status.textContent = "重启未完成：" + error.message;
    } finally {
      restarting = false;
      restart.disabled = false;
    }
  }
  restart.addEventListener("click", restartGame);
  window.addEventListener("message", (event) => {
    if (event.origin === location.origin && event.source === frame.contentWindow &&
        event.data?.type === "ncdls:restart") restartGame();
  });
  document.querySelector("#open-levels").addEventListener("click", () => {
    const hooks = frame.contentWindow.NCDLSWeb?.hooks;
    try {
      if (hooks && frame.contentWindow.W?.ICache) {
      mode.value = String(hooks.mode.GetMode());
      level.max = limits[mode.value];
      level.value = Math.min(
        Number(level.max),
        Math.max(1, hooks.mode.GetGrade() || 1),
      );
      }
    } catch { /* Keep the restart action accessible during a failed boot. */ }
    status.textContent = "";
    dialog.showModal();
  });
  document
    .querySelector("#close-levels")
    .addEventListener("click", () => dialog.close());
  mode.addEventListener("change", () => {
    level.max = limits[mode.value];
    level.value = 1;
  });
  document
    .querySelector("#level-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const hooks = frame.contentWindow.NCDLSWeb?.hooks;
      if (
        restarting || !hooks ||
        !(frame.contentWindow.W?.ICache?.getGrade() > 0) ||
        frame.contentWindow.NCDLSWeb.loadingUI.instance ||
        hooks.game.initing
      ) {
        status.textContent = "游戏正在加载，请稍后再试。";
        return;
      }
      const value = Number(level.value),
        selected = Number(mode.value);
      if (!Number.isInteger(value) || value < 1 || value > limits[selected])
        return;
      const button = event.submitter;
      button.disabled = true;
      try {
        await hooks.openLevel(selected, value);
        dialog.close();
        frame.focus();
      } catch (error) {
        status.textContent = "关卡切换失败：" + error.message;
      } finally {
        button.disabled = false;
      }
    });
})();
