'use strict';

const { Component, PropTypes } = require('react');
const { composition } = require('../tools/func');
const React = require('react');

class Spin extends Component {
  render() {
    return (
      <span {...this.props} className={composition(this.props)}/>
    );
  }
}

Spin.defaultProps = {
  styleName: 'control',
  styles: {},
};

Spin.propTypes = {
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = Spin;
