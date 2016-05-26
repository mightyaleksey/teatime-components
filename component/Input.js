'use strict';

const { PropTypes } = require('react');
const Input = require('../view/Input');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Input,
  (styles, { size }) => ({styles: styles[size]}),
  {
    's': require('../style/input/input-s.css'),
    'm': require('../style/input/input-m.css'),
    'l': require('../style/input/input-l.css'),
  },
  {
    size: 'm',
  },
  {
    size: PropTypes.oneOf([
      's',
      'm',
      'l',
    ]),
  }
);
