'use strict';

const { Textarea: BaseTextarea } = require('../view/textarea');
const { PropTypes } = require('react');
const { createTag } = require('../');

const styles = {
  'm': require('../style/textarea/textarea-m.css'),
  'l': require('../style/textarea/textarea-l.css'),
};

function Textarea({ size, ...o }) {
  return BaseTextarea({...o, styles: styles[size]});
}

Textarea.defaultProps = {
  size: 'm',
};

Textarea.propTypes = {
  cols: PropTypes.number,
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
  onScroll: PropTypes.func,
  onSelect: PropTypes.func,
  onSubmit: PropTypes.func,
  onWheel: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  size: PropTypes.oneOf([
    'm',
    'l',
  ]),
  value: PropTypes.string,
};

module.exports = Textarea;
module.exports.Textarea = createTag(module.exports);
