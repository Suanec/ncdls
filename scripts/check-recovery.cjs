const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), assert = require('node:assert/strict');
const root = process.env.NCDLS_ROOT || path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'web/recover.html'), 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
async function run({scope = 'https://game.test/ncdls/', online = false, controlled = true} = {}) {
  let click, target, removed = 0;
  const button = {addEventListener(type, fn) {click = fn;}}, status = {};
  const context = {URL, Date, document:{querySelector: selector => selector === '#recover' ? button : status},
    location:{href:'https://game.test/ncdls/recover.html' + (online ? '?online=1' : ''),replace(value){target = value;}},
    navigator:{serviceWorker:{controller:controlled ? {} : null,async getRegistration(){return {scope,async unregister(){removed++;return true;}};}}},
    caches: new Proxy({}, {get(){throw Error('Recovery must preserve cached files');}}),
    localStorage: new Proxy({}, {get(){throw Error('Recovery must preserve saved progress');}}),
  };
  vm.runInNewContext(source, context);
  if (click) await click();
  return {removed,target,status:status.textContent};
}
(async () => {
  const first = await run();
  assert.equal(first.removed, 1);
  assert.equal(new URL(first.target).pathname, '/ncdls/recover.html');
  assert.equal(new URL(first.target).searchParams.get('online'), '1');
  const second = await run({online:true,controlled:false});
  assert.equal(second.removed, 0);
  assert.equal(second.target, 'https://game.test/ncdls/');
  const foreign = await run({scope:'https://game.test/'});
  assert.equal(foreign.removed, 0);
  assert.equal(foreign.target, undefined);
  assert.match(foreign.status, /其他站点/);
  console.log('Online recovery preserves saves/caches, releases only its exact SW scope, and uses a controller-free navigation.');
})().catch(error => {console.error(error);process.exitCode=1;});
