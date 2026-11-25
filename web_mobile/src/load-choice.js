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
