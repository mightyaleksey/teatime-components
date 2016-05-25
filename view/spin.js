'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const cssModules = require('react-css-modules');

class Spin extends Component {
  render() {
    return (
      <span {...this.props} styleName='control'/>
    );
  }
}

Spin.defaultProps = {
  styles: {},
};

Spin.propTypes = {
  styles: PropTypes.object,
};

module.exports = cssModules(Spin);
