'use strict';

const { PropTypes } = require('react');
const Tooltip = require('../view/Tooltip');
const simplify = require('../mixin/simplify');

module.exports = simplify(
  Tooltip,
  (styles, { direction }) => ({
    styleName: 'control',
    styles: styles[`${direction}-m`],
  }),
  {
    'bottom-m': require('../style/tooltip/tooltip-bottom-m.css'),
    'left-m': require('../style/tooltip/tooltip-left-m.css'),
    'right-m': require('../style/tooltip/tooltip-right-m.css'),
    'top-m': require('../style/tooltip/tooltip-top-m.css'),
  },
  {
    direction: 'right',
    size: 'm',
  },
  {
    direction: PropTypes.oneOf([
      'bottom',
      'left',
      'right',
      'top',
    ]),
  }
);
