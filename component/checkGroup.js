'use strict';

const { CheckGroup: BaseCheckGroup } = require('../view/checkGroup');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  common: require('../style/check-group/check-group.css'),
};

const optionStyles = {
  m: require('../style/check-group/check-option-m.css'),
  l: require('../style/check-group/check-option-l.css'),
};

function CheckGroup({ size, styles, ...o }) {
  return BaseCheckGroup({...o, styles: {
    ...baseStyles.common,
    option: optionStyles[size],
    ...styles,
  }});
}

CheckGroup.defaultProps = {
  size: 'm',
  styles: {},
};

CheckGroup.propTypes = {
  size: PropTypes.oneOf([
    'm',
    'l',
  ]),
  styles: PropTypes.object,
};

module.exports = CheckGroup;
module.exports.CheckGroup = createTag(module.exports);
