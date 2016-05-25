'use strict';

const { PropTypes } = require('react');
const Check = require('../view/Check');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Check,
  (styles, { size }) => ({styles: styles[size]}),
  {
    m: require('../style/check/check-m.css'),
    l: require('../style/check/check-l.css'),
  },
  {
    size: 'm',
  },
  {
    size: PropTypes.oneOf([
      'm',
      'l',
    ]),
  }
);
