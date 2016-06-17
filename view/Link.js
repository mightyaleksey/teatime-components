'use strict';

const { Component, PropTypes } = require('react');
const { composition } = require('../tools/func');
const React = require('react');

class Link extends Component {
  render() {
    return (
      <a {...this.props} className={composition(this.props)}/>
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
