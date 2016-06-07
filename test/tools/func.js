'use strict';

const { mapRange } = require('../../tools/func');
const test = require('tape');

test('mapRange()', t => {
  t.deepEqual(mapRange(identity, 1), [0]);
  t.deepEqual(mapRange(identity, 4), [0, 1, 2, 3]);
  t.deepEqual(mapRange(increment, 4), [1, 2, 3, 4]);
  t.end();
});

function identity(a) {
  return a;
}

function increment(a) {
  return a + 1;
}
