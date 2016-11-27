'use strict';

const {
  fuzzy,
  includes,
  startsWith,
} = require('../../lib/searchEngine');
const test = require('tape');

test('fuzzy', t => {
  t.notOk(fuzzy('ba', 'abc'));
  t.ok(fuzzy('ac', 'abc'));
  t.ok(fuzzy('Ac', 'abC'));
  t.end();
});

test('includes', t => {
  t.notOk(includes('ac', 'abc'));
  t.ok(includes('bc', 'abc'));
  t.ok(includes('Bc', 'abC'));
  t.end();
});

test('startsWith', t => {
  t.notOk(startsWith('bc', 'abc'));
  t.ok(startsWith('ab', 'abc'));
  t.ok(startsWith('Ab', 'aBc'));
  t.end();
});
