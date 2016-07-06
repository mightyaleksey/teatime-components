'use strict';

const { isHexBased, normalizeColor } = require('../../tool/color');
const test = require('tape');

test('isHexBased()', t => {
  t.notOk(isHexBased(void 0));
  t.notOk(isHexBased(null));
  t.notOk(isHexBased(''));
  t.ok(isHexBased('000'));
  t.ok(isHexBased('#000'));
  t.ok(isHexBased('ABC'));
  t.ok(isHexBased('abc'));
  t.ok(isHexBased('#ABC'));
  t.ok(isHexBased('#abc'));
  t.notOk(isHexBased('ggg'));
  t.ok(isHexBased('000000'));
  t.ok(isHexBased('#000000'));
  t.ok(isHexBased('BEBEBE'));
  t.ok(isHexBased('bebebe'));
  t.ok(isHexBased('#BEBEBE'));
  t.ok(isHexBased('#bebebe'));
  t.end();
});

test('normalizeColor()', t => {
  t.equal(normalizeColor(''), null);
  t.equal(normalizeColor('abc'), 'AABBCC');
  t.equal(normalizeColor('aabbcc'), 'AABBCC');
  t.equal(normalizeColor('AABBCC'), 'AABBCC');
  t.equal(normalizeColor('#000'), '000000');
  t.end();
});
