'use strict';

const { Button: BaseButton } = require('../view/button');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  'action-s': require('../style/button/button-action-s.css'),
  'action-m': require('../style/button/button-action-m.css'),
  'action-l': require('../style/button/button-action-l.css'),
  'action-xl': require('../style/button/button-action-xl.css'),
  'normal-s': require('../style/button/button-normal-s.css'),
  'normal-m': require('../style/button/button-normal-m.css'),
  'normal-l': require('../style/button/button-normal-l.css'),
  'normal-xl': require('../style/button/button-normal-xl.css'),
};

function Button({ size, styles, theme, ...o }) {
  return BaseButton({...o, styles: {
    ...baseStyles[`${theme}-${size}`],
    ...styles,
  }});
}

Button.defaultProps = {
  size: 'm',
  styles: {},
  theme: 'normal',
};

Button.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
    'xl',
  ]),
  styles: PropTypes.object,
  theme: PropTypes.oneOf([
    'action',
    'normal',
  ]),
};

module.exports = Button;
module.exports.Button = createTag(module.exports);
