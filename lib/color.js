'use strict';

const {isString} = require('./dash');
const hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i;

exports.cssColorValue = cssColorValue;
exports.userColorValue = userColorValue;

// cssColorValue :: a -> a
function cssColorValue(color = '') {
  if (!isString(color)) return color;

  var nextColor = color.trim().replace(/^#/, '');
  if (!hex.test(nextColor)) return color;

  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d);
  }

  return '#' + nextColor.toLowerCase();
}

// userColorValue :: a -> a
function userColorValue(color) {
  return hex.test(color)
    ? cssColorValue(color).replace(/^#/, '').toUpperCase()
    : color;
}
