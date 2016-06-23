'use strict';

exports.isEqual = isEqual;
exports.isUndefined = isUndefined;
exports.noop = noop;

/**
 * Simple object comparison
 *
 * @param  {object}  source
 * @param  {object}  target
 * @return {boolean}
 */
function isEqual(source, target) {
  if (Object.keys(source).length !== Object.keys(target).length) {
    return false;
  }

  for (var key in source) {
    if (source[key] !== target[key]) {
      return false;
    }
  }

  return true;
}

/**
 * @param  {*} a
 * @return {boolean}
 */
function isUndefined(a) {
  return void 0 === a;
}

function noop() {}
