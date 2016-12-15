'use strict';

const {curry} = require('./dash');

exports.getComputedStyle = getComputedStyle;
exports.getStyleProp = curry(getStyleProp);

// getComputedStyle :: string -> string -> CSSStyleDeclaration
function getComputedStyle(elem, pseudoElem = null) {
  return window.getComputedStyle(elem, pseudoElem);
}

// getStyleProp :: a -> b -> c -> d
function getStyleProp(styleProp, elem, pseudoElem = null) {
  return getComputedStyle(elem, pseudoElem).getPropertyValue(styleProp);
}
