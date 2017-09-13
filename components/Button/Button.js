/* @flow */
import * as React from 'react';
import classNames from 'classnames';

import actionLargeStyles from './button-action-large.css';
import actionMediumStyles from './button-action-medium.css';
import actionSmallStyles from './button-action-small.css';
import normalLargeStyles from './button-normal-large.css';
import normalMediumStyles from './button-normal-medium.css';
import normalSmallStyles from './button-normal-small.css';

type Props = {
  autoFocus: boolean,
  children: any,
  className?: string,
  disabled: boolean,
  id?: string,
  onClick: Function,
  size: 'l' | 'm' | 's',
  style?: Object,
  theme: 'action' | 'normal',
  type: 'button' | 'menu' | 'reset' | 'submit',
};

type ButtonProps = {
  autoFocus: boolean,
  children: any,
  className: string,
  disabled: boolean,
  id?: string,
  onClick: Function,
  ref: (ref: ?HTMLButtonElement) => void,
  role: 'button',
  style?: Object,
  type: 'button' | 'menu' | 'reset' | 'submit',
};

class Button extends React.Component<Props> {
  static cssModules = {
    'action-l': actionLargeStyles,
    'action-m': actionMediumStyles,
    'action-s': actionSmallStyles,
    'normal-l': normalLargeStyles,
    'normal-m': normalMediumStyles,
    'normal-s': normalSmallStyles,
  };

  static defaultProps = {
    autoFocus: false,
    disabled: false,
    size: 'm',
    theme: 'normal',
    type: 'button',
  };

  _buttonElement: ?HTMLButtonElement;

  _saveRef = (ref: ?HTMLButtonElement) => {
    this._buttonElement = ref;
  };

  focus() {
    if (this._buttonElement) this._buttonElement.focus();
  }

  render() {
    const {
      autoFocus,
      children,
      className,
      disabled,
      id,
      onClick,
      size,
      style,
      theme,
      type,
    } = this.props;

    const css = Button.cssModules[theme + '-' + size];

    const buttonProps = {
      autoFocus,
      children,
      className: classNames(css.button, className),
      disabled,
      id,
      onClick,
      ref: this._saveRef,
      role: 'button',
      style,
      type,
    };

    return this.renderButton(buttonProps);
  }

  renderButton(buttonProps: ButtonProps) {
    return (
      <button {...buttonProps} />
    );
  }
}

export default Button;
