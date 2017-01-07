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
  'link-l': require('../style/link/link-l.css'),
  'link-m': require('../style/link/link-m.css'),
  'link-s': require('../style/link/link-s.css'),
  'normal-l': require('../style/link/link-normal-l.css'),
  'normal-m': require('../style/link/link-normal-m.css'),
  'normal-s': require('../style/link/link-normal-s.css'),
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
  size: 'm',
  styles: cssModules,
  theme: 'link',
};

Link.propTypes = {
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
};

module.exports = Link;
