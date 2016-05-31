'use strict';

const { PropTypes } = require('react');
const Tumbler = require('../view/Tumbler');
const simplify = require('../mixin/simplify');

module.exports = simplify(
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
