/* @flow */
import {genericId} from '../../lib/identity';
import {noop} from '../../lib/util';
import React, {Component} from 'react';
import classNames from 'classnames';

import tumblerLarge from './tumbler-large.css';
import tumblerMedium from './tumbler-medium.css';
import tumblerSmall from './tumbler-small.css';

type Props = {
  checked?: boolean,
  className?: string,
  defaultChecked?: boolean,
  disabled: boolean,
  id?: string,
  name: string,
  offText: string,
  onBlur: (event: SyntheticEvent) => void,
  onChange: (event: SyntheticInputEvent, eventData: {checked: boolean, name: string, value: string}) => void,
  onFocus: (event: SyntheticFocusEvent) => void,
  onText: string,
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  value: string,
};

type InputProps = {
  checked?: boolean,
  className: string,
  defaultChecked?: boolean,
  disabled: boolean,
  id: string,
  name: string,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  ref: Function,
  type: string,
  value: string,
};

const cssModules = {
  l: tumblerLarge,
  m: tumblerMedium,
  s: tumblerSmall,
};

class Tumbler extends Component {
  props: Props

  static defaultProps: {
    disabled: boolean,
    offText: string,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    onText: string,
    size: 'l' | 'm' | 's',
    value: string,
  }

  css: {
    tumbler: string,
    baseline: string,
    shape: string,
    native: string,
    control: string,
    label: string,
    delimiter: string,
  }

  id: string

  _inputElement: HTMLInputElement

  constructor(props: Props) {
    super(props);

    this.css = props.styles || cssModules[props.size];
    this.id = props.id || genericId();

    (this:any)._onChange = this._onChange.bind(this);
    (this:any)._saveRef = this._saveRef.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.css = nextProps.styles || cssModules[nextProps.size];
    if (nextProps.id) this.id = nextProps.id || genericId();
  }

  focus() {
    if (this._inputElement) this._inputElement.focus();
  }

  _computeInputProps(): InputProps {
    const {
      checked,
      defaultChecked,
      disabled,
      name,
      onBlur,
      onFocus,
      value,
    } = this.props;
    const {css, id} = this;

    return {
      checked,
      className: css.native,
      defaultChecked,
      disabled,
      id,
      name,
      onBlur,
      onChange: this._onChange,
      onFocus,
      ref: this._saveRef,
      type: 'checkbox',
      value,
    };
  }

  _onChange(e: SyntheticInputEvent) {
    const {name, onChange} = this.props;
    const {checked, value} = e.target;
    onChange(e, {checked, name, value});
  }

  _saveRef(ref: HTMLInputElement) {
    this._inputElement = ref;
  }

  render() {
    const {className, offText, onText, style} = this.props;
    const {css, id} = this;

    const inputProps = this._computeInputProps();

    // why this looks like a pie,
    // see: http://stackoverflow.com/questions/9273016/why-is-this-inline-block-element-pushed-downward

    return (
      <span className={classNames(css.tumbler, className)} style={style}>
        <span className={css.baseline}>
          <span className={css.shape}>
            {this.renderInput(inputProps)}
            <label className={css.control} htmlFor={id}>
              <span className={css.label}>{onText}</span>
              <span className={css.label}>{offText}</span>
              <span className={css.delimiter}>&nbsp;</span>
            </label>
          </span>
        </span>
      </span>
    );
  }

  renderInput(inputProps: InputProps) {
    return (
      <input {...inputProps}/>
    );
  }
}

Tumbler.defaultProps = {
  disabled: false,
  offText: 'Off',
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  onText: 'On',
  size: 'm',
  value: 'on',
};

export default Tumbler;
