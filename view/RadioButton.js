'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const { generateId } = require('../tools/identity');
const cssModules = require('react-css-modules');

class RadioButton extends Component {
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
      <span className={className} styleName='wrapper'>
        <input {...o} id={id} styleName='native' type='radio'/>
        <label htmlFor={id} styleName='control'>{children}</label>
      </span>
    );
  }
}

RadioButton.defaultProps = {
  styles: {},
};

RadioButton.propTypes = {
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  styles: PropTypes.object,
  value: PropTypes.string.isRequired,
};

module.exports = cssModules(RadioButton);
