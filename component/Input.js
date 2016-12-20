'use strict';

const {Component, PropTypes} = require('react');
const {filterProps, isControlled, genericName} = require('../lib/util');
const {isUndefined, noop} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  m: require('../style/input/input-m.css'),
  s: require('../style/input/input-s.css'),
  xs: require('../style/input/input-xs.css'),
};

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
    const {className} = this.props;
    const {css} = this;

    return (
      <span
        {...filterProps(this.props)}
        className={cc(css('wrapper'), className)}>
        {this.renderClear()}
        {this.renderInput()}
      </span>
    );
  }

  renderClear() {
    const {disabled} = this.props;
    const {value} = this.state;

    if (disabled || !value) return null;

    const {css} = this;

    return (
      <span
        className={css('clear')}
        onClick={this._onClear}/>
    );
  }

  renderInput() {
    const {
      autoComplete,
      autoFocus,
      disabled,
      id,
      maxLength,
      name,
      placeholder,
      readOnly,
      type,
    } = this.props;

    const {value} = this.state;
    const {css} = this;

    return (
      <input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={css('control')}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={name}
        onChange={this._onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={r => this._input = r}
        type={type}
        value={value}/>
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
