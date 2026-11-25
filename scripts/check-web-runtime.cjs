const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const adapt=require('./web-runtime-compat.cjs');
const original=fs.readFileSync(path.join(__dirname,'../src/shared/W.js'),'utf8');
const adapted=adapt(original);
// Exercise the real pool-update body, with the obfuscated property lookup
// mapped to small fixtures. Removing the entire update would fail these checks.
function run(source) {
  const match=source.match(/static \[S\(309, 495\)\]\(\) \{([\s\S]*?)\n        \}\n        static/);
  assert(match,'Pool update changed: review regression fixture');
  const names={759:'timer',751:'currFrame',409:'pools',385:'lastFrame',678:'length',535:'tujDT',592:'pAbuJ',516:'xMVky',580:'QYuLg',392:'forEach',697:'cleanup'};
  let cleanup=0,guard=0;
  const context={S:(_,key)=>names[key]||String(key),Laya:{timer:{currFrame:1000}},i:{j(){guard++;}}};
  vm.runInNewContext('globalThis.update=function(){'+match[1]+'\n}',context);
  const pool={pools:[new Map([[1,{cleanup(){cleanup++;}}]])]};
  context.update.call(pool);context.update.call(pool);
  assert.equal(cleanup,1,'Pool cleanup runs once per frame');
  context.Laya.timer.currFrame++;context.update.call(pool);
  assert.equal(cleanup,2,'Pool cleanup continues on later frames');
  return guard;
}
assert.equal(run(original),3,'Baseline invokes the legacy guard on each update');
assert.equal(run(adapted),0,'Browser update never invokes the legacy guard');
assert.throws(()=>adapt('missing call'));
assert.throws(()=>adapt(original+original));
assert.equal(adapted.replace('          // Browser host: no mini-game platform watchdog.','          i.j(0);'),original,'Only the isolated guard call changes');
console.log('Browser platform regression: pool maintenance preserved; legacy host guard excluded; changed source fails closed.');
