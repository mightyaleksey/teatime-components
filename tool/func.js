'use strict';

exports.isEqual = isEqual;
exports.isUndefined = isUndefined;
exports.mapRange = mapRange;
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

/**
 * @param  {function} iteratee
 * @param  {number} steps
 * @return {array}
 */
function mapRange(iteratee, steps) {
  const collection = new Array(steps);
  for (var i = 0; i < steps; ++i) {
    collection[i] = iteratee(i, steps);
  }

  return collection;
}

function noop() {}
