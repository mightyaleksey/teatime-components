'use strict';

const { PropTypes } = require('react');
const ColorPicker = require('../view/ColorPicker');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  ColorPicker,
  (styles, { size }) => ({styles: styles[size]}),
  {
    xs: require('../style/color-picker/color-picker-xs.css'),
    s: require('../style/color-picker/color-picker-s.css'),
    m: require('../style/color-picker/color-picker-m.css'),
  },
  {
    size: 'm',
  },
  {
    size: PropTypes.oneOf([
      'xs',
      's',
      'm',
    ]),
  }
);
