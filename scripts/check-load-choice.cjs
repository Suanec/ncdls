const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(path.join(__dirname,'../web_mobile/src/load-choice.js'),'utf8');
function harness(entries=[]) {
 const nodes=Object.fromEntries(['resource-choice','resource-lazy','resource-all','resource-choice-status','resource-choice-progress'].map(id=>['#'+id,{handlers:{},addEventListener(t,f){this.handlers[t]=f;},showModal(){this.open=true;},close(){this.open=false;},removeAttribute(k){delete this[k];}}]));
 const c={document:{querySelector:id=>nodes[id]},caches:{keys:async()=>['ncdls-mobile:/other/:x','ncdls-mobile:/ncdls/:x'],open:async name=>({keys:async()=>name.includes('/other/')?[{url:'https://test/other/runtime/game.js'}]:entries.map(path=>({url:'https://test/ncdls/'+path}))})}};c.window=c;
 vm.runInNewContext(source,c);
 let called=0,finish,fail;
 const result=c.NCDLSChooseResources({base:new URL('https://test/ncdls/'),supported:true,downloadAll:notify=>{called++;notify({text:'资源包 1/21',percent:12});return new Promise((resolve,reject)=>{finish=resolve;fail=reject;});}});
 return {nodes,result,get called(){return called;},finish:()=>finish(),fail:()=>fail(new Error('offline'))};
}
const tick=()=>new Promise(resolve=>setImmediate(resolve));
(async()=>{
 const lazy=harness(['index.html','mobile.js']);await tick();assert(lazy.nodes['#resource-choice'].open);assert.equal(lazy.called,0);
 lazy.nodes['#resource-lazy'].onclick();assert.equal(await lazy.result,'lazy');assert.equal(lazy.called,0);
 const all=harness();await tick();let resolved=false;all.result.then(()=>resolved=true);
 const action=all.nodes['#resource-all'].onclick();await tick();assert.equal(all.called,1);assert.equal(resolved,false);assert.equal(all.nodes['#resource-choice-progress'].value,12);
 all.finish();await action;assert.equal(await all.result,'all');
 const failed=harness();await tick();const attempt=failed.nodes['#resource-all'].onclick();failed.fail();await attempt;
 assert.equal(failed.nodes['#resource-lazy'].disabled,false);failed.nodes['#resource-lazy'].onclick();assert.equal(await failed.result,'lazy');
 const cached=harness(['runtime/game-hash.js']);assert.equal(await cached.result,'cached');assert.equal(cached.called,0);
 console.log('First load choice: shell-only cache prompts, no download before choice, lazy/all branches, full download awaited, failure retry and cached revisit.');
})().catch(e=>{console.error(e);process.exitCode=1;});
