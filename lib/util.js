'use strict';

const {
  compose,
  isUndefined,
  negate,
  prop,
} = require('./dash');

const isControlled = compose(negate(isUndefined), prop('value'));

exports.isControlled = isControlled;
exports.genericName = genericName;

// genericName :: object -> string -> string
function genericName({size, styles = {}, theme}, name) {
  const preset = `${theme}-${size}`.replace(/-?undefined-?/, '');
  if (!name) return styles[preset];
  return styles[preset][name];
}
