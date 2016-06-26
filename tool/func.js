'use strict';

exports.constant = constant;
exports.identity = identity;
exports.isEqual = isEqual;
exports.isUndefined = isUndefined;
exports.mapKeys = mapKeys;
exports.mapRange = mapRange;
exports.noop = noop;

/**
 * @param  {*} a
 * @return {function}
 */
function constant(a) {
  return function constantly() {
    return a;
  };
}

/**
 * @param  {*} a
 * @return {*}
 */
function identity(a) {
  return a;
}

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
 * @param  {object} collection
 * @return {object}
 */
function mapKeys(iteratee, collection) {
  if (!collection) {
    return null;
  }

  const nextCollection = {};

  for (var key in collection) {
    nextCollection[iteratee(collection[key], key)] = collection[key];
  }

  return nextCollection;
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
