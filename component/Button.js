'use strict';

const {Component, PropTypes} = require('react');
const {genericName} = require('../lib/util');
const {omit} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  'action-l': require('../style/button/button-action-l.css'),
  'action-m': require('../style/button/button-action-m.css'),
  'action-s': require('../style/button/button-action-s.css'),
  'action-xs': require('../style/button/button-action-xs.css'),
  'link-l': require('../style/button/button-link-l.css'),
  'link-m': require('../style/button/button-link-m.css'),
  'link-s': require('../style/button/button-link-s.css'),
  'link-xs': require('../style/button/button-link-xs.css'),
  'normal-l': require('../style/button/button-normal-l.css'),
  'normal-m': require('../style/button/button-normal-m.css'),
  'normal-s': require('../style/button/button-normal-s.css'),
  'normal-xs': require('../style/button/button-normal-xs.css'),
};

const omitProps = omit([
  'size',
  'styles',
  'theme',
]);

class Button extends Component {
  css = tokenName => genericName(this.props, tokenName)

  focus() {
    if (!this._button) return;
    this._button.focus();
  }

  render() {
    const {
      className,
      ...other,
    } = this.props;

    const {css} = this;

    return (
      <button
        {...omitProps(other)}
        className={cc(css('control'), className)}
        ref={r => this._button = r}/>
    );
  }
}

Button.defaultProps = {
  size: 's',
  styles: cssModules,
  theme: 'normal',
};

Button.propTypes = {
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
    'xs',
  ]),
  styles: PropTypes.object,
  theme: PropTypes.oneOf([
    'action',
    'link',
    'normal',
  ]),
};

module.exports = Button;
