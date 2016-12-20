'use strict';

const {
  compose,
  isUndefined,
  negate,
  prop,
} = require('./dash');

const isControlled = compose(negate(isUndefined), prop('value'));
const whiteList = /^(?:data-|on[A-Z]|style$)/;

exports.filterProps = filterProps;
exports.isControlled = isControlled;
exports.genericName = genericName;

// filterProps :: a -> b
function filterProps(props) {
  const keys = Object.keys(props);
  const length = keys.length;
  const nextProps = {};

  for (var j = 0; j < length; ++j) {
    const key = keys[j];
    if (whiteList.test(key)) nextProps[key] = props[key];
  }

  return nextProps;
}

// genericName :: object -> string -> string
function genericName({size, styles = {}, theme}, name) {
  const preset = `${theme}-${size}`.replace(/-?undefined-?/, '');
  if (!name) return styles[preset];
  return styles[preset][name];
}
