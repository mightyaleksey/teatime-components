'use strict';

const {cssColorValue} = require('../../lib/color');
const test = require('tape');

test('cssColorValue', t => {
  t.equal(cssColorValue('invalid'), 'invalid');
  t.equal(cssColorValue('abc'), '#aabbcc');
  t.equal(cssColorValue('#ffdb4d'), '#ffdb4d');
  t.end();
});
