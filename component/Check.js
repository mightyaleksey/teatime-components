'use strict';

const { PropTypes } = require('react');
const Check = require('../view/Check');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
  Check,
  (styles, { size }) => ({styles: styles[size]}),
  {
    s: require('../style/check/check-s.css'),
    m: require('../style/check/check-m.css'),
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
