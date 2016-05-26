'use strict';

const { PropTypes } = require('react');
const Textarea = require('../view/Textarea');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Textarea,
  (styles, { size }) => ({styles: styles[size]}),
  {
    m: require('../style/textarea/textarea-m.css'),
    l: require('../style/textarea/textarea-l.css'),
  },
  {
    size: 'm',
  },
  {
    size: PropTypes.oneOf([
      'm',
      'l',
    ]),
  }
);
