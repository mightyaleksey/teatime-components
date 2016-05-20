'use strict';

const { Input: BaseInput } = require('../view/input');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  's': require('../style/input/input-s.css'),
  'm': require('../style/input/input-m.css'),
  'l': require('../style/input/input-l.css'),
};

function Input({ size, styles, ...o }) {
  return BaseInput({...o, styles: {
    ...baseStyles[size],
    ...styles,
  }});
}

Input.defaultProps = {
  size: 'm',
  styles: {},
};

Input.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
  ]),
  styles: PropTypes.object,
};

module.exports = Input;
module.exports.Input = createTag(module.exports);
