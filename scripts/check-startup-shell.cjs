const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=process.env.NCDLS_ROOT||path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'web/index.html'),'utf8');
assert(!/<iframe[^>]*\ssrc=/s.test(html),'Game must not load during HTML parsing');
assert(!/<(?:script|link)[^>]*\s(?:src|href)="(?:https?:|launcher)/.test(html),'No blocking launcher asset in initial HTML');
const nodes=Object.fromEntries(['#game','#startup','#startup-title','#startup-detail','#startup-progress','#startup-time','#startup-help','#startup-retry'].map(id=>[id,{hidden:false,textContent:'',dataset:{},handlers:{},removeAttribute(k){delete this[k]},addEventListener(k,v){this.handlers[k]=v}}]));
nodes['#game'].contentWindow={};nodes['#game'].dataset.src='game.html?v=test';
const listeners={},frames=[],added=[],links=[{dataset:{href:'launcher.css'}}],source={dataset:{src:'launcher.js'},hasAttribute:k=>k==='data-launcher'};
const c={Date,Math,location:{origin:'https://game.test',reload(){}},performance:{mark(){}},setInterval(){},setTimeout:fn=>fn(),requestAnimationFrame:fn=>frames.push(fn),document:{readyState:'loading',querySelector:s=>nodes[s],querySelectorAll:s=>s.startsWith('link')?links:[source],createElement:()=>({}),head:{append:s=>added.push(s)},addEventListener:(type,fn)=>listeners[type]=fn},addEventListener:(type,fn)=>listeners[type]=fn};c.window=c;
vm.runInNewContext(fs.readFileSync(path.join(root,'web/startup.js'),'utf8'),c);
assert.equal(added.length,0);assert.equal(nodes['#game'].src,undefined);
listeners.DOMContentLoaded();assert.equal(added.length,0);frames.shift()();assert.equal(added.length,0);frames.shift()();assert.equal(added.length,1);assert.equal(nodes['#game'].src,undefined);
added[0].onload();assert.equal(nodes['#game'].src,'game.html?v=test');
listeners.message({origin:'https://evil.test',source:nodes['#game'].contentWindow,data:{type:'ncdls:ready'}});assert.equal(nodes['#startup'].hidden,false);
listeners.message({origin:c.location.origin,source:nodes['#game'].contentWindow,data:{type:'ncdls:progress',stage:'scripts',title:'Downloading',detail:'half',loaded:50,total:100}});assert.equal(nodes['#startup-progress'].value,50);
listeners.message({origin:c.location.origin,source:nodes['#game'].contentWindow,data:{type:'ncdls:ready'}});assert.equal(nodes['#startup'].hidden,true);
c.NCDLSStartup.reset();assert.equal(nodes['#startup'].hidden,false);
added.length=0;frames.length=0;delete nodes['#game'].src;let observer;
c.PerformanceObserver=class {
  static supportedEntryTypes=['paint'];
  constructor(callback){this.callback=callback;observer=this;}
  observe(){} disconnect(){}
};
vm.runInNewContext(fs.readFileSync(path.join(root,'web/startup.js'),'utf8'),c);
listeners.DOMContentLoaded();assert.equal(frames.length,0);assert.equal(added.length,0);
observer.callback({getEntries:()=>[{name:'first-contentful-paint'}]});
frames.shift()();assert.equal(added.length,0);frames.shift()();assert.equal(added.length,1);
console.log('Startup shell checks passed: HTML-first, two-frame gate, deferred iframe, measured progress, retry reset, and origin isolation.');

// Mobile startup must wait for cache control, regardless of script load order.
(async () => {
  delete c.PerformanceObserver; delete nodes['#game'].src;
  added.length=0; frames.length=0;
  const mobile={dataset:{src:'mobile.js'},hasAttribute:k=>k==='data-before-game'};
  c.document.querySelectorAll=s=>s.startsWith('link')?links:[source,mobile];
  let resolveCache; c.NCDLSPrepareCache=new Promise(resolve=>{resolveCache=resolve;});
  vm.runInNewContext(fs.readFileSync(path.join(root,'web/startup.js'),'utf8'),c);
  listeners.DOMContentLoaded();frames.shift()();frames.shift()();
  added[0].onload();assert.equal(nodes['#game'].src,undefined);
  added[1].onload();assert.equal(nodes['#game'].src,undefined);
  resolveCache();await Promise.resolve();assert.equal(nodes['#game'].src,'game.html?v=test');
  delete nodes['#game'].src;added.length=0;frames.length=0;
  let choose;c.NCDLSBeforeGame=new Promise(resolve=>{choose=resolve;});
  vm.runInNewContext(fs.readFileSync(path.join(root,'web/startup.js'),'utf8'),c);
  listeners.DOMContentLoaded();frames.shift()();frames.shift()();added[0].onload();added[1].onload();
  await Promise.resolve();assert.equal(nodes['#game'].src,undefined,'Cache readiness must not bypass user choice');
  choose();await Promise.resolve();assert.equal(nodes['#game'].src,'game.html?v=test');
  console.log('Mobile iframe waits for lazy-cache preparation after the shell paints.');
})().catch(error=>{console.error(error);process.exitCode=1;});
