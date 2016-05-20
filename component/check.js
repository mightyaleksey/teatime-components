'use strict';

const { Check: BaseCheck } = require('../view/check');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  m: require('../style/check/check-m.css'),
  l: require('../style/check/check-l.css'),
};

function Check({ size, styles, ...o }) {
  return BaseCheck({...o, styles: {
    ...baseStyles[size],
    ...styles,
  }});
}

Check.defaultProps = {
  size: 'm',
  styles: {},
};

Check.propTypes = {
  size: PropTypes.oneOf([
    'm',
    'l',
  ]),
  styles: PropTypes.object,
};

module.exports = Check;
module.exports.Check = createTag(module.exports);
