const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const adapt=require('./web-props-compat.cjs');
const original=fs.readFileSync(path.join(__dirname,'../src/game/main.js'),'utf8');
const source=adapt(original);
const start=source.indexOf('      bj = class extends FGUI.Button {');
const end=source.indexOf('      (gH(bj, "BtnProp"),',start);
assert.equal(source.slice(0,start),original.slice(0,start));
assert.equal(source.slice(end),original.slice(original.indexOf('      (gH(bj, "BtnProp"),')),'Gameplay effects are unchanged');
assert.throws(()=>adapt('missing class'));
assert.throws(()=>adapt(original+original));
assert.throws(()=>adapt(original.replace('dQ.dec(dR + this.prop, 1)','unexpected')));
function fixture(prop, initial) {
  const data={['prop_count'+prop]:initial,['used'+prop]:9999};
  const calls={save:0,ads:0,popup:0,effects:0,toasts:[]};
  let callback;
  const context={
    FGUI:{Button:class{onConstruct(){} dispose(){}},onClick(){},open(){calls.popup++;}},
    bf:{Prop:{PropMagnet:0,PropMagnetAll:1,PropRefresh:2},PropEvt:['magnet','all','refresh'],prop_use_max:999},
    cp:{AdShow(){calls.ads++;},AdClick(){calls.ads++;},AdFinish(){calls.ads++;}},
    fz:'magnet-ad',e2:'refresh-ad',dR:'prop_count',eR:'used',fx:'added',
    W:{ICache:{saveData(){calls.save++;}}},gH:f=>f,gK:{showVideoPro(){return true;}},cx:{is_show_pro:[]},
    Ad:{showVideoAd(){calls.ads++;},showToast(t){calls.toasts.push(t);}},
    dQ:{get:k=>data[k]||0,set(k,v){data[k]=v;},add(k,v){data[k]=(data[k]||0)+v;},dec(k,v){data[k]-=v;}}
  };
  vm.runInNewContext(source.slice(start,end),context);
  const b=new context.bj();
  Object.assign(b,{prop,video:{},count:{},lab_count:{},pop_path:'prop-popup',dispatcher:{on(){},offAllCaller(){},event(name,args){assert.equal(name,context.bf.PropEvt[prop]);calls.effects++;callback=args[1];}}});
  b.onConstruct();
  return {b,data,calls,complete:(...args)=>callback(...args)};
}
for(const prop of [0,2]) for(const initial of [undefined,0,1,99]) {
  const {b,data,calls,complete}=fixture(prop,initial);
  assert.equal(data['prop_count'+prop],1);
  assert.equal(b.count.selectedIndex,1);assert.equal(b.lab_count.text,'1');
  const saved=calls.save;b.onEvent();assert.equal(calls.save,saved,'No repeated writes for normalized inventory');
  for(let i=0;i<3;i++) {
    b.onBtnClick();complete(true);complete(true);
    assert.equal(data['prop_count'+prop],1);
    assert.equal(data['used'+prop],10000+i,'Success counted once even with duplicate callbacks');
  }
  assert.equal(calls.effects,3,'Old per-level cap is bypassed');
  b.onBtnClick();complete(false,'请稍后使用');
  assert.equal(data['prop_count'+prop],1);assert.equal(data['used'+prop],10002);
  assert.match(calls.toasts.at(-1),/请稍后使用/);
  b.grayed=true;b.onBtnClick();assert.equal(calls.effects,4,'Disabled effect stays disabled');
  b.propAdd();assert.equal(data['prop_count'+prop],1,'External grants never inflate the count');
  assert.equal(calls.ads,0);assert.equal(calls.popup,0);
}
const other=fixture(1,3);other.b.propUse();other.complete(true);
assert.equal(other.data.prop_count1,2,'Other prop behavior is preserved');
console.log('Magnet/refresh: default and saved count 1, repeated success, failure/disabled guards, no ads/popups, no usage cap; other props unchanged.');
