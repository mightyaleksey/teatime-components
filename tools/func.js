'use strict';

exports.bind = bind;
exports.decrement = decrement;
exports.increment = increment;
exports.findIndexByValueProp = findIndexByValueProp;
exports.mapRange = mapRange;
exports.noop = noop;
exports.toArray = toArray;

/**
 * @param  {object} context
 * @param  {string|string[]} methods
 * @return {object}
 */
function bind(context, methods) {
  toArray(methods).forEach(method => context[method] = context[method].bind(context));
  return context;
}

/**
 * @param  {number} value
 * @param  {number} limit
 * @return {number}
 */
function decrement(value, limit) {
  return value > 0
    ? value - 1
    : limit - 1;
}

/**
 * @param  {number} value
 * @param  {number} limit
 * @return {number}
 */
function increment(value, limit) {
  return value < limit - 1
    ? value + 1
    : 0;
}

/**
 * @param  {object[]} collection
 * @param  {string} value
 * @return {number}
 */
function findIndexByValueProp(collection, value) {
  const length = collection.length;
  for (var i = 0; i < length; ++i) {
    if (collection[i].value !== value) {
      continue;
    }

    return i;
  }

  return -1;
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

/**
 * @param  {*} a
 * @return {array}
 */
function toArray(a) {
  return a != null && !Array.isArray(a)
    ? [a]
    : a;
}
