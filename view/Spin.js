'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const cx = require('classnames');

class Spin extends Component {
  render() {
    const { className, styleName, styles, ...o } = this.props;

    return (
      <span {...o} className={cx(className, styles[styleName])}/>
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
