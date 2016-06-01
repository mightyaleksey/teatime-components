'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const { bind, noop } = require('../tools/func');
const cssModules = require('react-css-modules');

class Input extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;

    this.state = {
      value: props.value || props.defaultValue || '',
    };

    bind(this, [
      'onChange',
      'onClearClick',
    ]);
  }

  onChange(e) {
    this.updateValue(e.target.value, e);
  }

  onClearClick(e) {
    if (this.props.disabled) {
      return;
    }

    this.updateValue('', e);

    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  updateValue(value, e) {
    if (!this.controlled) {
      this.setState({value});
    }

    this.props.onChange(e, {value});
  }

  render() {
    const { value } = this.state;
    const clearElement = value && !this.props.disabled
      ? (<span styleName='clear' onClick={this.onClearClick}/>)
      : null;

    return (
      <span styleName='wrapper'>
        <input
          ref='control'
          styleName='control'
          {...this.props}
          defaultValue={undefined} // Cause we have a controlled input
          onChange={this.onChange}
          value={value}/>
        {clearElement}
      </span>
    );
  }
}

Input.defaultProps = {
  onChange: noop,
  styles: {},
  type: 'text',
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
  type:  PropTypes.oneOf([
    'password',
    'text',
  ]),
  value: PropTypes.string,
};

module.exports = cssModules(Input);
