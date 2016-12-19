'use strict';

const {Component, PropTypes} = require('react');
const {genericName} = require('../lib/util');
const {omit} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  l: require('../style/spin/spin-l.css'),
  m: require('../style/spin/spin-m.css'),
  s: require('../style/spin/spin-s.css'),
  xl: require('../style/spin/spin-xl.css'),
  xs: require('../style/spin/spin-xs.css'),
};

const omitProps = omit([
  'size',
  'styles',
]);

class Spin extends Component {
  css = tokenName => genericName(this.props, tokenName)

  render() {
    const {
      className,
      ...other,
    } = this.props;

    const {css} = this;

    return (
      <span
        {...omitProps(other)}
        className={cc(css('control'), className)}/>
    );
  }
}

Spin.defaultProps = {
  size: 's',
  styles: cssModules,
};

Spin.propTypes = {
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
    'xl',
    'xs',
  ]),
  styles: PropTypes.object,
};

module.exports = Spin;
