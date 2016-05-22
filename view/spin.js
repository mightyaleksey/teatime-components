'use strict';

const { PropTypes } = require('react');
const { createTag, span } = require('../');
const cssModules = require('react-css-modules');

function Spin(props) {
  return span({...props, styleName: 'control'});
}

Spin.defaultProps = {
  styles: {},
};

Spin.propTypes = {
  styles: PropTypes.object,
};

module.exports = cssModules(Spin);
module.exports.Spin = createTag(module.exports);
