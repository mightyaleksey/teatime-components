'use strict';

const { identity, mapKeys, mapRange } = require('../../tool/func');
const test = require('tape');

test('mapKeys()', t => {
  const foo = {
    a: 'a',
    b: 'b',
    c: 'c',
  };

  t.deepEqual(mapKeys((_, key) => '_' + key, foo), {
    _a: 'a',
    _b: 'b',
    _c: 'c',
  });
  t.end();
});

test('mapRange()', t => {
  t.deepEqual(mapRange(identity, 1), [0]);
  t.deepEqual(mapRange(identity, 4), [0, 1, 2, 3]);
  t.deepEqual(mapRange(increment, 4), [1, 2, 3, 4]);
  t.end();
});

function increment(a) {
  return a + 1;
}
