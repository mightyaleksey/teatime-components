/* @flow */
import {noop} from '../../lib/util';
import React, {Component} from 'react';
import classNames from 'classnames';

import actionLargeStyles from './button-action-large.css';
import actionMediumStyles from './button-action-medium.css';
import actionSmallStyles from './button-action-small.css';
import normalLargeStyles from './button-normal-large.css';
import normalMediumStyles from './button-normal-medium.css';
import normalSmallStyles from './button-normal-small.css';

type Props = {
  autoFocus: boolean,
  children?: any,
  className?: string,
  disabled: boolean,
  id?: string,
  onClick: Function,
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  theme: 'action' | 'normal',
  type: 'button' | 'menu' | 'reset' | 'submit',
};

const cssModules = {
  'action-l': actionLargeStyles,
  'action-m': actionMediumStyles,
  'action-s': actionSmallStyles,
  'normal-l': normalLargeStyles,
  'normal-m': normalMediumStyles,
  'normal-s': normalSmallStyles,
};

class Button extends Component {
  props: Props

  static defaultProps: {
    autoFocus: boolean,
    disabled: boolean,
    onClick: Function,
    size: 'm',
    theme: 'action' | 'normal',
    type: 'button' | 'menu' | 'reset' | 'submit',
  }

  state: {
    isFocused: boolean,
  }

  css: {
    button: string,
    focused: string,
  }

  _buttonElement: HTMLButtonElement

  _wasMouseEvent: boolean

  constructor(props: Props) {
    super(props);

    this.state = {
      isFocused: false,
    };

    this.css = props.styles || cssModules[props.theme + '-' + props.size];

    (this:any)._onBlur = this._onBlur.bind(this);
    (this:any)._onFocus = this._onFocus.bind(this);
    (this:any)._onMouseDown = this._onMouseDown.bind(this);
    (this:any)._saveRef = this._saveRef.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.css = nextProps.styles || cssModules[nextProps.theme + '-' + nextProps.size];
  }

  focus() {
    if (this._buttonElement) this._buttonElement.focus();
  }

  _onBlur(e: SyntheticEvent) {
    this._wasMouseEvent = false;
    if (this.state.isFocused) this.setState({isFocused: false});
    if (typeof this.props.onBlur === 'function') this.props.onBlur(e);
  }

  _onFocus(e: SyntheticFocusEvent) {
    if (!this._wasMouseEvent) this.setState({isFocused: true});
    if (typeof this.props.onFocus === 'function') this.props.onFocus(e);
  }

  _onMouseDown() {
    this._wasMouseEvent = true;
  }

  _saveRef(ref: HTMLButtonElement) {
    this._buttonElement = ref;
  }

  render() {
    const {
      autoFocus,
      children,
      className,
      disabled,
      id,
      onClick,
      style,
      type,
    } = this.props;
    const {isFocused} = this.state;
    const css = this.css;

    return (
      <button
        autoFocus={autoFocus}
        className={classNames(css.button, {[css.focused]: isFocused}, className)}
        disabled={disabled}
        id={id}
        onBlur={this._onBlur}
        onFocus={this._onFocus}
        onMouseDown={this._onMouseDown}
        onClick={onClick}
        ref={this._saveRef}
        role='button'
        style={style}
        type={type}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  autoFocus: false,
  disabled: false,
  onClick: noop,
  size: 'm',
  theme: 'normal',
  type: 'button',
};

export default Button;
