'use strict';

const {
  fuzzy,
  includes,
  startsWith,
} = require('../../lib/searchEngine');

test('fuzzy', () => {
  expect(fuzzy('ba', 'abc')).toBe(false);
  expect(fuzzy('ac', 'abc')).toBe(true);
  expect(fuzzy('Ac', 'abC')).toBe(true);
});

test('includes', () => {
  expect(includes('ac', 'abc')).toBe(false);
  expect(includes('bc', 'abc')).toBe(true);
  expect(includes('Bc', 'abC')).toBe(true);
});

test('startsWith', () => {
  expect(startsWith('bc', 'abc')).toBe(false);
  expect(startsWith('ab', 'abc')).toBe(true);
  expect(startsWith('Ab', 'aBc')).toBe(true);
});
