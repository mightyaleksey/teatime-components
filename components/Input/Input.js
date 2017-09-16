/* @flow */
import * as React from 'react';
import classNames from 'classnames';

import {isControlled, noop, pickValue} from '../../lib/util';

import inputLarge from './input-large.css';
import inputMedium from './input-medium.css';
import inputSmall from './input-small.css';

type Props = {
  autoComplete: 'off' | 'on',
  autoFocus: boolean,
  className?: string,
  defaultValue?: string | null,
  disabled: boolean,
  id?: string,
  maxLength?: number | string,
  name: string,
  onBlur: () => void,
  onChange: (
    event: SyntheticInputEvent<*>,
    eventData: {name: string, value: string}
  ) => void,
  onFocus: () => void,
  placeholder?: string,
  readOnly: boolean,
  size: 'l' | 'm' | 's',
  style?: Object,
  type: string,
  value?: string | null
};

type State = {
  value: string
};

type ClearProps = {
  className: string,
  onClick: Function
};

type InputProps = {
  autoComplete: 'off' | 'on',
  autoFocus: boolean,
  className: string,
  disabled: boolean,
  id?: string,
  maxLength?: number | string,
  name: string,
  onChange: (
    event: SyntheticInputEvent<*>,
    eventData: {name: string, value: string}
  ) => void,
  placeholder?: string,
  readOnly: boolean,
  ref: (ref: ?HTMLInputElement) => void,
  type: string
};

class Input extends React.Component<Props, State> {
  static cssModules = {
    l: inputLarge,
    m: inputMedium,
    s: inputSmall
  };

  static defaultProps = {
    autoComplete: 'off',
    autoFocus: false,
    disabled: false,
    onBlur: noop,
    onChange: noop,
    onFocus: noop,
    readOnly: false,
    size: 'm',
    type: 'text'
  };

  css: {
    input: string,
    clear: string,
    control: string
  };

  _controlled: boolean;
  _inputElement: ?HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this._controlled = isControlled(props);
    // @todo warn the incorrect props usage
    this.css = Input.cssModules[props.size];

    this.state = {
      value: pickValue(this._controlled, props.defaultValue, props.value, ''),
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    this._controlled = isControlled(nextProps);
    // @todo warn the incorrect props usage
    this.css = Input.cssModules[nextProps.size];

    if (this._controlled) {
      this.setState({
        value: pickValue(this._controlled, nextProps.defaultValue, nextProps.value, ''),
      });
    }
  }

  focus() {
    if (this._inputElement) this._inputElement.focus();
  }

  _computeClearProps(): ClearProps | null {
    const {disabled} = this.props;
    const {value} = this.state;
    const {css} = this;

    if (disabled || value === '') return null;

    return {
      className: css.clear,
      onClick: this._handleClear,
    };
  }

  _computeInputProps(): InputProps {
    const {
      autoComplete,
      autoFocus,
      disabled,
      id,
      maxLength,
      name,
      onBlur,
      onFocus,
      readOnly,
      placeholder,
      type,
    } = this.props;
    const {value} = this.state;
    const {css} = this;

    return {
      autoComplete,
      autoFocus,
      className: css.control,
      disabled,
      id,
      maxLength,
      name,
      onBlur,
      onChange: this._handleChange,
      onFocus,
      placeholder,
      readOnly,
      ref: this._saveRef,
      type,
      value,
    };
  }

  _handleClear = (e: SyntheticInputEvent<*>) => {
    this._handleChange(e);
    this.focus();
  };

  _handleChange = (e: SyntheticInputEvent<*>) => {
    const {name} = this.props;
    const {value = ''} = e.target;
    if (!this._controlled) this.setState({value});
    this.props.onChange(e, {name, value});
  };

  _saveRef = (ref: ?HTMLInputElement) => {
    this._inputElement = ref;
  };

  render() {
    const {className} = this.props;
    const {css} = this;

    const clearProps = this._computeClearProps();
    const inputProps = this._computeInputProps();

    return (
      <span className={classNames(css.input, className)}>
        {this.renderClear(clearProps)}
        {this.renderInput(inputProps)}
      </span>
    );
  }

  renderClear(clearProps: ClearProps | null) {
    if (clearProps === null) return null;

    return <span {...clearProps} />;
  }

  renderInput(inputProps: InputProps) {
    return <input {...inputProps} />;
  }
}

export default Input;
