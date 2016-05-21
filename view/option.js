'use strict';

const { PropTypes } = require('react');
const { camelcase } = require('../tools/func');
const { createTag, span } = require('../');
const classnames = require('classnames');
const cssModules = require('react-css-modules');

function Option({ focused, selected, value, ...o }) {
  return span({
    ...o,
    'data-value': value,
    styleName: camelcase(classnames('control', {
      focused,
      selected,
    })),
  });
}

Option.defaultProps = {
  styles: {},
};

Option.propTypes = {
  focused: PropTypes.bool,
  selected: PropTypes.bool,
  styles: PropTypes.object,
  value: PropTypes.string.isRequired,
};

module.exports = cssModules(Option);
module.exports.Option = createTag(module.exports);
