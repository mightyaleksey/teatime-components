'use strict';

const { Input: BaseInput } = require('../view/input');
const { PropTypes } = require('react');
const { createTag } = require('../');

const styles = {
  's': require('../style/input/input-s.css'),
  'm': require('../style/input/input-m.css'),
  'l': require('../style/input/input-l.css'),
};

function Input({ size, ...o }) {
  return BaseInput({...o, styles: styles[size]});
}

Input.defaultProps = {
  size: 'm',
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
  value: PropTypes.string,
};

module.exports = Input;
module.exports.Input = createTag(module.exports);
