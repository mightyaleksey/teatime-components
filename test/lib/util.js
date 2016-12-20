'use strict';

const {filterProps, isControlled} = require('../../lib/util');
const test = require('tape');

test('filterProps', t => {
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

  t.deepEqual(filterProps(sample), expected);
  t.end();
});

test('isControlled', t => {
  t.equal(isControlled({value: null}), true);
  t.equal(isControlled({value: void 0}), false);
  t.equal(isControlled({}), false);
  t.end();
});
