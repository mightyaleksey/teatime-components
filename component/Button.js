'use strict';

const { PropTypes } = require('react');
const Button = require('../view/Button');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Button,
  (styles, { size, theme }) => ({styles: styles[`${theme}-${size}`]}),
  {
    'action-xs': require('../style/button/button-action-xs.css'),
    'action-s': require('../style/button/button-action-s.css'),
    'action-m': require('../style/button/button-action-m.css'),
    'action-l': require('../style/button/button-action-l.css'),
    'normal-xs': require('../style/button/button-normal-xs.css'),
    'normal-s': require('../style/button/button-normal-s.css'),
    'normal-m': require('../style/button/button-normal-m.css'),
    'normal-l': require('../style/button/button-normal-l.css'),
  },
  {
    size: 's',
    theme: 'normal',
  },
  {
    size: PropTypes.oneOf([
      'xs',
      's',
      'm',
      'l',
    ]),
    theme: PropTypes.oneOf([
      'action',
      'normal',
    ]),
  }
);
