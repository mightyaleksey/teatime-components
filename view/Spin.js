'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const cssModules = require('react-css-modules');

class Spin extends Component {
  render() {
    return (
      <span styleName='control' {...this.props}/>
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
