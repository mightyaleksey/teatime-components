'use strict';

const { PropTypes } = require('react');
const { Spin: BaseSpin } = require('../view/spin');
const { createTag } = require('../');
const cssModules = require('react-css-modules');

const baseStyles = {
  xs: require('../style/spin/spin-xs.css'),
  s: require('../style/spin/spin-s.css'),
  m: require('../style/spin/spin-m.css'),
  l: require('../style/spin/spin-l.css'),
  xl: require('../style/spin/spin-xl.css'),
};

function Spin({ size, styles, ...o }) {
  return BaseSpin({...o, styles: {
    ...baseStyles[size],
    styles,
  }});
}

Spin.defaultProps = {
  size: 'm',
  styles: {},
};

Spin.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
    'l',
    'xl',
  ]),
  styles: PropTypes.object,
};

module.exports = cssModules(Spin);
module.exports.Spin = createTag(module.exports);
