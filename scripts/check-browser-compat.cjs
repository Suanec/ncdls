// Regression checks for bootstrap ordering and restart/save behavior, without a GPU.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function element() {
  return { hidden: true, textContent: '', handlers: {}, classList: { add() {}, remove() {} },
    addEventListener(type, fn) { this.handlers[type] = fn; } };
}
const status = element(), boot = element(), reload = element();
const docHandlers = {}, winHandlers = {};
let initialized = false, atCreation;
const context = {
  URL, console: {error() {}}, HTMLCanvasElement: class {},
  performance: {now:()=>0,getEntriesByType:()=>[]},
  setInterval:()=>1,clearInterval(){},setTimeout,clearTimeout,
  requestAnimationFrame:fn=>queueMicrotask(fn),
  location: {href: 'https://example.test/ncdls/game.html?v=test', origin: 'https://example.test'},
  document: {
    querySelector: (s) => ({'#status':status, '#boot':boot, '#reload-game':reload})[s],
    addEventListener: (type, fn) => {docHandlers[type] = fn;},
  },
  Laya: {Config:{useWebGL2:true},Texture:{create(){}}},
  MediaMetaMap: {ani9:{pub:{},m2:{}}},
  W: {M2: class {constructor() { initialized=true; atCreation=context.Laya.Config.useWebGL2; }}},
  parent: {postMessage() {}},
  addEventListener: (type, fn) => {winHandlers[type] = fn;},
  fetch: async () => ({ok:true,json:async()=>[]}),
};
context.window = context;
vm.runInNewContext(fs.readFileSync(path.join(root, 'web/browser.js'),'utf8'), context);
assert.equal(initialized,false);
context.NCDLSWeb.start({},{});
assert.equal(atCreation,true,'Bootstrap must preserve the engine renderer preference');
assert.equal(context.NCDLSWeb.renderCompatibility,'engine-default');
assert.equal(context.MediaMetaMap.ani9.base_url,'https://example.test/ncdls');
let prevented=false;
docHandlers.webglcontextlost({target:new context.HTMLCanvasElement(),preventDefault(){prevented=true;}});
assert(prevented);
assert.equal(reload.hidden,false);
assert.match(status.textContent,/绘图环境已中断/);

async function checkRestart(selectedMode, selectedLevel, badBoot=false) {
  const ids = ['#levels','#mode','#level','#menu-status','#restart-game','#open-levels','#close-levels','#level-form'];
  const nodes = Object.fromEntries(ids.map(id=>[id,element()]));
  nodes['#levels'].showModal=function(){this.open=true;};
  nodes['#levels'].close=function(){this.open=false;};
  let saved=0, opened, current, load, documentId=0;
  const frame = {getAttribute(){return 'game.html?v=test';},addEventListener(type,fn){load=fn;},focus(){}};
  const createGame = (mode, level) => ({NCDLSWeb:{errors:[],hooks:{
    mode:{GetMode:()=>mode,GetGrade:()=>{if(badBoot&&documentId===0)throw Error('not loaded');return level;}},
    game:{hfsm:{isGaming:true},initing:false,scene3D:{}},
    openLevel:async(m,l)=>{opened=[m,l];mode=m;level=l;current.NCDLSWeb.hooks.game.scene3D={};},
  }},W:{ICache:{saveData(){saved++;},getGrade:()=>level}}});
  current=createGame(selectedMode,selectedLevel);
  Object.defineProperty(frame,'contentWindow',{get:()=>current});
  Object.defineProperty(frame,'src',{set(value){documentId++;if(value==='about:blank'){current={};queueMicrotask(()=>load());}else{assert.equal(value,'game.html?v=test');current=createGame(0,selectedMode===0?selectedLevel:1);}}});
  const messages={};
  const c={document:{querySelector:(id)=>id==='#game'?frame:nodes[id]},location:{origin:'https://example.test'},setTimeout,Date};
  c.window={addEventListener:(type,fn)=>{messages[type]=fn;}};
  vm.runInNewContext(fs.readFileSync(path.join(root,'web/launcher.js'),'utf8'),c);
  messages.message({origin:'https://wrong.test',source:current,data:{type:'ncdls:restart'}});
  assert.equal(documentId,0,'Other origins must not trigger restart');
  await nodes['#restart-game'].handlers.click();
  assert.equal(saved,1);
  assert.equal(documentId,2);
  assert.equal(nodes['#levels'].open,false);
  assert.equal(nodes['#restart-game'].disabled,false);
  if(selectedMode!==0&&!badBoot)assert.deepEqual(opened,[selectedMode,selectedLevel]);
  else assert.equal(opened,undefined);
}
(async()=>{
  await checkRestart(0,100);
  await checkRestart(5,3);
  await checkRestart(0,1,true);
  console.log('Default renderer preservation, context-loss recovery, classic/variant restart and failed-boot recovery passed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
