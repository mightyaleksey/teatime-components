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
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchCancel: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  options: PropTypes.array.isRequired,
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
  ]),
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = RadioGroup;
module.exports.RadioGroup = createTag(module.exports);
