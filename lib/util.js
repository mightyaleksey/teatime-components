'use strict';

const {
  compose,
  isUndefined,
  negate,
  prop,
} = require('./dash');

const BUBBLES = {
  onBlur: false,
  onFocus: false,
};

const isControlled = compose(negate(isUndefined), prop('value'));
const whiteList = /^(?:data-|on[A-Z]|style$)/;

exports.isControlled = isControlled;
exports.genericName = genericName;
exports.nullToString = nullToString;
exports.omitNonStandardAttrs = omitNonStandardAttrs;
exports.omitNonStandardAttrsAndHandlers = omitNonStandardAttrsAndHandlers;

// genericName :: object -> string -> string
function genericName({size, styles = {}, theme}, name) {
  const preset = `${theme}-${size}`.replace(/-?undefined-?/, '');

  if (!name) return styles[preset];

  return styles[preset][name];
}

// nullToString :: a -> b
function nullToString(a) {
  return a === null ? '' : a;
}

// omitNonStandardAttrs :: a -> b
function omitNonStandardAttrs(props) {
  const keys = Object.keys(props);
  const length = keys.length;
  const nextProps = {};

  for (let j = 0; j < length; ++j) {
    const key = keys[j];

    if (whiteList.test(key)) nextProps[key] = props[key];
  }

  return nextProps;
}

// omitNonStandardAttrsAndHandlers :: a -> b
function omitNonStandardAttrsAndHandlers(props) {
  const keys = Object.keys(props);
  const length = keys.length;
  const nextProps = {};

  for (let j = 0; j < length; ++j) {
    const key = keys[j];

    if (whiteList.test(key) && BUBBLES[key] !== false) nextProps[key] = props[key];
  }

  return nextProps;
}
