'use strict';

const { PropTypes } = require('react');
const { a, createTag } = require('../');
const cssModules = require('react-css-modules');

function Link({ href, ...o }) {
  return a({...o, href, styleName: 'control'});
}

Link.defaultProps = {
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
  styles: PropTypes.object,
};

module.exports = cssModules(Link);
module.exports.Link = createTag(module.exports);
