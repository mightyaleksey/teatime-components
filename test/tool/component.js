'use strict';

const { indexOf } = require('../../tool/component');
const test = require('tape');

test('indexOf()', t => {
  const values = [
    {label: 'la', value: 'va'},
    {label: 'lb', value: 'vb'},
    {label: 'lc', value: 'vc'},
  ];

  t.equal(indexOf(values, 'unknown'), -1);
  t.equal(indexOf(values, 'vb'), 1);
  t.equal(indexOf(values, 'lc', 'label'), 2);
  t.end();
});
