const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(__dirname,'../web_mobile/dist');
const reportDir=path.resolve(process.env.NCDLS_PROBE_OUTPUT||'/tmp/ncdls-unlimited-probe');fs.mkdirSync(reportDir,{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.wasm':'application/wasm','.png':'image/png','.jpg':'image/jpeg'};
(async()=>{
 const kind=process.env.NCDLS_ENGINE||'chrome',origin='https://ncdls.test';
 const browser=await(kind==='webkit'?webkit:chromium).launch(kind==='webkit'?{headless:true}:{headless:true,...(process.env.NCDLS_CHROME_PATH?{executablePath:process.env.NCDLS_CHROME_PATH}:{})});
 const out={engine:kind,origin,release:'20261125.4',iphoneHardware:false,levels:[],props:[]};
 try{
 const context=await browser.newContext({viewport:{width:393,height:852},deviceScaleFactor:3,isMobile:true,hasTouch:true,serviceWorkers:'block'});
 await context.route('**/*',async route=>{const u=new URL(route.request().url());if(u.protocol==='blob:'||u.protocol==='data:')return route.continue();if(u.origin!==origin)return route.abort();const n=decodeURIComponent(u.pathname),f=path.resolve(root,'.'+n,n.endsWith('/')?'index.html':'');if(!f.startsWith(root+'/')||!fs.existsSync(f))return route.fulfill({status:404,body:'missing'});await route.fulfill({body:fs.readFileSync(f),contentType:mime[path.extname(f)]||'application/octet-stream'});});
 const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
 await page.goto(origin+'/');
 await page.waitForFunction(()=>{const g=document.querySelector('#game')?.contentWindow;return g?.Game?.initing===false&&document.querySelector('#startup').hidden;},null,{timeout:45000});
 await page.waitForTimeout(2000);
 let frame=page.frames().find(f=>f.url().includes('game.html'));
 async function select(mode,grade,count){
  await page.waitForFunction(()=>!document.querySelector("#restart-game").disabled);
  await frame.waitForFunction(()=>!Game.initing&&!NCDLSWeb.loadingUI.instance,null,{timeout:30000});
  await page.locator('#open-levels').click();await page.locator('#mode').selectOption(String(mode));await page.locator('#level').fill(String(grade));
  const hint=await page.locator('#level-template').textContent();assert(hint.includes('模板 '+((grade-1)%count+1)));
  await page.locator('#level-form button[type=submit]').click();
  try { await frame.waitForFunction(({mode,grade})=>!Game.initing&&Game.hfsm.isGaming&&NCDLSWeb.hooks.mode.GetMode()===mode&&NCDLSWeb.hooks.mode.GetGrade()===grade,{mode,grade},{timeout:15000}); } catch(e) { console.log('SELECT_FAILED', {mode,grade},await page.locator('#menu-status').textContent(),await frame.evaluate(()=>({mode:NCDLSWeb.hooks.mode.GetMode(),grade:NCDLSWeb.hooks.mode.GetGrade(),template:Game.temp?.id,loading:!!NCDLSWeb.loadingUI.instance,init:Game.initing,gaming:Game.hfsm.isGaming,errors:NCDLSWeb.errors}))); throw e; }
  await page.waitForTimeout(600);
  const result=await frame.evaluate(()=>({mode:NCDLSWeb.hooks.mode.GetMode(),grade:NCDLSWeb.hooks.mode.GetGrade(),template:Game.temp.id,magnet:GameUI.btn_prop_magnet.lab_count.text,refresh:GameUI.btn_prop_refresh.lab_count.text,errors:NCDLSWeb.errors}));
  assert.equal(result.template,(grade-1)%count+1);assert.equal(result.magnet,'1');assert.equal(result.refresh,'1');assert.deepEqual(result.errors,[]);
  out.levels.push(result);console.log(JSON.stringify(result));
 }
 for(const grade of [294,295,296,588,589,1000000])await select(0,grade,294);
 for(const [mode,count] of [[2,12],[3,27],[4,30],[5,30]]) await select(mode,1000000,count);
 // Restart restores the selected high grade/mode instead of resetting to classic.
 await page.locator('#open-levels').click();await page.locator('#restart-game').click();
 await page.waitForFunction(()=>{const g=document.querySelector('#game')?.contentWindow;return g?.Game?.initing===false&&g.NCDLSWeb?.hooks?.mode.GetMode()===5&&g.NCDLSWeb.hooks.mode.GetGrade()===1000000&&document.querySelector('#startup').hidden;},null,{timeout:45000});
 await page.waitForFunction(()=>!document.querySelector('#restart-game').disabled);
 frame=page.frames().find(f=>f.url().includes('game.html'));
 await frame.waitForFunction(()=>!Game.initing&&Game.temp.id===10&&NCDLSWeb.hooks.mode.GetMode()===5);
 out.restart=await frame.evaluate(()=>({mode:NCDLSWeb.hooks.mode.GetMode(),grade:NCDLSWeb.hooks.mode.GetGrade(),template:Game.temp.id}));
 await select(0,294,294);await page.waitForTimeout(1800);
 await frame.evaluate(()=>{
  window.propResults=[];window.propAds=0;Ad.showVideoAd=()=>{propAds++;};
  for(const name of ['btn_prop_magnet','btn_prop_refresh']) {
   const button=GameUI[name],dispatch=button.dispatcher;
   if(dispatch.__probeWrapped)continue;dispatch.__probeWrapped=true;
   const event=dispatch.event;dispatch.event=function(type,args){
    if((type==='GamePropMagnet'||type==='GamePropRefresh')&&args?.[0]===true&&typeof args[1]==='function'){
     const callback=args[1];args=[true,function(success,message){propResults.push({type,success,message});return callback.apply(this,arguments);}];
    }
    return event.call(this,type,args);
   };
  }
 });
 async function tapProp(name){
  const point=await frame.evaluate(name=>{const b=GameUI[name],p=b.localToGlobal(b.width/2,b.height/2);return{x:p.x*innerWidth/Laya.stage.width,y:p.y*innerHeight/Laya.stage.height};},name);
  const box=await page.locator('#game').boundingBox();await page.touchscreen.tap(box.x+point.x,box.y+point.y);
 }
 for(let i=0;i<3;i++){await tapProp('btn_prop_refresh');await page.waitForTimeout(2400);}
 // Park several reachable cars by real touch, then use magnet on an incomplete parked car.
 for(let i=0;i<12;i++){
  const ready=await frame.evaluate(()=>Game.map_script.car_park.some(p=>p.car&&p.car.hfsm.isWait&&p.car.screws.length<p.car.total));
  if(ready)break;
  const point=await frame.evaluate(()=>{const cars=Game.map_script.list_cars,c=cars.find(c=>c.hfsm.isIdle&&c.sp3.activeInHierarchy&&PhyTool.CanMove(c,cars));if(!c)return null;const p=new Laya.Vector4();Game.camera.worldToViewportPoint(new Laya.Vector3(c.worldCenter.x,.5,c.worldCenter.y),p);return{x:p.x*innerWidth/Laya.stage.width,y:p.y*innerHeight/Laya.stage.height};});
  if(!point)break;const box=await page.locator('#game').boundingBox();await page.touchscreen.tap(box.x+point.x,box.y+point.y);await page.waitForTimeout(1500);
 }
 console.log('MAGNET_READY',await frame.evaluate(()=>Game.map_script.car_park.filter(p=>p.car).map(p=>({wait:p.car.hfsm.isWait,screws:p.car.screws.length,total:p.car.total}))));
 for(let i=0;i<2;i++) {await tapProp('btn_prop_magnet');await page.waitForTimeout(2800);}
 out.props=await frame.evaluate(()=>({results:propResults,ads:propAds,magnet:GameUI.btn_prop_magnet.lab_count.text,refresh:GameUI.btn_prop_refresh.lab_count.text,render:Laya.stage.renderingEnabled,frame:Laya.timer.currFrame,metrics:NCDLSWeb.metrics.read(),errors:NCDLSWeb.errors}));
 console.log('PROPS',JSON.stringify(out.props));assert.equal(out.props.ads,0);assert.equal(out.props.magnet,'1');assert.equal(out.props.refresh,'1');assert(out.props.results.filter(r=>r.type==='GamePropRefresh'&&r.success).length>=2,'Repeated successful refresh');assert(out.props.results.some(r=>r.type==='GamePropMagnet'&&r.success),'Successful magnet');assert.equal(out.props.render,true);assert.equal(out.props.metrics.falseWrites,0);assert.deepEqual(out.props.errors,[]);assert.deepEqual(errors,[]);
 await page.screenshot({path:path.join(reportDir,`${kind}.png`)});
 out.success=true;await context.close();
 }catch(error){out.success=false;out.error=error.stack;process.exitCode=1;console.error(error);}
 finally{await browser.close();fs.writeFileSync(path.join(reportDir,`${kind}.json`),JSON.stringify(out,null,2));}
})();
