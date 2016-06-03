'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const cssModules = require('react-css-modules');

class Button extends Component {
  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  render() {
    return (
      <button styleName='control' {...this.props} ref='control'/>
    );
  }
}

Button.defaultProps = {
  styles: {},
};

Button.propTypes = {
  disabled: PropTypes.bool,
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
  onSubmit: PropTypes.func,
  onTouchCancel: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  styles: PropTypes.object,
};

module.exports = cssModules(Button);
