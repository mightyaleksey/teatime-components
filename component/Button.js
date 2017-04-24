'use strict';

const {Component} = require('react');
const {genericName, omitNonStandardAttrs} = require('../lib/util');
const PropTypes = require('prop-types');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  'action-l': require('../style/button/button-action-l.css'),
  'action-m': require('../style/button/button-action-m.css'),
  'action-s': require('../style/button/button-action-s.css'),
  'link-l': require('../style/button/button-link-l.css'),
  'link-m': require('../style/button/button-link-m.css'),
  'link-s': require('../style/button/button-link-s.css'),
  'normal-l': require('../style/button/button-normal-l.css'),
  'normal-m': require('../style/button/button-normal-m.css'),
  'normal-s': require('../style/button/button-normal-s.css'),
};

class Button extends Component {
  css = tokenName => genericName(this.props, tokenName)

  focus() {
    if (!this._button) return;
    this._button.focus();
  }

  render() {
    const {autoFocus, children, className, disabled, id, theme, type} = this.props;
    const {css} = this;

    const role = theme === 'link'
      ? 'link'
      : 'button';

    return (
      <button
        {...omitNonStandardAttrs(this.props)}
        autoFocus={autoFocus}
        className={cc(css('control'), className)}
        disabled={disabled}
        id={id}
        ref={r => this._button = r}
        role={role}
        type={type}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  size: 'm',
  styles: cssModules,
  theme: 'normal',
  type: 'button',
};

Button.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
  ]),
  styles: PropTypes.object,
  theme: PropTypes.oneOf([
    'action',
    'link',
    'normal',
  ]),
  type: PropTypes.oneOf([
    'button',
    'menu',
    'reset',
    'submit',
  ]),
};

module.exports = Button;
