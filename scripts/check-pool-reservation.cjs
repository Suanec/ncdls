// Reproduce the observed slow-load path: a native pool getter can return an
// idle node without removing it, so the next borrower receives the same node.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../src/shared/W.js'), 'utf8');
const body = source.match(/\["gO"\]\(\) \{([\s\S]*?)\n        \}/)?.[1];
assert(body, 'Pool getter not found');
class Sprite3D {}
const yellow = new Sprite3D(), green = new Sprite3D();
const pool = {pool_set: new Set([yellow, green]), u_set: new Set()};
const native = {o: (pool) => pool.pool_set.values().next().value};
const take = new Function('i', 'SP3D', `return function () {${body}}`)(native, Sprite3D);
assert.equal(take.call(pool), yellow);
assert.equal(take.call(pool), green, 'Two live cars must never borrow the same node');
assert.equal(pool.pool_set.size, 0);
assert.equal(pool.u_set.size, 2);
// Existing correct native paths remain idempotent.
const proper = {o(pool) {const node = pool.pool_set.values().next().value;pool.pool_set.delete(node);pool.u_set.add(node);return node;}};
const correctTake = new Function('i', 'SP3D', `return function () {${body}}`)(proper, Sprite3D);
pool.pool_set.add(yellow);pool.u_set.delete(yellow);
assert.equal(correctTake.call(pool), yellow);
assert.equal(pool.u_set.size, 2);
// Shared textures/materials retain their original pool semantics.
const material = {};
const shared = {pool_set:new Set([material]),u_set:new Set()};
assert.equal(take.call(shared), material);
assert.equal(shared.pool_set.size, 1);
assert.equal(shared.u_set.size, 0);
console.log('3D pool reservation regression passed (unreserved native path, correct native path, shared resources).');
