'use strict';

const {Component, PropTypes} = require('react');
const {isControlled, genericName} = require('../lib/util');
const {isUndefined, noop, omit} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  m: require('../style/input/input-m.css'),
  s: require('../style/input/input-s.css'),
  xs: require('../style/input/input-xs.css'),
};

const omitProps = omit([
  'defaultValue',
  'onChange',
  'styles',
  'value',
]);

class Input extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      value: isUndefined(value) ? '' : value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this._controlled = isControlled(nextProps);

    this.setState({
      value: this._controlled
        ? nextProps.value
        : this.state.value,
    });
  }

  css = tokenName => genericName(this.props, tokenName)

  focus() {
    if (!this._input) return;
    this._input.focus();
  }

  select() {
    if (!this._input) return;
    this._input.select();
  }

  _onChange = e => {
    const value = e.target.value;
    if (!this._controlled) this.setState({value});
    this.props.onChange(e, {value});
  }

  _onClear = e => {
    const value = '';
    if (!this._controlled) this.setState({value});
    this.props.onChange(e, {value});
    this.focus();
  }

  render() {
    const {
      autoComplete,
      autoFocus,
      className,
      disabled,
      id,
      maxLength,
      name,
      placeholder,
      readOnly,
      type,
      ...other,
    } = this.props;

    const {css} = this;
    const {value} = this.state;

    return (
      <span
        {...omitProps(other)}
        className={cc(css('wrapper'), className)}>
        {this.renderClear({
          className: css('clear'),
          onClick: this._onClear,
        })}
        {this.renderInput({
          autoComplete,
          autoFocus,
          className: css('control'),
          disabled,
          id,
          maxLength,
          name,
          onChange: this._onChange,
          placeholder,
          readOnly,
          ref: r => this._input = r,
          type,
          value,
        })}
      </span>
    );
  }

  renderClear(clearProps) {
    if (this.props.disabled || !this.state.value) return null;

    return (
      <span {...clearProps}/>
    );
  }

  renderInput(inputProps) {
    return (
      <input {...inputProps}/>
    );
  }
}

Input.defaultProps = {
  onChange: noop,
  size: 's',
  styles: cssModules,
  type: 'text',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    'm',
    's',
    'xs',
  ]),
  styles: PropTypes.object,
  type: PropTypes.string,
};

module.exports = Input;
