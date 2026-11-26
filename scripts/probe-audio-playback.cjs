// Fault injection at the native audio boundary, with the real game/runtime.
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.env.NCDLS_PROBE_ROOT||path.join(__dirname,'../web_mobile/dist'));
const outDir=path.resolve(process.env.NCDLS_PROBE_OUTPUT||'/tmp/ncdls-audio-probe');fs.mkdirSync(outDir,{recursive:true});
const engine=process.env.NCDLS_ENGINE||'chrome',baseline=process.env.NCDLS_PROBE_BASELINE==='1';
const origin='https://ncdls.test',mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.wasm':'application/wasm','.png':'image/png','.jpg':'image/jpeg','.mp3':'audio/mpeg'};
const report={engine,baseline,iphoneHardware:false,scope:'Real runtime, synthetic native audio play failures; not an iPhone autoplay-policy reproduction.',cases:[]};
(async()=>{
 const browser=await(engine==='webkit'?webkit:chromium).launch(engine==='webkit'?{headless:true}:{headless:true,...(process.env.NCDLS_CHROME_PATH?{executablePath:process.env.NCDLS_CHROME_PATH}:{})});
 try{
 for(const fault of baseline?['reject']:['reject','throw']){
  const context=await browser.newContext({viewport:{width:393,height:852},deviceScaleFactor:3,isMobile:true,hasTouch:true,userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.7 Mobile/15E148 Safari/604.1',serviceWorkers:'block'});
  await context.route('**/*',async route=>{const u=new URL(route.request().url());if(!/^https?:$/.test(u.protocol))return route.continue();if(u.origin!==origin)return route.abort();const n=decodeURIComponent(u.pathname),f=path.resolve(root,'.'+n,n.endsWith('/')?'index.html':'');if(!f.startsWith(root+'/')||!fs.existsSync(f))return route.fulfill({status:404,body:'missing'});return route.fulfill({body:fs.readFileSync(f),contentType:mime[path.extname(f)]||'application/octet-stream'});});
  await context.addInitScript(({fault})=>{
   window.__audioFault=fault;window.__audioAttempts=0;
   // Music is off by default; force only that test setting before the real UI starts.
   let web;Object.defineProperty(window,'NCDLSWeb',{configurable:true,get:()=>web,set(value){
    web=value;const start=value.start;value.start=function(...args){
     if(window.__fatalBoot)throw new Error('test-only non-audio failure');
     Object.defineProperty(Ad.Global,'sound_switch',{configurable:true,get:()=>1});
     return start.apply(this,args);
    };
   }});
   const play=HTMLMediaElement.prototype.play;
   HTMLMediaElement.prototype.play=function(...args){
    if(this.tagName!=='AUDIO')return play.apply(this,args);
    __audioAttempts++;
    if(__audioFault==='throw')throw new DOMException('Audio playback temporarily unavailable','InvalidStateError');
    if(__audioFault==='reject')return Promise.reject(new DOMException('Audio requires user interaction','NotAllowedError'));
    if(__audioFault==='native')return play.apply(this,args);
    return Promise.resolve();
   };
  },{fault});
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(origin+'/');await page.locator('#resource-choice').waitFor({state:'visible',timeout:20000});await page.locator('#resource-lazy').click();
  await page.waitForFunction(()=>{const w=document.querySelector('#game')?.contentWindow;return w?.NCDLSWeb?.errors.length || (w?.Game?.hfsm.isGaming&&!w.Game.initing&&document.querySelector('#startup').hidden);},null,{timeout:60000});
  let frame=page.frames().find(f=>f.url().includes('game.html'));
  const state=()=>frame.evaluate(()=>({attempts:__audioAttempts,warning:NCDLSWeb.audioWarning,errors:NCDLSWeb.errors.slice(),frame:Laya.timer.currFrame,gaming:!!Game?.hfsm.isGaming,render:Laya.stage.renderingEnabled,mode:NCDLSWeb.hooks.mode.GetMode(),level:NCDLSWeb.hooks.mode.GetGrade()}));
  const row={fault,boot:await state()};report.cases.push(row);assert(row.boot.attempts>0,'Must exercise actual game music startup');
  report.release=(await page.locator('#levels').textContent()).match(/2026\d{4}\.\d+/)?.[0];
  if(baseline){assert(row.boot.errors.length>0,'Original native rejection must fail boot');row.pageErrors=errors;await context.close();continue;}
  assert.deepEqual(row.boot.errors,[]);assert(row.boot.warning);assert(row.boot.gaming&&row.boot.render);assert.equal(await page.locator('#startup').isVisible(),false);
  await page.waitForTimeout(1200);assert((await state()).frame>row.boot.frame+15,'Frames continue without audio');
  await frame.evaluate(()=>{__audioFault='success';});
  const box=await page.locator('#game').boundingBox();await page.touchscreen.tap(box.x+15,box.y+100);
  await frame.waitForFunction(()=>!NCDLSWeb.audioWarning,null,{timeout:10000});
  row.recovered=await state();assert(row.recovered.attempts>row.boot.attempts,'A real gesture retries blocked music');
  if(fault==='reject'){
   // Exercise both menu level changes and the real iframe teardown/restart.
   await page.locator('#open-levels').click();await page.locator('#mode').selectOption('5');await page.locator('#level').fill('1000000');await page.locator('#level-form button[type=submit]').click();
   await frame.waitForFunction(()=>!Game.initing&&!NCDLSWeb.loadingUI.instance&&NCDLSWeb.hooks.mode.GetMode()===5,null,{timeout:45000});
   await page.locator('#open-levels').click();await page.locator('#restart-game').click();
   await page.waitForFunction(()=>{const w=document.querySelector('#game')?.contentWindow;return w?.NCDLSWeb?.hooks?.mode.GetMode()===5&&!w.Game.initing&&w.Game.hfsm.isGaming&&document.querySelector('#startup').hidden&&!document.querySelector('#restart-game').disabled;},null,{timeout:60000});
   frame=page.frames().find(f=>f.url().includes('game.html'));row.restart=await state();
   assert.equal(row.restart.level,1000000);assert(row.restart.attempts>0&&row.restart.warning);assert.deepEqual(row.restart.errors,[]);
   await page.screenshot({path:path.join(outDir,`${engine}-restart.png`)});
   assert.deepEqual(errors,[],'Handled audio failures must not be unhandled page errors');
   // Fatal non-audio errors remain fatal; their stack stays in diagnostics only.
   await context.addInitScript(()=>{window.__fatalBoot=true;});
   await page.locator('#open-levels').click();await page.locator('#restart-game').click();
   await page.waitForFunction(()=>document.querySelector('#startup-title').textContent==='重启未完成',null,{timeout:60000});
   row.fatalUI=await page.locator('#startup-detail').textContent();
   assert(!/blob:|native code|test-only|\n/.test(row.fatalUI),'Restart must not show technical stacks');
   frame=page.frames().find(f=>f.url().includes('game.html'));row.fatalRecorded=await frame.evaluate(()=>NCDLSWeb.errors.some(x=>x.includes('test-only non-audio failure')));assert(row.fatalRecorded);
  }
  row.pageErrors=errors;if(fault==='reject')assert(errors.every(x=>x.includes('test-only non-audio failure')));else assert.deepEqual(errors,[]);await context.close();
 }
 report.success=true;
 }catch(error){report.success=false;report.error=error.stack;process.exitCode=1;console.error(error);}
 finally{await browser.close();fs.writeFileSync(path.join(outDir,`${baseline?'baseline-':''}${engine}.json`),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({engine,baseline,success:report.success,release:report.release,cases:report.cases.length}));}
})();
