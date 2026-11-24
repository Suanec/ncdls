(() => {
  const frame = document.querySelector("#game");
  const gameURL = frame.getAttribute("data-src") || frame.getAttribute("src");
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
      window.NCDLSStartup?.reset();
      if (window.NCDLSStartup) dialog.close();
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
      window.NCDLSStartup?.show({stage:"error",title:"重启未完成",detail:error.message});
    } finally {
      restarting = false;
      restart.disabled = false;
    }
  }
  restart.addEventListener("click", restartGame);
  if (window.NCDLSStartup) window.NCDLSStartup.retry = restartGame;
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
  // A small parent-page history survives a stalled game animation loop.
  // No uploads, storage writes, extra asset requests or automatic restarts.
  const diagnose = document.querySelector('#diagnose-game');
  if (diagnose) {
    const history = [];
    function sample() {
      try {
        const g = frame.contentWindow, l = g.Laya;
        return { time: Date.now(), hidden: g.document.hidden,
          frame: l?.timer?.currFrame ?? null, loop: g.W?.FPS?.lc ?? null,
          rendering: l?.stage?.renderingEnabled ?? null,
          engineVisible: l?.stage?.isVisibility ?? null,
          timerScale: l?.timer?.scale ?? null, paused: !!g.Ad?.Var?._Global?.pause, pauseDialog: !!g.Ad?.Var?._Global?.pause_dialog };
      } catch (error) { return { time: Date.now(), readError: String(error) }; }
    }
    setInterval(() => { history.push(sample()); if (history.length > 20) history.shift(); }, 1000);
    function snapshot() {
      const g = frame.contentWindow, l = g.Laya, web = g.NCDLSWeb, game = g.Game;
      const ui = g.GameUI?.displayObject?._events?.mousedown;
      const listeners = (Array.isArray(ui) ? ui : ui ? [ui] : []);
      return { ...sample(), mode: web?.hooks?.mode.GetMode(), level: web?.hooks?.mode.GetGrade(),
        initializing: game?.initing, gaming: game?.hfsm.isGaming, win: game?.hfsm.isWin,
        fail: game?.hfsm.isFail, gameTime: game?.count_time,
        stage: l?.stage && { width:l.stage.width, height:l.stage.height,
          visible:l.stage.visible, focused:l.stage.isFocused, frameRate:l.stage.frameRate },
        webglLost: l?.WebGLContext?.mainContext?.isContextLost?.(),
        errors: web?.errors?.slice(-10),
        input: { enabled:l?.MouseManager?.enabled, touchId:l?.MouseManager?.instance?._curTouchID,
          heldGestures:listeners.map(e => e.caller?._identifier).filter(v => v !== undefined),
          downs:l?.TouchManager?.I?.preDowns?.length },
        timers: l && Object.fromEntries(['systemTimer','startTimer','physicsTimer','updateTimer','lateTimer','timer']
          .map(name => [name, l[name] && {frame:l[name].currFrame,time:l[name].currTimer,delta:l[name].delta,scale:l[name].scale}])),
        cars: game?.map_script?.list_cars?.slice(0,40).map(c => ({ id:c.sp3?.id, color:c.str_color,
          active:c.sp3?.activeInHierarchy, idle:c.hfsm.isIdle, park:c.hfsm.isPark, wait:c.hfsm.isWait,
          position:c.sp3 && {x:c.sp3.transform.position.x,y:c.sp3.transform.position.y,z:c.sp3.transform.position.z} })),
        cards: game?.map_2d?.graphs?.slice(0,24).map(c => ({name:c.name,x:c.x,y:c.y,rotation:c.rotation,
          disposed:c.isDisposed,rig:c.rig && {type:c.rig.type,enabled:c.rig.enabled}})) };
    }
    const summary = document.querySelector('#diagnose-summary');
    const output = document.querySelector('#diagnose-content');
    diagnose.addEventListener('click', async () => {
      diagnose.disabled = true;
      summary.textContent = '正在读取游戏状态，请稍等…';
      try {
        const before = snapshot(), recent = history.slice();
        await new Promise(resolve => setTimeout(resolve, 1000));
        const after = snapshot();
        const verdict = after.webglLost ? '绘图环境已中断' : after.errors?.length ? '记录到运行错误' :
          after.frame === null ? '游戏尚未初始化' : before.frame === after.frame ? '检测到游戏帧没有推进' :
          after.rendering === false ? '游戏绘制处于停用状态' : after.paused ? '游戏处于暂停状态' :
          '游戏帧仍在推进，需要结合车辆和卡片状态排查';
        output.value = JSON.stringify({release:'20261124.7',verdict,userAgent:navigator.userAgent,
          viewport:{width:innerWidth,height:innerHeight,dpr:devicePixelRatio},history:recent,before,after},null,2);
        summary.textContent = verdict + '。请复制诊断信息发回聊天。';
        document.querySelector('#diagnose-result').hidden = false;
      } catch (error) { summary.textContent = '读取未完成：' + error.message; }
      finally { diagnose.disabled = false; }
    });
    document.querySelector('#diagnose-copy').addEventListener('click', async () => {
      const tip = document.querySelector('#diagnose-copy-status');
      try { await navigator.clipboard.writeText(output.value); tip.textContent = '已复制，可以粘贴回聊天。'; }
      catch { output.focus(); output.select(); tip.textContent = '请长按文本框，全选并复制。'; }
    });
  }
})();
