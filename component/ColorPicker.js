'use strict';

const { PropTypes } = require('react');
const ColorPicker = require('../view/ColorPicker');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
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
