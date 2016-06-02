'use strict';

const { PropTypes } = require('react');
const Check = require('../view/Check');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Check,
  (styles, { size }) => ({
    styles: styles[size],
    type: 'radio',
  }),
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
