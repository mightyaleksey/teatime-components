'use strict';

const { Link: BaseLink } = require('../view/link');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  's': require('../style/link/link-s.css'),
  'm': require('../style/link/link-m.css'),
  'l': require('../style/link/link-l.css'),
  'xl': require('../style/link/link-xl.css'),
};

function Link({ href, size, styles, ...o }) {
  return BaseLink({...o, href, styles: {
    ...baseStyles[size],
    ...styles,
  }});
}

Link.defaultProps = {
  size: 'm',
  styles: {},
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
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
  onPaste: PropTypes.func,
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
  styles: PropTypes.object,
};

module.exports = Link;
module.exports.Link = createTag(module.exports);
