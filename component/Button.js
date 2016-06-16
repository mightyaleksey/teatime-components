'use strict';

const { PropTypes } = require('react');
const Button = require('../view/Button');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
  Button,
  (styles, { size, theme }) => ({styles: styles[`${theme}-${size}`]}),
  {
    'action-xs': require('../style/button/button-action-xs.css'),
    'action-s': require('../style/button/button-action-s.css'),
    'action-m': require('../style/button/button-action-m.css'),
    'action-l': require('../style/button/button-action-l.css'),
    'link-xs': require('../style/button/button-link-xs.css'),
    'link-s': require('../style/button/button-link-s.css'),
    'link-m': require('../style/button/button-link-m.css'),
    'link-l': require('../style/button/button-link-l.css'),
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
      'link',
      'normal',
    ]),
  }
);
