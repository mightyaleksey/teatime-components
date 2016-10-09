'use strict';

const {
  compose,
  curry,
  defaultTo,
  invert,
  isUndefined,
  negate,
  prop,
} = require('./dash');

const isControlled = compose(negate(isUndefined), prop('value'));

exports.cssModules = curry(cssModules);
exports.hasIs = hasIs;
exports.isControlled = isControlled;
exports.omit = omit;

// cssModules :: object -> (props -> string) -> (props -> object)
function cssModules(modules, token) {
  const themes = compose(defaultTo(modules), prop('styles'));
  return styles;

  function styles(props) {
    return prop(token(props), themes(props));
  }
}

// hasIs :: {a} -> a -> bool
function hasIs(a, b) {
  return a.hasOwnProperty(b);
}

// omit :: [a] -> ({a} -> {});
function omit(keys) {
  const list = invert(keys);
  return omitProps;

  function omitProps(props) {
    const nC = {};
    for (var key in props)
      if (hasIs(props, key) && !hasIs(list, key)) nC[key] = props[key];
    return nC;
  }
}
