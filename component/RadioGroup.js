'use strict';

const { PropTypes } = require('react');
const RadioGroup = require('../view/RadioGroup');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
  RadioGroup,
  (styles, { size }) => ({
    styles: styles[size],
  }),
  {
    xs: require('../style/radio-group/radio-group-xs.css'),
    s: require('../style/radio-group/radio-group-s.css'),
    m: require('../style/radio-group/radio-group-m.css'),
    l: require('../style/radio-group/radio-group-l.css'),
  },
  {
    size: 's',
  },
  {
    size: PropTypes.oneOf([
      'xs',
      's',
      'm',
      'l',
    ]),
  }
);
