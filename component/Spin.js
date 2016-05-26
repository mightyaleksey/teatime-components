'use strict';

const { PropTypes } = require('react');
const Spin = require('../view/Spin');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Spin,
  (styles, { size }) => ({styles: styles[size]}),
  {
    xs: require('../style/spin/spin-xs.css'),
    s: require('../style/spin/spin-s.css'),
    m: require('../style/spin/spin-m.css'),
    l: require('../style/spin/spin-l.css'),
    xl: require('../style/spin/spin-xl.css'),
  },
  {
    size: 'm',
  },
  {
    size: PropTypes.oneOf([
      'xs',
      's',
      'm',
      'l',
      'xl',
    ]),
  }
);
