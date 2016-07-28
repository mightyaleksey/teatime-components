'use strict';

const { PropTypes } = require('react');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');
const classNames = require('classnames');

class Spin extends TeatimeComponent {
  render() {
    return (
      <span
        {...this.knownProps()}
        className={classNames(this.style('control'), this.props.className)}/>
    );
  }
}

Spin.propTypes = {
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
  }),
};

module.exports = Spin;
