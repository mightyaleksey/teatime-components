'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const { generateId } = require('../tools/identity');
const cssModules = require('react-css-modules');

class Check extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id || generateId(),
    };
  }

  render() {
    const { children, className, ...o } = this.props;
    const { id } = this.state;

    return (
      <div className={className} styleName='wrapper'>
        <input {...o} id={id} styleName='native' type='checkbox'/>
        <label htmlFor={id} styleName='control'/>
        <label htmlFor={id} styleName='label'>{children}</label>
      </div>
    );
  }
}

Check.defaultProps = {
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
  value: PropTypes.string.isRequired,
};

module.exports = cssModules(Check);
