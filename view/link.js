'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const cssModules = require('react-css-modules');

class Link extends Component {
  render() {
    return (
      <a {...this.props} styleName='control'></a>
    );
  }
}

Link.defaultProps = {
  styles: {},
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
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
  styles: PropTypes.object,
};

module.exports = cssModules(Link);
