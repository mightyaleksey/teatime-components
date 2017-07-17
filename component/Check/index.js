/* @flow */
import {noop} from '../../lib/util';
import Box from '../Radio/Box';
import React, {Component} from 'react';
import classNames from 'classnames';

import checkLarge from './check-large.css';
import checkMedium from './check-medium.css';

type Props = {
  checked?: boolean,
  children?: any,
  className?: string,
  defaultChecked?: boolean,
  disabled: boolean,
  id?: string,
  label?: any,
  name: string,
  onBlur: (event: SyntheticEvent) => void,
  onChange: (event: SyntheticInputEvent, eventData: {checked: boolean, name: string, value: string}) => void,
  onFocus: (event: SyntheticFocusEvent) => void,
  size: 'l' | 'm',
  style?: Object,
  styles?: Object,
  value: string,
};

type BoxProps = {
  checked?: boolean,
  children?: string,
  defaultChecked?: boolean,
  disabled: boolean,
  hasLabel: boolean,
  id?: string,
  name: string,
  onChange: (e: SyntheticInputEvent, value: string) => void,
  style?: Object,
  styles: {
    box: string,
    native: string,
    control: string,
    label?: string,
  },
  type: 'checkbox',
  value: string,
};

const cssModules = {
  l: checkLarge,
  m: checkMedium,
};

class Check extends Component {
  props: Props

  static defaultProps: {
    disabled: boolean,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    size: 'l' | 'm',
    value: string,
  }

  css: {
    check: string,
    native: string,
    control: string,
    label: string,
  }

  constructor(props: Props) {
    super(props);

    this.css = props.styles || cssModules[props.size];

    (this:any)._onBlur = this._onBlur.bind(this);
    (this:any)._onChange = this._onChange.bind(this);
    (this:any)._onFocus = this._onFocus.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.css = nextProps.styles || cssModules[nextProps.size];
  }

  _computeBoxProps() {
    const {
      checked,
      children,
      className,
      defaultChecked,
      disabled,
      id,
      label,
      name,
      style,
      value,
    } = this.props;
    const {css} = this;

    const text = typeof label === 'undefined'
      ? children
      : label;

    return {
      checked,
      children: text,
      defaultChecked,
      disabled,
      hasLabel: true,
      id,
      name,
      onBlur: this._onBlur,
      onChange: this._onChange,
      onFocus: this._onFocus,
      style,
      styles: {
        box: classNames(css.check, className),
        native: css.native,
        control: css.control,
        label: css.label,
      },
      type: 'checkbox',
      value,
    };
  }

  _onBlur(e: SyntheticEvent) {
    this.props.onBlur(e);
  }

  _onChange(e: SyntheticInputEvent, value: string) {
    const {name, onChange} = this.props;
    const {checked} = e.target;
    onChange(e, {checked, name, value});
  }

  _onFocus(e: SyntheticFocusEvent) {
    this.props.onFocus(e);
  }

  render() {
    const boxProps = this._computeBoxProps();

    return this.renderBox(boxProps);
  }

  renderBox(boxProps: BoxProps) {
    return (
      <Box {...boxProps}/>
    );
  }
}

Check.defaultProps = {
  disabled: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  size: 'm',
  value: 'on',
};

export default Check;
