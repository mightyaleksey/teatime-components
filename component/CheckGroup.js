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
    s: require('../style/check-group/check-group-s.css'),
    m: require('../style/check-group/check-group-m.css'),
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
