'use strict';

const { PropTypes } = require('react');
const Button = require('../view/Button');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Button,
  (styles, { size, theme }) => ({styles: styles[`${theme}-${size}`]}),
  {
    'action-s': require('../style/button/button-action-s.css'),
    'action-m': require('../style/button/button-action-m.css'),
    'action-l': require('../style/button/button-action-l.css'),
    'action-xl': require('../style/button/button-action-xl.css'),
    'normal-s': require('../style/button/button-normal-s.css'),
    'normal-m': require('../style/button/button-normal-m.css'),
    'normal-l': require('../style/button/button-normal-l.css'),
    'normal-xl': require('../style/button/button-normal-xl.css'),
  },
  {
    size: 'm',
    theme: 'normal',
  },
  {
    size: PropTypes.oneOf([
      's',
      'm',
      'l',
      'xl',
    ]),
    theme: PropTypes.oneOf([
      'action',
      'normal',
    ]),
  }
);
