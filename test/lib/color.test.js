'use strict';

const {cssColorValue, userColorValue} = require('../../lib/color');

test('cssColorValue', () => {
  expect(cssColorValue()).toBe('');
  expect(cssColorValue(null)).toBe(null);
  expect(cssColorValue(void 0)).toBe('');
  expect(cssColorValue('invalid')).toBe('invalid');
  expect(cssColorValue('abc')).toBe('#aabbcc');
  expect(cssColorValue('#ffdb4d')).toBe('#ffdb4d');
});

test('userColorValue', () => {
  expect(userColorValue()).toBe(void 0);
  expect(userColorValue(null)).toBe(null);
  expect(userColorValue(void 0)).toBe(void 0);
  expect(userColorValue('#aaa')).toBe('AAAAAA');
});
