'use strict';

const {isControlled, omitNonStandardAttrs, omitNonStandardAttrsAndHandlers} = require('../../lib/util');

test('isControlled', () => {
  expect(isControlled({value: null})).toBe(true);
  expect(isControlled({value: void 0})).toBe(false);
  expect(isControlled({})).toBe(false);
});

test('omitNonStandardAttrs', () => {
  const sample = {
    className: 'yo',
    'data-value': 'valid',
    dataValue: 'invalid',
    onClick: 'noop',
    onFocus: 'noop',
    style: {},
    whatever: 'nope',
  };

  const expected = {
    'data-value': 'valid',
    onClick: 'noop',
    onFocus: 'noop',
    style: {},
  };

  expect(omitNonStandardAttrs(sample)).toEqual(expected);
});

test('omitNonStandardAttrsAndHandlers', () => {
  const sample = {
    className: 'yo',
    'data-value': 'valid',
    dataValue: 'invalid',
    onClick: 'noop',
    onFocus: 'noop',
    style: {},
    whatever: 'nope',
  };

  const expected = {
    'data-value': 'valid',
    onClick: 'noop',
    style: {},
  };

  expect(omitNonStandardAttrsAndHandlers(sample)).toEqual(expected);
});
