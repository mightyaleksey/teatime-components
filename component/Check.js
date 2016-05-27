'use strict';

const { PropTypes } = require('react');
const Check = require('../view/Check');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Check,
  (styles, { size }) => ({styles: styles[size]}),
  {
    s: require('../style/check/check-s.css'),
    m: require('../style/check/check-m.css'),
  },
  {
    size: 'm',
  },
  {
    size: PropTypes.oneOf([
      's',
      'm',
    ]),
  }
);
