'use strict';

const { PropTypes } = require('react');
const CheckGroup = require('../view/CheckGroup');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  CheckGroup,
  (styles, { size }) => ({
    optionStyles: styles.optionStyles[size],
    styles: styles.styles,
  }),
  {
    optionStyles: {
      m: require('../style/check-group/check-option-m.css'),
      l: require('../style/check-group/check-option-l.css'),
    },
    styles: require('../style/check-group/check-group.css'),
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
