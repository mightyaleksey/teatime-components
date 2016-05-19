'use strict';

const { PropTypes } = require('react');
const { createTag, button } = require('../');
const cssModules = require('react-css-modules');

function Button(props) {
  return button({...props, styleName: 'control'});
}

Button.defaultProps = {
  styles: {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  styles: PropTypes.object,
};

module.exports = cssModules(Button);
module.exports.Button = createTag(module.exports);
