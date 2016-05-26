'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const cssModules = require('react-css-modules');

class Input extends Component {
  render() {
    return (
      <input {...this.props} styleName='control' type='text'/>
    );
  }
}

Input.defaultProps = {
  styles: {},
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onPaste: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = cssModules(Input);
