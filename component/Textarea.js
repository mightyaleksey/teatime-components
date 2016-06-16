'use strict';

const { PropTypes } = require('react');
const StyleComponent = require('../mixin/StyleComponent');
const Textarea = require('../view/Textarea');

module.exports = StyleComponent(
  Textarea,
  (styles, { size }) => ({styles: styles[size]}),
  {
    s: require('../style/textarea/textarea-s.css'),
    m: require('../style/textarea/textarea-m.css'),
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
