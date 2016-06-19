'use strict';

var counter = 0;

exports.generateId = generateId;
exports.hasUniqueValues = hasUniqueValues;
exports.mapKey = mapKey;
exports.mapKeyBasedOnPos = mapKeyBasedOnPos;

/**
 * @return {string}
 */
function generateId() {
  return `_teatime${++counter}`;
}

/**
 * @param  {object[]} options
 * @return {boolean}
 */
function hasUniqueValues(options) {
  const cache = {};

  for (var value, i = 0; i < options.length; ++i) {
    value = options[i].value;

    if (!cache[value]) {
      cache[value] = true;
      continue;
    }

    return false;
  }

  return true;
}

/**
 * @param  {string} prefix
 * @param  {string} value
 * @return {string}
 */
function mapKey(prefix, value) {
  return `${prefix}${value}`;
}

/**
 * @param  {string} prefix
 * @param  {string} value
 * @param  {number} position
 * @return {string}
 */
function mapKeyBasedOnPos(prefix, value, position) {
  return `${prefix}${value}${position}`;
}
