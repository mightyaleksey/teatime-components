'use strict';

const { PropTypes } = require('react');
const Select = require('../view/Select');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Select,
  (styles, { size }) => ({
    buttonStyles: {
      buttonClosed: styles.buttonClosed[size],
      buttonOpened: styles.buttonOpened[size],
    },
    optionStyles: styles.optionStyles[size],
    styles: styles.styles[size],
  }),
  {
    buttonClosed: {
      s: require('../style/select/button-closed-s.css'),
      m: require('../style/select/button-closed-m.css'),
      l: require('../style/select/button-closed-l.css'),
    },
    buttonOpened: {
      s: require('../style/select/button-opened-s.css'),
      m: require('../style/select/button-opened-m.css'),
      l: require('../style/select/button-opened-l.css'),
    },
    optionStyles: {
      s: require('../style/select/option-s.css'),
      m: require('../style/select/option-m.css'),
      l: require('../style/select/option-l.css'),
    },
    styles: {
      s: require('../style/select/select-s.css'),
      m: require('../style/select/select-m.css'),
      l: require('../style/select/select-l.css'),
    },
  },
  {
    size: 'm',
  },
  {
    size: PropTypes.oneOf([
      's',
      'm',
      'l',
      'xl',
    ]),
  }
);
