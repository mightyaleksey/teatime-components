'use strict';

const { RadioGroup: BaseRadioGroup } = require('../view/radioGroup');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  common: require('../style/radio-group/radio-group.css'),
};

const optionStyles = {
  s: require('../style/radio-group/radio-option-s.css'),
  m: require('../style/radio-group/radio-option-m.css'),
  l: require('../style/radio-group/radio-option-l.css'),
};

function RadioGroup({ size, styles, ...o }) {
  return BaseRadioGroup({...o, styles: {
    ...baseStyles.common,
    option: optionStyles[size],
    ...styles,
  }});
}

RadioGroup.defaultProps = {
  size: 'm',
  styles: {},
};

RadioGroup.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
  ]),
  styles: PropTypes.object,
};

module.exports = RadioGroup;
module.exports.RadioGroup = createTag(module.exports);
