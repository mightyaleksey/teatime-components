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
  defaultValue: PropTypes.array,
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
    'm',
    'l',
  ]),
  styles: PropTypes.object,
  value: PropTypes.array,
};

module.exports = CheckGroup;
module.exports.CheckGroup = createTag(module.exports);
