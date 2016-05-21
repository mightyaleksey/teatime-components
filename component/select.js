'use strict';

const { Select: BaseSelect } = require('../view/select');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  s: require('../style/select/select-s.css'),
  m: require('../style/select/select-m.css'),
  l: require('../style/select/select-l.css'),
};

const buttonClosedStyles = {
  s: require('../style/select/button-closed-s.css'),
  m: require('../style/select/button-closed-m.css'),
  l: require('../style/select/button-closed-l.css'),
};

const buttonOpenedStyles = {
  s: require('../style/select/button-opened-s.css'),
  m: require('../style/select/button-opened-m.css'),
  l: require('../style/select/button-opened-l.css'),
};

const optionStyles = {
  s: require('../style/select/option-s.css'),
  m: require('../style/select/option-m.css'),
  l: require('../style/select/option-l.css'),
};

function Select({ size, styles, ...o }) {
  return BaseSelect({...o, styles: {
    ...baseStyles[size],
    buttonClosed: buttonClosedStyles[size],
    buttonOpened: buttonOpenedStyles[size],
    option: optionStyles[size],
    ...styles,
  }});
}

Select.defaultProps = {
  size: 'm',
  styles: {},
};

Select.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
    'xl',
  ]),
  styles: PropTypes.object,
};

module.exports = Select;
module.exports.Select = createTag(module.exports);
