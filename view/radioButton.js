'use strict';

const { PropTypes } = require('react');
const { createTag, input, label, span } = require('../');
const { generateId } = require('../tools/identity');
const cssModules = require('react-css-modules');

function RadioButton({ children, id = generateId(), ...o }) {
  return span({styleName: 'container'},
    input({...o, id, styleName: 'native', type: 'radio'}),
    label({htmlFor: id, styleName: 'control'}, children)
  );
}

RadioButton.defaultProps = {
  styles: {},
};

RadioButton.propTypes = {
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = cssModules(RadioButton);
module.exports.RadioButton = createTag(module.exports);
