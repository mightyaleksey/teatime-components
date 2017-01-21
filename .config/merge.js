'use strict';

const {curry, isArray} = require('../lib/dash');
const mergeWith = require('lodash.mergewith');

module.exports = curry((b, a) => mergeWith(a, b, customizer));

function customizer(obj, src) {
  if (isArray(obj)) return obj.concat(src);
}
