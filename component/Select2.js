'use strict';

const { PropTypes } = require('react');
const Select = require('../view/Select2');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
  Select,
  (styles, { size }) => ({
    styles: styles[size],
  }),
  {
    xs: require('../style/select2/select-xs.css'),
    s: require('../style/select2/select-s.css'),
    m: require('../style/select2/select-m.css'),
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
