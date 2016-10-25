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

// cssModules :: (props -> string) -> props -> object
function themes(token) {
  return styles;

  // todo possibility to bypass nested structure
  function styles(props) {
    return prop(token(props), props.styles);
  }
}
