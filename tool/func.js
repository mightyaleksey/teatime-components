'use strict';

exports.isUndefined = isUndefined;
exports.noop = noop;

/**
 * @param  {*} a
 * @return {boolean}
 */
function isUndefined(a) {
  return void 0 === a;
}

function noop() {}
