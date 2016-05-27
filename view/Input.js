'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const { bind, noop } = require('../tools/func');
const cssModules = require('react-css-modules');

class Input extends Component {
  constructor(props) {
    super(props);

    bind(this, 'onChange');
  }

  onChange(e) {
    this.props.onChange(e, {value: e.target.value});
  }

  render() {
    return (
      <input {...this.props} onChange={this.onChange} styleName='control' type='text'/>
    );
  }
}

Input.defaultProps = {
  onChange: noop,
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
