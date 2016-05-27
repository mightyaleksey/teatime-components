'use strict';

const { PropTypes } = require('react');
const Textarea = require('../view/Textarea');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Textarea,
  (styles, { size }) => ({styles: styles[size]}),
  {
    s: require('../style/textarea/textarea-s.css'),
    m: require('../style/textarea/textarea-m.css'),
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
