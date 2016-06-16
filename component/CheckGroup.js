'use strict';

const { PropTypes } = require('react');
const CheckGroup = require('../view/CheckGroup');
const StyleComponent = require('../mixin/StyleComponent');

module.exports = StyleComponent(
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
