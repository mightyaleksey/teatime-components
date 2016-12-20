'use strict';

const {Component, PropTypes} = require('react');
const {filterProps, genericName} = require('../lib/util');
const {noop} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  'action-l': require('../style/link/link-action-l.css'),
  'action-m': require('../style/link/link-action-m.css'),
  'action-s': require('../style/link/link-action-s.css'),
  'action-xs': require('../style/link/link-action-xs.css'),
  'link-l': require('../style/link/link-l.css'),
  'link-m': require('../style/link/link-m.css'),
  'link-s': require('../style/link/link-s.css'),
  'link-xs': require('../style/link/link-xs.css'),
  'normal-l': require('../style/link/link-normal-l.css'),
  'normal-m': require('../style/link/link-normal-m.css'),
  'normal-s': require('../style/link/link-normal-s.css'),
  'normal-xs': require('../style/link/link-normal-xs.css'),
};

class Link extends Component {
  css = tokenName => genericName(this.props, tokenName)

  focus = noop

  render() {
    const {children, className} = this.props;
    const {css} = this;

    return (
      <a
        {...filterProps(this.props)}
        className={cc(css('control'), className)}>
        {children}
      </a>
    );
  }
}

Link.defaultProps = {
  size: 's',
  styles: cssModules,
  theme: 'link',
};

Link.propTypes = {
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

module.exports = Link;
