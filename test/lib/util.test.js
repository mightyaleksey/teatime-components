'use strict';

const {filterProps, isControlled} = require('../../lib/util');

test('filterProps', () => {
  const sample = {
    className: 'yo',
    'data-value': 'valid',
    dataValue: 'invalid',
    onClick: 'noop',
    style: {},
    whatever: 'nope',
  };

  const expected = {
    'data-value': 'valid',
    onClick: 'noop',
    style: {},
  };

  expect(filterProps(sample)).toEqual(expected);
});

test('isControlled', () => {
  expect(isControlled({value: null})).toBe(true);
  expect(isControlled({value: void 0})).toBe(false);
  expect(isControlled({})).toBe(false);
});
