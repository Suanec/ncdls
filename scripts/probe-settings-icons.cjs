const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.env.NCDLS_PROBE_ROOT || path.join(__dirname,'../web_mobile/dist')), origin='https://ncdls.test', output=process.env.NCDLS_PROBE_OUTPUT || '/tmp/ncdls-settings-icons';
fs.mkdirSync(output,{recursive:true});
const engine=process.env.NCDLS_ENGINE||'chrome';
const report={engine,release:'20261126.2',iphoneHardware:false,scope:'Static install metadata and real game settings in an isolated desktop browser; no iOS home-screen installation.',success:false};
(async()=>{
 const browser=await(engine==='webkit'?webkit:chromium).launch({headless:true,...(engine==='chrome'&&process.env.NCDLS_CHROME_PATH?{executablePath:process.env.NCDLS_CHROME_PATH}:{})});
 const route=async route=>{const u=new URL(route.request().url());if(!/^https?:$/.test(u.protocol))return route.continue();if(u.origin!==origin)return route.abort();const f=path.resolve(root,'.'+decodeURIComponent(u.pathname),u.pathname.endsWith('/')?'index.html':'');if(!f.startsWith(root+'/')||!fs.existsSync(f))return route.fulfill({status:404,body:'missing'});return route.fulfill({body:fs.readFileSync(f),contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.png':'image/png','.wasm':'application/wasm','.mp3':'audio/mpeg'})[path.extname(f)]||'application/octet-stream'});};
 try {
  const nojs=await browser.newContext({javaScriptEnabled:false,serviceWorkers:'block'});await nojs.route('**/*',route);
  const shell=await nojs.newPage();await shell.goto(origin+'/');
  report.staticLinks=await shell.locator('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]').evaluateAll(nodes=>nodes.map(x=>({rel:x.rel,href:x.getAttribute('href'),deferred:x.hasAttribute('data-href')})));
  assert.equal(report.staticLinks.length,3);assert(report.staticLinks.every(x=>x.href&&!x.deferred));
  await shell.goto(origin+'/icons/car-8-180.png');assert.equal(await shell.locator('img').evaluate(x=>x.naturalWidth),180);report.staticIconDecoded=true;await nojs.close();
  const ctx=await browser.newContext({viewport:{width:393,height:852},deviceScaleFactor:3,isMobile:true,hasTouch:true,serviceWorkers:'block'});await ctx.route('**/*',route);
  await ctx.addInitScript(()=>{
   window.__platformVibrations=0;
   let web;Object.defineProperty(window,'NCDLSWeb',{configurable:true,get:()=>web,set(value){web=value;const start=web.start;web.start=function(...args){
    // If the adapter fails to disable either API, these sentinels count the call.
    Ad.vibrateShort=Ad.vibrateLong=()=>{__platformVibrations++;};
    return start.apply(this,args);
   };}});
  });
  const page=await ctx.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(origin+'/');await page.locator('#resource-lazy').click();
  await page.waitForFunction(()=>{const w=document.querySelector('#game')?.contentWindow;return w?.Game?.hfsm.isGaming&&!w.Game.initing&&document.querySelector('#startup').hidden;},null,{timeout:60000});
  const frame=page.frames().find(f=>f.url().includes('game.html'));
  await frame.evaluate(async()=>{
   window.__settings=await FGUI.Async.open('res/atlas/fgui/Setting/Main');
  });
  report.initial=await frame.evaluate(()=>({enabled:Ad.Global.shake_switch,controller:__settings.btn_shake.getController('tab').selectedIndex}));
  report.toggles=[];
  for(let i=0;i<2;i++){
   await frame.evaluate(()=>{__settings.onBtnShake();Ad.vibrateShort('light');Ad.vibrateLong();});
   report.toggles.push(await frame.evaluate(()=>({enabled:Ad.Global.shake_switch,controller:__settings.btn_shake.getController('tab').selectedIndex,platformCalls:__platformVibrations})));
  }
  assert.equal(report.toggles[0].enabled,1-report.initial.enabled);assert.equal(report.toggles[1].enabled,report.initial.enabled);
  for(const r of report.toggles){assert.equal(r.enabled,r.controller);assert.equal(r.platformCalls,0);}
  await frame.evaluate(()=>{__settings.onBtnShake();W.ICache.saveData();});
  const saved=await frame.evaluate(()=>Ad.Global.shake_switch);
  await page.screenshot({path:output+'/'+engine+'-settings.png'});
  await frame.evaluate(()=>__settings.dispose());
  await page.reload();await page.locator('#resource-lazy').click();await page.waitForFunction(()=>{const w=document.querySelector('#game')?.contentWindow;return w?.Game?.hfsm.isGaming&&!w.Game.initing&&document.querySelector('#startup').hidden;},null,{timeout:60000});
  const fresh=page.frames().find(f=>f.url().includes('game.html'));report.reopened=await fresh.evaluate(()=>({enabled:Ad.Global.shake_switch,platformCalls:__platformVibrations,errors:NCDLSWeb.errors}));
  assert.equal(report.reopened.enabled,saved);assert.equal(report.reopened.platformCalls,0);assert.deepEqual(errors,[]);assert.deepEqual(report.reopened.errors,[]);
  report.success=true;await ctx.close();
 }catch(error){report.error=error.stack;process.exitCode=1;console.error(error);}
 finally {await browser.close();fs.writeFileSync(output+'/'+engine+'.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));}
})();
