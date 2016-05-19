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
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onCompositionEnd: PropTypes.func,
  onCompositionStart: PropTypes.func,
  onCompositionUpdate: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onPaste: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
  ]),
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = Input;
module.exports.Input = createTag(module.exports);
