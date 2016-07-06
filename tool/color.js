'use strict';

const hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i;

exports.isHexBased = isHexBased;
exports.isValidHex = isValidHex;
exports.normalizeColor = normalizeColor;
exports.trimHash = trimHash;
exports.trimSpaces = trimSpaces;

/**
 * @param  {string}  color
 * @return {boolean}
 */
function isHexBased(color) {
  return hex.test(color);
}

/**
 * @param  {string}  color
 * @return {boolean}
 */
function isValidHex(color) {
  return isHexBased(trimSpaces(color));
}

/**
 * @param  {string} color
 * @return {string|null}
 */
function normalizeColor(color) {
  var nextColor = trimSpaces(color);

  if (!isHexBased(color)) {
    return null;
  }

  nextColor = trimHash(nextColor);

  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d);
  }

  return nextColor.toUpperCase();
}

/**
 * @param  {string} color
 * @return {string}
 */
function trimHash(color) {
  return color.replace('#', '');
}

/**
 * @param  {string} color
 * @return {string}
 */
function trimSpaces(color) {
  return typeof color === 'string'
    ? color.replace(/\s/g, '')
    : color;
}
