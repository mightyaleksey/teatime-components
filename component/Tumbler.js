'use strict';

const { PropTypes } = require('react');
const StyleComponent = require('../mixin/StyleComponent');
const Tumbler = require('../view/Tumbler');

module.exports = StyleComponent(
  Tumbler,
  (styles, { size }) => ({styles: styles[size]}),
  {
    xs: require('../style/tumbler/tumbler-xs.css'),
    s: require('../style/tumbler/tumbler-s.css'),
    m: require('../style/tumbler/tumbler-m.css'),
  },
  {
    size: 'xs',
  },
  {
    size: PropTypes.oneOf([
      'xs',
      's',
      'm',
    ]),
  }
);
