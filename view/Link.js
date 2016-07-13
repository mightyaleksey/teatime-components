'use strict';

const { Component, PropTypes } = require('react');
const { styleName } = require('../tool/className');
const { sanitizeProps } = require('../tool/component');
const React = require('react');

class Link extends Component {
  render() {
    return (
      <a
        {...sanitizeProps(['theme', 'styles', 'styleName'], ...this.props)}
        className={styleName(this.props)}/>
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
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Link;
