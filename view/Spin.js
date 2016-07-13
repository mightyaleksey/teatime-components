'use strict';

const { Component, PropTypes } = require('react');
const { styleName } = require('../tool/className');
const { sanitizeProps } = require('../tool/component');
const React = require('react');

class Spin extends Component {
  render() {
    return (
      <span
        {...sanitizeProps(['styles', 'styleName'], this.props)}
        className={styleName(this.props)}/>
    );
  }
}

Spin.defaultProps = {
  styleName: 'control',
  styles: {},
};

Spin.propTypes = {
  styleName: PropTypes.string,
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Spin;
