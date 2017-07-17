/* @flow */
import {noop} from '../../lib/util';
import React, {Component} from 'react';
import classNames from 'classnames';

import textareaLarge from './textarea-large.css';
import textareaMedium from './textarea-medium.css';
import textareaSmall from './textarea-small.css';

type Props = {
  autoComplete?: 'off' | 'on',
  autoFocus: boolean,
  className?: string,
  cols?: number | string,
  defaultValue?: string,
  disabled: boolean,
  id?: string,
  maxLength?: number | string,
  name: string,
  onBlur: (event: SyntheticEvent) => void,
  onChange: (event: SyntheticInputEvent, eventData: {name: string, value: string}) => void,
  onFocus: (event: SyntheticFocusEvent) => void,
  placeholder?: string,
  readOnly: boolean,
  rows?: number | string,
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  value?: string,
};

type TextareaProps = {
  autoComplete?: 'off' | 'on',
  autoFocus: boolean,
  className: string,
  cols?: number | string,
  defaultValue?: string,
  disabled: boolean,
  id?: string,
  maxLength?: number | string,
  name: string,
  onBlur: Function,
  onChange: (event: SyntheticInputEvent) => void,
  onFocus: Function,
  placeholder?: string,
  readOnly: boolean,
  rows?: number | string,
  style?: Object,
  value?: string,
};

const cssModules = {
  l: textareaLarge,
  m: textareaMedium,
  s: textareaSmall,
};

class Textarea extends Component {
  props: Props

  static defaultProps: {
    autoFocus: boolean,
    disabled: boolean,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    readOnly: boolean,
    size: 'l' | 'm' | 's',
  }

  css: {
    textarea: string,
  }

  _textareaElement: HTMLTextAreaElement

  constructor(props: Props) {
    super(props);

    this.css = props.styles || cssModules[props.size];

    (this:any)._onChange = this._onChange.bind(this);
    (this:any)._saveRef = this._saveRef.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.css = nextProps.styles || cssModules[nextProps.size];
  }

  focus() {
    if (this._textareaElement) this._textareaElement.focus();
  }

  select() {
    if (this._textareaElement) this._textareaElement.select();
  }

  _computeTextareaProps(): TextareaProps {
    const {
      autoComplete,
      autoFocus,
      className,
      cols,
      defaultValue,
      disabled,
      id,
      maxLength,
      name,
      onBlur,
      onFocus,
      placeholder,
      readOnly,
      rows,
      style,
      value,
    } = this.props;
    const {css} = this;

    return {
      autoComplete,
      autoFocus,
      className: classNames(css.textarea, className),
      cols,
      defaultValue: defaultValue !== null ? defaultValue : '',
      disabled,
      id,
      maxLength,
      name,
      onBlur,
      onChange: this._onChange,
      onFocus,
      placeholder,
      readOnly,
      rows,
      style,
      value: value !== null ? value : '',
    };
  }

  _onChange(e: SyntheticInputEvent) {
    const {name, onChange} = this.props;
    onChange(e, {name, value: e.target.value});
  }

  _saveRef(ref: HTMLTextAreaElement) {
    this._textareaElement = ref;
  }

  render() {
    const textareaProps = this._computeTextareaProps();

    return (
      <textarea {...textareaProps}/>
    );
  }
}

Textarea.defaultProps = {
  autoFocus: false,
  disabled: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  readOnly: false,
  size: 'm',
};

export default Textarea;
