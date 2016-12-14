'use strict';

const {
  compose,
  isUndefined,
  negate,
  prop,
} = require('./dash');

const isControlled = compose(negate(isUndefined), prop('value'));

exports.isControlled = isControlled;
exports.themes = themes;
exports.tokenName = tokenName;

// cssModules :: (props -> string) -> props -> object
function themes(token) {
  return styles;

  // todo possibility to bypass nested structure
  function styles(props) {
    return prop(token(props), props.styles);
  }
}

// tokenName :: object -> string -> string
function tokenName({size, styles = {}, theme}, name) {
  const preset = `${theme}-${size}`.replace(/-?undefined-?/, '');
  if (!name) return styles[preset];
  return styles[preset][name];
}
