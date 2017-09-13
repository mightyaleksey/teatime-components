/* @flow */
import * as React from 'react';
import classNames from 'classnames';

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
  onChange: (event: SyntheticInputEvent<*>, eventData: {name: string, value: string}) => void,
  placeholder?: string,
  readOnly: boolean,
  size: 'l' | 'm' | 's',
  style?: Object,
  type: string,
  value?: string | null,
};

type ClearProps = {
  className: string,
  onClick: Function,
};

type InputProps = {
  autoComplete: 'off' | 'on',
  autoFocus: boolean,
  className: string,
  disabled: boolean,
  id?: string,
  maxLength?: number | string,
  name: string,
  onChange: (event: SyntheticInputEvent<*>, eventData: {name: string, value: string}) => void,
  placeholder?: string,
  readOnly: boolean,
  ref: (ref: ?HTMLInputElement) => void,
  type: string,
};

class Input extends React.Component<Props> {
  static cssModules = {
    l: inputLarge,
    m: inputMedium,
    s: inputSmall,
  };

  static defaultProps = {
    autoComplete: 'off',
    autoFocus: false,
    disabled: false,
    readOnly: false,
    size: 'm',
    type: 'text',
  };

  css: {
    input: string,
    clear: string,
    control: string,
  };

  _inputElement: ?HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.css = Input.cssModules[props.size];
  }

  _computeClearProps(): ClearProps | null {
    const {disabled} = this.props;
    const {css} = this;

    if (disabled) return null;

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
      readOnly,
      placeholder,
      type,
    } = this.props;
    const {css} = this;

    return {
      autoComplete,
      autoFocus,
      className: css.control,
      disabled,
      id,
      maxLength,
      name,
      onChange: this._handleChange,
      placeholder,
      readOnly,
      ref: this._saveRef,
      type,
    };
  }

  _handleClear = () => {};

  _handleChange = (e: SyntheticInputEvent<*>) => {
    const {name, value} = e.target;
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

    return (
      <span {...clearProps} />
    );
  }

  renderInput(inputProps: InputProps) {
    return (
      <input {...inputProps} />
    );
  }
}

export default Input;
