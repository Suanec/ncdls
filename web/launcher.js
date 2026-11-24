(() => {
  const frame = document.querySelector("#game");
  const dialog = document.querySelector("#levels");
  const mode = document.querySelector("#mode");
  const level = document.querySelector("#level");
  const status = document.querySelector("#menu-status");
  const limits = { 0: 294, 2: 12, 3: 27, 4: 30, 5: 30 };
  document.querySelector("#open-levels").addEventListener("click", () => {
    const hooks = frame.contentWindow.NCDLSWeb?.hooks;
    if (hooks && frame.contentWindow.W?.ICache) {
      mode.value = String(hooks.mode.GetMode());
      level.max = limits[mode.value];
      level.value = Math.min(
        Number(level.max),
        Math.max(1, hooks.mode.GetGrade() || 1),
      );
    }
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
        !hooks ||
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
