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
  Ad:{Global:{shake_switch:1},vibrateShort(){throw Error("Device vibration reached");},vibrateLong(){throw Error("Device vibration reached");}},
  navigator:{}, URL, console: {error() {}}, HTMLCanvasElement: class {},
  performance: {now:()=>0,getEntriesByType:()=>[]},
  setInterval:()=>1,clearInterval(){},setTimeout,clearTimeout,
  requestAnimationFrame:fn=>queueMicrotask(fn),
  location: {href: 'https://example.test/ncdls/game.html?v=test', origin: 'https://example.test'},
  document: {
    querySelector: (s) => ({'#status':status, '#boot':boot, '#reload-game':reload})[s],
    addEventListener: (type, fn) => {docHandlers[type] = fn;},
  },
  Laya: {SoundManager:{},WebAudioSound:{ctx:null},Stage:class {render(){return 42;}},Config:{useWebGL2:true},Texture:{create(){}}},
  MediaMetaMap: {ani9:{pub:{},m2:{}}},
  W: {M2: class {constructor() { initialized=true; atCreation=context.Laya.Config.useWebGL2; }}},
  parent: {postMessage() {}},
  addEventListener: (type, fn) => {winHandlers[type] = fn;},
  fetch: async () => ({ok:true,json:async()=>[]}),
};
class AudioChannel {
  constructor(audio) { this._audio=audio;this.isStopped=false;this.stops=0; }
  play() { this.isStopped=false;this._audio.play(); }
  resume() { this.play(); }
  __resumePlay() { this.play(); }
  stop() { this.isStopped=true;this._audio=null;this.stops++; }
}
context.Laya.AudioSoundChannel=AudioChannel;
context.Laya.AudioSound={_musicAudio:null,_makeMusicOK(){context.Laya.AudioSound._musicAudio.play();}};
context.window = context;
vm.runInNewContext(fs.readFileSync(path.join(root, 'web/browser.js'),'utf8'), context);
assert.equal(initialized,false);
let storedGrade=294, storedMode=0, nativeSaves=0;
context.W.ICache={getGrade:()=>storedGrade,addGrade(){storedGrade++;},saveData(){}};
context.fgui={GObject:class {get isDisposed(){return !this._displayObject;} setSize(){this.handleSizeChanged();} handleSizeChanged(){this._displayObject.size();}}};
const liveObject=new context.fgui.GObject();let sizes=0;liveObject._displayObject={size(){sizes++;}};
const modeHooks={GetMode:()=>storedMode,GetGrade:()=>storedGrade,Save(){nativeSaves++;storedGrade++;return 'variant';}};
context.NCDLSWeb.hooks={mode:modeHooks};
class LoadingUI {
  onEvtProgress(value) { this.progress0.value=value; }
}
context.NCDLSWeb.start({},LoadingUI);
for (const enabled of [0, 1]) {
  context.Ad.Global.shake_switch = enabled;
  context.Ad.vibrateShort("light"); context.Ad.vibrateLong();
  assert.equal(context.Ad.Global.shake_switch, enabled, "Keep the user's switch state");
}
let applied=0;
const screen={displayObject:{},progress0:{set value(v){applied++;}}};
LoadingUI.prototype.onEvtProgress.call(screen,.5);assert.equal(applied,1);
screen.displayObject=null;screen.isDisposed=true;
screen.progress0={set value(v){throw new TypeError("null is not an object (evaluating this._displayObject.size)");}};
assert.doesNotThrow(()=>LoadingUI.prototype.onEvtProgress.call(screen,.8));
assert.equal(applied,1,'Disposed loading UI must ignore late progress updates');
liveObject.setSize();assert.equal(sizes,1);liveObject._displayObject=null;assert.doesNotThrow(()=>liveObject.setSize());assert.doesNotThrow(()=>liveObject.handleSizeChanged());assert.equal(sizes,1);
modeHooks.Save();assert.equal(storedGrade,295);modeHooks.Save();assert.equal(storedGrade,296);
assert.equal(nativeSaves,0,'Classic wins increment once, without skipping template 1');
storedMode=5;assert.equal(modeHooks.Save(),'variant');assert.equal(nativeSaves,1);
storedGrade=Number.MAX_SAFE_INTEGER;modeHooks.Save();assert.equal(storedGrade,Number.MAX_SAFE_INTEGER);
assert.equal(atCreation,true,'Bootstrap must preserve the engine renderer preference');
assert.equal(context.NCDLSWeb.renderCompatibility,'engine-default');
assert.equal(context.MediaMetaMap.ani9.base_url,'https://example.test/ncdls');
const stage = new context.Laya.Stage();
stage.isVisibility = true; stage.renderingEnabled = false;
assert.equal(stage.render(),42); assert.equal(stage.renderingEnabled,true);
assert.equal(context.NCDLSWeb.renderRepairs.length,1);
context.document.hidden=true;stage.renderingEnabled=false;stage.render();
assert.equal(stage.renderingEnabled,false,'Hidden pages must remain suspended');
context.document.hidden=false;
context.Laya.WebGLContext={mainContext:{isContextLost:()=>true}};
stage.render();assert.equal(stage.renderingEnabled,false,'Do not bypass a lost WebGL context');
context.Laya.WebGLContext.mainContext.isContextLost=()=>false;
context.Ad={Var:{_Global:{pause:true}}};stage.render();
assert.equal(context.Ad.Var._Global.pause,true,'Keep an intentional dialog pause');
const meter = context.NCDLSWeb.metrics;
for (const time of [1000,1016,1032]) meter.record(time,2);
context.performance.now=()=>1050;
assert.equal(meter.read().samples,3); assert.equal(meter.read().stale,false);
context.performance.now=()=>20000;
assert.equal(meter.read().samples,3,'Keep frame measurements preceding a long freeze');
assert.equal(meter.read().stale,true); assert.equal(meter.read().lastFrameMs,18968);
let prevented=false;
docHandlers.webglcontextlost({target:new context.HTMLCanvasElement(),preventDefault(){prevented=true;}});
assert(prevented);
assert.equal(reload.hidden,false);
assert.match(status.textContent,/绘图环境已中断/);

