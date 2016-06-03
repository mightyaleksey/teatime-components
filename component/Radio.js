'use strict';

const { PropTypes } = require('react');
const Radio = require('../view/Radio');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Radio,
  (styles, { size }) => ({styles: styles[size]}),
  {
    s: require('../style/radio/radio-s.css'),
    m: require('../style/radio/radio-m.css'),
  },
  {
    size: 's',
  },
  {
    size: PropTypes.oneOf([
      's',
      'm',
    ]),
  }
);
