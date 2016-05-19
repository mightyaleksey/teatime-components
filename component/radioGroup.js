'use strict';

const { RadioGroup: BaseRadioGroup } = require('../view/radioGroup');
const { PropTypes } = require('react');
const { createTag } = require('../');

const styles = {
  common: require('../style/radio-group/radio-group.css'),
};

const optionStyles = {
  s: require('../style/radio-group/radio-option-s.css'),
  m: require('../style/radio-group/radio-option-m.css'),
  l: require('../style/radio-group/radio-option-l.css'),
};

function RadioGroup({ size, ...o }) {
  return BaseRadioGroup({...o, styles: {...styles.common, option: optionStyles[size]}});
}

RadioGroup.defaultProps = {
  size: 'm',
};

RadioGroup.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onCompositionEnd: PropTypes.func,
  onCompositionStart: PropTypes.func,
  onCompositionUpdate: PropTypes.func,
  onContextMenu: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragExit: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
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
