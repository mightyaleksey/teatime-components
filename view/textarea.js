'use strict';

const { PropTypes } = require('react');
const { createTag, textarea } = require('../');
const cssModules = require('react-css-modules');

function Textarea(props) {
  return textarea({...props, styleName: 'control'});
}

Textarea.defaultProps = {
  rows: 3,
  styles: {},
};

Textarea.propTypes = {
  cols: PropTypes.number,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onPaste: PropTypes.func,
  onScroll: PropTypes.func,
  onSelect: PropTypes.func,
  onWheel: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = cssModules(Textarea);
module.exports.Textarea = createTag(module.exports);
