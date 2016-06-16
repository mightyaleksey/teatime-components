'use strict';

const { PropTypes } = require('react');
const Radio = require('../view/Radio');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
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
