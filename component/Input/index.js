/* @flow */
import {isControlled, noop} from '../../lib/util';
import React, {Component} from 'react';
import classNames from 'classnames';

import inputLarge from './input-large.css';
import inputMedium from './input-medium.css';
import inputSmall from './input-small.css';

type Props = {
  autoComplete?: 'off' | 'on',
  autoFocus: boolean,
  className?: string,
  defaultValue?: string,
  disabled: boolean,
  id?: string,
  maxLength?: number | string,
  name: string,
  onBlur: (event: SyntheticEvent) => void,
  onChange: (event: SyntheticEvent, eventData: {name: string, value: string}) => void,
  onFocus: (event: SyntheticFocusEvent) => void,
  placeholder?: string,
  readOnly: boolean,
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  type: string,
  value?: string,
};

const cssModules = {
  l: inputLarge,
  m: inputMedium,
  s: inputSmall,
};

class Input extends Component {
  props: Props

  static defaultProps: {
    autoFocus: boolean,
    disabled: boolean,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    readOnly: boolean,
    size: 'l' | 'm' | 's',
    type: string,
  }

  state: {
    value: string,
  }

  css: {
    clear: string,
    control: string,
    input: string,
  }

  _controlled: boolean

  _inputElement: HTMLInputElement

  constructor(props: Props) {
    super(props);

    this._controlled = isControlled(props);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      value: value != null ? value : '',
    };

    this.css = props.styles || cssModules[props.size];

    (this:any)._onBlur = this._onBlur.bind(this);
    (this:any)._onChange = this._onChange.bind(this);
    (this:any)._onClear = this._onClear.bind(this);
    (this:any)._onFocus = this._onFocus.bind(this);
    (this:any)._saveRef = this._saveRef.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this._controlled = isControlled(nextProps);

    if (this._controlled) {
      const {value} = nextProps;

      this.setState({
        value: value != null ? value : '',
      });
    }

    this.css = nextProps.styles || cssModules[nextProps.size];
  }

  focus() {
    if (this._inputElement) this._inputElement.focus();
  }

  select() {
    if (this._inputElement) this._inputElement.select();
  }

  _emitChange(e: SyntheticEvent, value: string) {
    const {name, onChange} = this.props;
    if (!this._controlled) this.setState({value});
    onChange(e, {name, value});
  }

  _onBlur(e: SyntheticEvent) {
    const {onBlur} = this.props;
    onBlur(e);
  }

  _onClear(e: SyntheticEvent) {
    this._emitChange(e, '');
    this.focus();
  }

  _onChange(e: SyntheticInputEvent) {
    this._emitChange(e, e.target.value);
  }

  _onFocus(e: SyntheticFocusEvent) {
    const {onFocus} = this.props;
    onFocus(e);
  }

  _saveRef(ref: HTMLInputElement) {
    this._inputElement = ref;
  }

  render() {
    const {className, style} = this.props;
    const {css} = this;

    return (
      <span className={classNames(css.input, className)} style={style}>
        {this.renderClear()}
        {this.renderInput()}
      </span>
    );
  }

  renderClear() {
    const {disabled} = this.props;
    const {value} = this.state;

    if (disabled || value === '') return null;

    const {css} = this;

    return (
      <span
        className={css.clear}
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
      readOnly,
      placeholder,
      type,
    } = this.props;
    const {value} = this.state;
    const {css} = this;

    return (
      <input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={css.control}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={name}
        onBlur={this._onBlur}
        onChange={this._onChange}
        onFocus={this._onFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={this._saveRef}
        type={type}
        value={value}/>
    );
  }
}

Input.defaultProps = {
  autoFocus: false,
  disabled: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  readOnly: false,
  size: 'm',
  type: 'text',
};

export default Input;
