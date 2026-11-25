const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(__dirname,'../web_mobile/dist');
const reportDir=path.resolve(process.env.NCDLS_PROBE_OUTPUT||'/tmp/ncdls-platform-probe');fs.mkdirSync(reportDir,{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.wasm':'application/wasm','.png':'image/png','.jpg':'image/jpeg'};
(async()=>{
 const kind=process.env.NCDLS_ENGINE||'chrome',origin='https://ncdls.test';
 const browser=await(kind==='webkit'?webkit:chromium).launch(kind==='webkit'?{headless:true}:{headless:true,...(process.env.NCDLS_CHROME_PATH?{executablePath:process.env.NCDLS_CHROME_PATH}:{})});
 const out={engine:kind,origin,release:'20261125.3',iphoneHardware:false,levels:[]};
 try{
 for(const level of [2,294]){
 const context=await browser.newContext({viewport:{width:393,height:852},deviceScaleFactor:3,isMobile:true,hasTouch:true,serviceWorkers:'block'});
 await context.route('**/*',async route=>{const u=new URL(route.request().url());if(u.protocol==='blob:'||u.protocol==='data:')return route.continue();if(u.origin!==origin)return route.abort();const n=decodeURIComponent(u.pathname);const f=path.resolve(root,'.'+n,n.endsWith('/')?'index.html':'');if(!f.startsWith(root+'/')||!fs.existsSync(f))return route.fulfill({status:404,body:'missing'});await route.fulfill({body:fs.readFileSync(f),contentType:mime[path.extname(f)]||'application/octet-stream'});});
 const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
 await page.goto(origin+'/');
 try {await page.waitForFunction(()=>{const g=document.querySelector('#game')?.contentWindow;return g?.Game?.initing===false&&document.querySelector('#startup').hidden;},null,{timeout:30000});}
 catch(error){console.log('BOOT',await page.evaluate(()=>({body:document.body.innerText,iframe:document.querySelector('#game')?.contentDocument?.body?.innerText,game:!!document.querySelector('#game')?.contentWindow.Game})));throw error;}
 await page.waitForTimeout(2500);
 const frame=page.frames().find(f=>f.url().includes('game.html'));
 await frame.evaluate(n=>NCDLSWeb.hooks.openLevel(0,n),level);
 await frame.waitForFunction(()=>!Game.initing&&Game.hfsm.isGaming&&Game.map_script?.list_cars?.length,null,{timeout:30000});
 const result={level,samples:[],taps:0};
 for(let i=0;i<7;i++){
  // Real pointer input; no artificial clock/frame advance, no forced render.
  const point=await frame.evaluate(()=>{if(!Game.hfsm.isGaming||Ad.Var._Global.pause)return null;const cars=Game.map_script.list_cars;const c=cars.find(c=>c.hfsm.isIdle&&c.sp3.activeInHierarchy&&PhyTool.CanMove(c,cars));if(!c)return null;const p=new Laya.Vector4();Game.camera.worldToViewportPoint(new Laya.Vector3(c.worldCenter.x,.5,c.worldCenter.y),p);return{x:p.x*innerWidth/Laya.stage.width,y:p.y*innerHeight/Laya.stage.height};});
  if(point){const box=await page.locator('#game').boundingBox();await page.touchscreen.tap(box.x+point.x,box.y+point.y);result.taps++;}
  await page.waitForTimeout(5000);
  const sample=await frame.evaluate(()=>({frame:Laya.timer.currFrame,render:Laya.stage.renderingEnabled,visible:Laya.stage.isVisibility,metrics:NCDLSWeb.metrics.read(),cars:Game.map_script?.list_cars?.length,cards:Game.map_2d?.graphs?.length,errors:NCDLSWeb.errors}));
  result.samples.push(sample);console.log(JSON.stringify({engine:kind,level,...sample}));
  assert.equal(sample.render,true);assert.equal(sample.metrics.falseWrites,0);assert.equal(sample.metrics.repairs,0);assert.equal(sample.errors.length,0);
 }
 assert(result.samples.at(-1).frame>901,'Must cross the real legacy cutoff');
 assert(result.samples.at(-1).metrics.fps>40,'No progressively growing host-check cost');
 assert.equal(errors.length,0,errors.join('\n'));
 // Exercise the actual engine audio recovery with a device rejection and retry.
 const audio=await frame.evaluate(async()=>{const ctx=Laya.WebAudioSound.ctx,original=ctx.resume,warning=NCDLSWeb.audioWarning;let calls=0;Object.defineProperty(ctx,'state',{configurable:true,value:'suspended'});ctx.resume=()=>{calls++;return Promise.reject(new Error('Failed to start the audio device'));};Laya.SoundManager._recoverWebAudio();await new Promise(r=>setTimeout(r,0));const failed=NCDLSWeb.audioWarning;ctx.resume=()=>{calls++;Object.defineProperty(ctx,'state',{configurable:true,value:'running'});return Promise.resolve();};document.dispatchEvent(new Event('pointerdown'));await new Promise(r=>setTimeout(r,0));const recovered=NCDLSWeb.audioWarning;ctx.resume=original;delete ctx.state;return{calls,failed,recovered,errors:NCDLSWeb.errors.length,render:Laya.stage.renderingEnabled};});
 assert.match(audio.failed,/Failed to start/);assert.equal(audio.recovered,'');assert.equal(audio.errors,0);assert(audio.render);result.audio=audio;
 await page.locator('#open-levels').click();await page.locator('#diagnose-game').click();await page.waitForFunction(()=>!document.querySelector('#diagnose-game').disabled);result.summary=await page.locator('#diagnose-content').inputValue();assert(result.summary.length<=600);assert(result.summary.includes('20261125.3'));
 await page.screenshot({path:path.join(reportDir,`${kind}-${level}.png`)});out.levels.push(result);await context.close();
 }
 out.success=true;
 }catch(error){out.success=false;out.error=error.stack;process.exitCode=1;console.error(error);}
 finally{await browser.close();fs.writeFileSync(path.join(reportDir,`fixed-${kind}.json`),JSON.stringify(out,null,2));}
})();
