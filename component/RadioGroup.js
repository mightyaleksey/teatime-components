'use strict';

const { PropTypes } = require('react');
const RadioGroup = require('../view/RadioGroup');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  RadioGroup,
  (styles, { size }) => ({
    optionStyles: styles.optionStyles[size],
    styles: styles.styles,
  }),
  {
    optionStyles: {
      s: require('../style/radio-group/radio-option-s.css'),
      m: require('../style/radio-group/radio-option-m.css'),
      l: require('../style/radio-group/radio-option-l.css'),
    },
    styles: require('../style/radio-group/radio-group.css'),
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
