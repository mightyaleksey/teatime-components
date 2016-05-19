'use strict';

const { PropTypes } = require('react');
const { createTag, input } = require('../');
const cssModules = require('react-css-modules');

function Input(props) {
  return input({...props, styleName: 'control'});
}

Input.defaultProps = {
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
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = cssModules(Input);
module.exports.Input = createTag(module.exports);
