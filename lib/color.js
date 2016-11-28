'use strict';

const hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i;

exports.cssColorValue = cssColorValue;
exports.userColorValue = userColorValue;

// cssColorValue :: a -> a
function cssColorValue(color) {
  var nextColor = color.trim().replace(/^#/, '');
  if (!hex.test(nextColor)) return color;

  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d);
  }

  return '#' + nextColor.toLowerCase();
}

// userColorValue :: a -> a
function userColorValue(color) {
  return color;
}
