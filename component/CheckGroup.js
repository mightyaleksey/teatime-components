'use strict';

const { PropTypes } = require('react');
const CheckGroup = require('../view/CheckGroup');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  CheckGroup,
  (styles, { size }) => ({
    styles: styles[size],
  }),
  {
    m: require('../style/check-group/check-group-m.css'),
    l: require('../style/check-group/check-group-l.css'),
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
