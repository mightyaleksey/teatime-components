'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const cx = require('classnames');

class Link extends Component {
  render() {
    const { className, styleName, styles, ...o } = this.props;

    return (
      <a {...o} className={cx(className, styles[styleName])}/>
    );
  }
}

Link.defaultProps = {
  styleName: 'control',
  styles: {},
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = Link;
