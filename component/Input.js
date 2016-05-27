'use strict';

const { PropTypes } = require('react');
const Input = require('../view/Input');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Input,
  (styles, { size }) => ({styles: styles[size]}),
  {
    'xs': require('../style/input/input-xs.css'),
    's': require('../style/input/input-s.css'),
    'm': require('../style/input/input-m.css'),
  },
  {
    size: 's',
  },
  {
    size: PropTypes.oneOf([
      'xs',
      's',
      'm',
    ]),
  }
);
