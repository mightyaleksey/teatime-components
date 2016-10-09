'use strict';

const { isControlled, omit } = require('../../lib/tool');
const test = require('tape');

test('isControlled', t => {
  t.equal(isControlled({value: null}), true);
  t.equal(isControlled({value: void 0}), false);
  t.equal(isControlled({}), false);
  t.end();
});

test('omit', t => {
  t.deepEqual(omit(['a'])({a: 5, b: 4}), {b: 4});
  t.end();
});
