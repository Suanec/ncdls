const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(__dirname,'../web_mobile/dist');
const reportDir=path.resolve(process.env.NCDLS_PROBE_OUTPUT||'/tmp/ncdls-resource-probe');fs.mkdirSync(reportDir,{recursive:true});
const types={'.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.wasm':'application/wasm'};
let fault='',damage=true,requests=[];
const server=http.createServer((req,res)=>{
 const n=decodeURIComponent(new URL(req.url,'http://localhost').pathname),f=path.resolve(root,'.'+n,n.endsWith('/')?'index.html':'');requests.push(n);
 if(!f.startsWith(root+'/')||!fs.existsSync(f)){res.writeHead(404);return res.end('missing');}
 res.setHeader('Content-Type',types[path.extname(f)]||'application/octet-stream');res.setHeader('Cache-Control','no-store');
 if(damage && !fault && /^\/res\/.*\.png$/.test(n)) {fault=n;res.end('partial image');return;}
 res.end(fs.readFileSync(f));
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port+'/';
 const engine=process.env.NCDLS_ENGINE||'chrome',browser=await(engine==='webkit'?webkit:chromium).launch(engine==='webkit'?{headless:true}:{headless:true,...(process.env.NCDLS_CHROME_PATH?{executablePath:process.env.NCDLS_CHROME_PATH}:{})});
 const report={engine,release:'20261125.5',cases:[]};
 try{
 for(const choice of (process.env.NCDLS_CASE?[process.env.NCDLS_CASE]:['lazy','all'])){
  damage=choice==='lazy';fault='';requests=[];
  const context=await browser.newContext({viewport:{width:393,height:852},deviceScaleFactor:3,isMobile:true,hasTouch:true});
  await context.addInitScript(()=>{
   window.__progress=[];window.addEventListener('message',e=>{if(e.data?.type==='ncdls:progress')__progress.push(e.data);});
   let web;Object.defineProperty(window,'NCDLSWeb',{configurable:true,get:()=>web,set(value){web=value;const start=value.start;value.start=function(config,UI){window.__rawLoadingProgress=UI.prototype.onEvtProgress;window.__rawSetSize=fgui.GObject.prototype.setSize;window.__rawHandleSize=fgui.GObject.prototype.handleSizeChanged;const dispose=UI.prototype.dispose;UI.prototype.dispose=function(){window.__disposedLoading=this;return dispose.apply(this,arguments);};return start.apply(this,arguments);};}});
  });
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(url);
  await page.locator('#resource-choice').waitFor({state:'visible',timeout:20000});
  assert(!requests.some(n=>n.startsWith('/runtime/')||n.startsWith('/res/')||n.startsWith('/offline-packs/')),'No core/assets before choice');
  await page.locator('#resource-'+choice).click();
  if(choice==='all')assert.equal(await page.locator('#game').getAttribute('src'),null,'Full download blocks engine startup');
  try {await page.waitForFunction(()=>{const g=document.querySelector('#game')?.contentWindow;return window.NCDLSResourceChoiceError||(g?.Game?.initing===false&&g.Game.hfsm.isGaming&&document.querySelector('#startup').hidden);},null,{timeout:120000});}catch(e){console.log('FAILED_STATE',await page.evaluate(()=>({choice:document.querySelector('#resource-choice-status').textContent,offline:document.querySelector('#offline-state').textContent,startup:document.querySelector('#startup').textContent,src:document.querySelector('#game').src,worker:navigator.serviceWorker.controller?.state,choiceError:window.NCDLSResourceChoiceError})),requests.slice(-30));throw e;}
  const error=await page.evaluate(()=>window.NCDLSResourceChoiceError);if(error)throw new Error(error);
  const frame=page.frames().find(f=>f.url().includes('game.html'));
  const details={choice,requests:requests.length,coreRequests:requests.filter(n=>n.startsWith('/runtime/')).length,packs:requests.filter(n=>n.startsWith('/offline-packs/')).length,fault,faultRequests:requests.filter(n=>n===fault).length,progress:await page.evaluate(()=>__progress.map(p=>p.title).filter((x,i,a)=>i===0||a[i-1]!==x))};
  if(choice==='lazy'){
   assert(fault&&details.faultRequests===2,'Corrupt image redownloads before parsing');assert(details.progress.includes('资源版本不匹配，正在更新'));assert.equal(details.packs,0);
  }else{assert(details.packs>0);assert(!requests.some(n=>n.startsWith('/res/')),'Complete package serves level images/models from cache');}
  await frame.waitForFunction(()=>window.__disposedLoading?.isDisposed,null,{timeout:15000});
  details.lateProgress=await frame.evaluate(()=>{
   let originalError='';try{__rawLoadingProgress.call(__disposedLoading,.53);}catch(e){originalError=String(e);}
   NCDLSWeb.loadingUI.prototype.onEvtProgress.call(__disposedLoading,.54);
   const object=new fgui.GObject();object.dispose();let originalSizingError='';try{__rawHandleSize.call(object);}catch(e){originalSizingError=String(e);}
   object.setSize(20,20);
   return{originalError,originalSizingError,guarded:true};
  });
  assert.match(details.lateProgress.originalSizingError,/null|size/i);
  const before=requests.length;await page.reload();
  await page.waitForFunction(()=>{const g=document.querySelector('#game')?.contentWindow;return g?.Game?.initing===false&&document.querySelector('#startup').hidden;},null,{timeout:60000});
  assert.equal(await page.locator('#resource-choice').isVisible(),false);assert(!requests.slice(before).some(n=>n.startsWith('/runtime/')||n.startsWith('/res/')),'Cached revisit downloads neither core nor models');
  details.revisitCached=true;details.errors=errors;assert.deepEqual(errors,[]);report.cases.push(details);console.log(JSON.stringify(details));
  await page.screenshot({path:path.join(reportDir,`${engine}-${choice}.png`)});await context.close();
 }
 report.success=true;
 }catch(error){report.success=false;report.error=error.stack;console.error(error);process.exitCode=1;}
 finally{await browser.close();server.close();fs.writeFileSync(path.join(reportDir,`${engine}.json`),JSON.stringify(report,null,2));}
})();