async function checkRestart(selectedMode, selectedLevel, badBoot=false, fatal=false) {
  const ids = ['#levels','#mode','#level','#menu-status','#restart-game','#open-levels','#close-levels','#level-form'];
  const nodes = Object.fromEntries(ids.map(id=>[id,element()]));
  nodes['#levels'].showModal=function(){this.open=true;};
  nodes['#levels'].close=function(){this.open=false;};
  let saved=0, opened, current, load, documentId=0;
  const frame = {getAttribute(){return 'game.html?v=test';},addEventListener(type,fn){load=fn;},focus(){}};
  const createGame = (mode, level) => ({NCDLSWeb:{errors:fatal&&documentId>0?['play@[native code]\nvalue@blob:https://game.test/private-stack:1:2']:[],hooks:{
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
  if(fatal) {
    assert.match(nodes['#menu-status'].textContent,/重启未完成/);
    assert(!/blob:|native code|private-stack/.test(nodes['#menu-status'].textContent));
    return;
  }
  assert.equal(nodes['#levels'].open,false);
  assert.equal(nodes['#restart-game'].disabled,false);
  if(selectedMode!==0&&!badBoot)assert.deepEqual(opened,[selectedMode,selectedLevel]);
  else assert.equal(opened,undefined);
}
(async()=>{
  let attempts=0;
  const previousErrors=context.NCDLSWeb.errors.length;
  const audio=context.Laya.WebAudioSound.ctx={state:'suspended',resume(){attempts++;return Promise.reject(new Error('Failed to start the audio device'));}};
  context.Laya.SoundManager._recoverWebAudio();context.Laya.SoundManager._recoverWebAudio();
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(attempts,1,'Do not race multiple audio resumes');
  assert.match(context.NCDLSWeb.audioWarning,/Failed to start/);
  assert.equal(context.NCDLSWeb.errors.length,previousErrors,'Audio rejection must not stop the game');
  audio.resume=()=>{audio.state='running';return Promise.resolve();};
  docHandlers.pointerdown();await new Promise(resolve=>setImmediate(resolve));
  assert.equal(context.NCDLSWeb.audioWarning,'','A later gesture can restore audio');
  audio.state='suspended';audio.resume=()=>{throw Error('audio device unavailable');};
  context.Laya.SoundManager._recoverWebAudio();
  assert.match(context.NCDLSWeb.audioWarning,/unavailable/);
  assert.equal(context.NCDLSWeb.errors.length,previousErrors);
  // HTML audio has a separate failure path from AudioContext.resume.
  audio.state='running';
  let plays=0, behavior=()=>Promise.reject(Error('media blocked'));
  const media={play(){plays++;return behavior();}}, manager=context.Laya.SoundManager;
  const ch=manager._musicChannel=new AudioChannel(media);
  context.Laya.AudioSound._musicAudio=media;
  const flush=()=>new Promise(resolve=>setImmediate(resolve));
  ch.play();ch.play();await flush();
  assert.equal(plays,1,'Deduplicate overlapping native play attempts');
  assert.match(context.NCDLSWeb.audioWarning,/media blocked/);
  assert.equal(context.NCDLSWeb.errors.length,previousErrors);
  manager.musicMuted=true;docHandlers.pointerdown();await flush();assert.equal(plays,1,'Respect muted music');
  manager.musicMuted=false;context.document.hidden=true;docHandlers.pointerdown();await flush();assert.equal(plays,1,'No hidden-page retry');
  context.document.hidden=false;behavior=()=>Promise.resolve();docHandlers.pointerdown();await flush();assert.equal(plays,2);
  assert(!/media blocked/.test(context.NCDLSWeb.audioWarning));
  behavior=()=>{throw Error('native play unavailable');};
  for(const method of ['play','resume','__resumePlay'])assert.doesNotThrow(()=>ch[method]());
  assert.doesNotThrow(()=>context.Laya.AudioSound._makeMusicOK.call(context.document));
  assert.match(context.NCDLSWeb.audioWarning,/native play unavailable/);
  const beforeStop=plays;ch.stop();docHandlers.pointerdown();await flush();assert.equal(plays,beforeStop,'Do not resurrect stopped music');
  let rejectOld;
  behavior=()=>new Promise((_,reject)=>{rejectOld=reject;});
  const old=manager._musicChannel=new AudioChannel(media);old.play();
  behavior=()=>Promise.resolve();const fresh=manager._musicChannel=new AudioChannel(media);fresh.play();await flush();
  rejectOld(Error('stale channel rejection'));await flush();
  assert(!/stale channel/.test(context.NCDLSWeb.audioWarning),'Ignore failures from replaced channels');
  const effect=new AudioChannel({play(){return Promise.reject(Error('effect unavailable'));}});
  effect.play();await flush();assert.equal(effect.stops,1,'Failed one-shot sounds are released, not replayed');
  const fatalCount=context.NCDLSWeb.errors.length;
  winHandlers.unhandledrejection({reason:Error('unrelated gameplay error')});
  assert.equal(context.NCDLSWeb.errors.length,fatalCount+1,'Unrelated rejections remain visible to diagnostics');
  await checkRestart(0,100,false,true);
  await checkRestart(0,100);
  await checkRestart(0,1000000);
  await checkRestart(2,1000000);
  await checkRestart(5,999999);
  await checkRestart(5,3);
  await checkRestart(0,1,true);
  console.log('Default renderer preservation, context-loss recovery, classic/variant restart and failed-boot recovery passed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
