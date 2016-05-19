'use strict';

const { Button: BaseButton } = require('../view/button');
const { PropTypes } = require('react');
const { createTag } = require('../');

const styles = {
  'action-s': require('../style/button/button-action-s.css'),
  'action-m': require('../style/button/button-action-m.css'),
  'action-l': require('../style/button/button-action-l.css'),
  'action-xl': require('../style/button/button-action-xl.css'),
  'normal-s': require('../style/button/button-normal-s.css'),
  'normal-m': require('../style/button/button-normal-m.css'),
  'normal-l': require('../style/button/button-normal-l.css'),
  'normal-xl': require('../style/button/button-normal-xl.css'),
};

function Button({ size, theme, ...o }) {
  return BaseButton({...o, styles: styles[`${theme}-${size}`]});
}

Button.defaultProps = {
  size: 'm',
  theme: 'normal',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
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
  onSubmit: PropTypes.func,
  onTouchCancel: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTransitionEnd: PropTypes.func,
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
    'xl',
  ]),
  theme: PropTypes.oneOf([
    'action',
    'normal',
  ]),
};

module.exports = Button;
module.exports.Button = createTag(module.exports);
