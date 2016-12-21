'use strict';

const {cssColorValue, userColorValue} = require('../../lib/color');
const test = require('tape');

test('cssColorValue', t => {
  t.equal(cssColorValue(), '');
  t.equal(cssColorValue(null), null);
  t.equal(cssColorValue(void 0), '');
  t.equal(cssColorValue('invalid'), 'invalid');
  t.equal(cssColorValue('abc'), '#aabbcc');
  t.equal(cssColorValue('#ffdb4d'), '#ffdb4d');
  t.end();
});

test('userColorValue', t => {
  t.equal(userColorValue(), void 0);
  t.equal(userColorValue(null), null);
  t.equal(userColorValue(void 0), void 0);
  t.equal(userColorValue('#aaa'), 'AAAAAA');
  t.end();
});
