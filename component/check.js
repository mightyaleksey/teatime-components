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
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
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
  onTransitionEnd: PropTypes.func,
  size: PropTypes.oneOf([
    'm',
    'l',
  ]),
  styles: PropTypes.object,
  value: PropTypes.string.isRequired,
};

module.exports = Check;
module.exports.Check = createTag(module.exports);
