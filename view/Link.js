'use strict';

const { PropTypes } = require('react');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');
const classNames = require('classnames');

class Link extends TeatimeComponent {
  render() {
    return (
      <a
        {...this.knownProps()}
        className={classNames(this.style('control'), this.props.className)}/>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
  }),
};

module.exports = Link;
