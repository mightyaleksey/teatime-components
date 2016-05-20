'use strict';

const { Textarea: BaseTextarea } = require('../view/textarea');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  'm': require('../style/textarea/textarea-m.css'),
  'l': require('../style/textarea/textarea-l.css'),
};

function Textarea({ size, styles, ...o }) {
  return BaseTextarea({...o, styles: {
    ...baseStyles[size],
    ...styles,
  }});
}

Textarea.defaultProps = {
  size: 'm',
  styles: {},
};

Textarea.propTypes = {
  size: PropTypes.oneOf([
    'm',
    'l',
  ]),
  styles: PropTypes.object,
};

module.exports = Textarea;
module.exports.Textarea = createTag(module.exports);
