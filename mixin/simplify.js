'use strict';

const React = require('react');
const { Component } = React;

module.exports = function simplify(Target, getter, styles, defaults, types) {
  class Simplified extends Component {
    render() {
      return (
        <Target {...this.props} {...getter(styles, this.props)}/>
      );
    }
  }

  Simplified.defaultProps = defaults;
  Simplified.propTypes = types;

  return Simplified;
};
