import {noop} from '../../lib/util';
import React, {Component} from 'react';
import classNames from 'classnames';

import buttonActionLarge from './button-action-large.css';
import buttonActionMedium from './button-action-medium.css';
import buttonActionSmall from './button-action-small.css';
import buttonNormalLarge from './button-normal-large.css';
import buttonNormalMedium from './button-normal-medium.css';
import buttonNormalSmall from './button-normal-small.css';
import linkCommonLarge from './link-common-large.css';
import linkCommonMedium from './link-common-medium.css';
import linkCommonSmall from './link-common-small.css';
import linkCornflowerBlueLarge from './link-cornflower-blue-large.css';
import linkCornflowerBlueMedium from './link-cornflower-blue-medium.css';
import linkCornflowerBlueSmall from './link-cornflower-blue-small.css';

type Props = {
  children?: any,
  className?: string,
  disabled: boolean,
  download: boolean | string,
  href: string,
  id?: string,
  onClick: Function,
  rel?: string,
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  target: '_blank' | '_parent' | '_self' | '_top',
  theme: 'action' | 'blue' | 'common' | 'normal',
  type?: string,
};

type LinkProps = {};

const cssModules = {
  'action-l': buttonActionLarge,
  'action-m': buttonActionMedium,
  'action-s': buttonActionSmall,
  'blue-l': linkCornflowerBlueLarge,
  'blue-m': linkCornflowerBlueMedium,
  'blue-s': linkCornflowerBlueSmall,
  'common-l': linkCommonLarge,
  'common-m': linkCommonMedium,
  'common-s': linkCommonSmall,
  'normal-l': buttonNormalLarge,
  'normal-m': buttonNormalMedium,
  'normal-s': buttonNormalSmall,
};

class Link extends Component {
  props: Props

  static defaultProps: {
    disabled: boolean,
    download: boolean,
    onClick: Function,
    size: 'l' | 'm' | 's',
    target: '_blank' | '_parent' | '_self' | '_top',
    theme: 'action' | 'blue' | 'common' | 'normal',
  }

  css: {
    link: string,
  }

  constructor(props: Props) {
    super(props);

    this.css = props.styles || cssModules[props.theme + '-' + props.size];

    (this:any)._onClick = this._onClick.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.css = props.styles || cssModules[nextProps.theme + '-' + nextProps.size];
  }

  _computeLinkProps(): LinkProps {
    const {
      children,
      className,
      disabled,
      download,
      href,
      id,
      rel,
      target,
      type,
    } = this.props;
    const {css} = this;
    // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
    return {
      children,
      className: classNames(css.link, {
        [css.disabled]: disabled,
      }, className),
      disabled,
      download,
      href,
      id,
      onClick: this._onClick,
      rel: typeof rel === 'undefined' && target === '_blank'
        ? 'noopener noreferrer'
        : rel,
      target,
      type,
    };
  }

  _onClick(e: SyntheticEvent) {
    const {disabled, onClick} = this.props;

    if (!disabled) onClick(e)
    else e.preventDefault();
  }

  render() {
    const linkProps = this._computeLinkProps();

    return (
      <a {...linkProps}/>
    );
  }
}

Link.defaultProps = {
  disabled: false,
  download: false,
  onClick: noop,
  size: 'm',
  target: '_self',
  theme: 'common',
};

export default Link;
