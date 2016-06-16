'use strict';

const { PropTypes } = require('react');
const Select = require('../view/Select');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
  Select,
  (styles, { size }) => ({
    styles: styles[size],
  }),
  {
    xs: require('../style/select/select-xs.css'),
    s: require('../style/select/select-s.css'),
    m: require('../style/select/select-m.css'),
  },
  {
    size: 's',
  },
  {
    size: PropTypes.oneOf([
      'xs',
      's',
      'm',
    ]),
  }
);
