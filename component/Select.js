'use strict';

const { PropTypes } = require('react');
const Select = require('../view/Select');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Select,
  (styles, { size }) => ({
    styles: styles[size],
  }),
  {
    s: require('../style/select/select-s.css'),
    m: require('../style/select/select-m.css'),
    l: require('../style/select/select-l.css'),
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
