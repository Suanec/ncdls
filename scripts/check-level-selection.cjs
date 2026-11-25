const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'web/launcher.js'),'utf8');
const elements=new Map();
function node(id){if(!elements.has(id))elements.set(id,{value:'',textContent:'',handlers:{},addEventListener(type,handler){this.handlers[type]=handler;},showModal(){this.open=true;},close(){this.open=false;}});return elements.get(id);}
let opened=[],grade=1000000,mode=0;
const hooks={mode:{GetMode:()=>mode,GetGrade:()=>grade},game:{hfsm:{isGaming:true},initing:false},openLevel:async(m,n)=>{opened.push([m,n]);mode=m;grade=n;}};
const frame={getAttribute:()=>'',focus(){},contentWindow:{NCDLSWeb:{hooks,loadingUI:{instance:null}},W:{ICache:{getGrade:()=>grade}}}};
const context={document:{querySelector:id=>id==='#game'?frame:id==='#diagnose-game'?null:node(id)},window:{addEventListener(){}},location:{origin:'https://ncdls.test'}};
vm.runInNewContext(source,context);
async function select(m,value){node('#mode').value=String(m);node('#level').value=String(value);const button={disabled:false};await node('#level-form').handlers.submit({preventDefault(){},submitter:button});assert.equal(button.disabled,false);}
(async()=>{
 node('#open-levels').handlers.click();assert.equal(node('#level').value,1000000);assert.match(node('#level-template').textContent,/模板 106/);
 for(const [m,count] of [[0,294],[2,12],[3,27],[4,30],[5,30]]){
  await select(m,1000000);assert.deepEqual(opened.at(-1),[m,1000000]);
  node('#level').handlers.input();assert(node('#level-template').textContent.includes('模板 '+((1000000-1)%count+1)));
 }
 const before=opened.length;
 for(const value of ['',0,-1,1.5,'x','Infinity','9007199254740992'])await select(0,value);
 await select(1,1000);assert.equal(opened.length,before,'Invalid levels/modes must not mutate saves');
 await select(0,Number.MAX_SAFE_INTEGER);assert.deepEqual(opened.at(-1),[0,Number.MAX_SAFE_INTEGER]);
 assert(!/\bmax=/.test(fs.readFileSync(path.join(root,'web/index.html'),'utf8').match(/<input\s+id="level"[\s\S]*?\/>/)[0]),'No template-count maximum in HTML');
 console.log('Level selection: all five modes accept large grades, display modulo templates, preserve input, and reject invalid numbers.');
})().catch(error=>{console.error(error);process.exitCode=1;});
