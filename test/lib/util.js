'use strict';

const {isControlled} = require('../../lib/tool');
const test = require('tape');

test('isControlled', t => {
  t.equal(isControlled({value: null}), true);
  t.equal(isControlled({value: void 0}), false);
  t.equal(isControlled({}), false);
  t.end();
});
