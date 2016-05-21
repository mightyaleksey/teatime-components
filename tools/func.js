'use strict';

exports.bind = bind;
exports.camelcase = require('lodash.camelcase');
exports.decrement = decrement;
exports.increment = increment;
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
