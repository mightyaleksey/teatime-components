'use strict';

exports.bind = bind;
exports.noop = noop;

/**
 * @param  {object} context
 * @param  {string|string[]} methods
 * @return {object}
 */
function bind(context, methods) {
  toArray(methods).forEach(method => context[method] = context[method].bind(context));
  return context;
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
