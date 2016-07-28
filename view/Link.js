'use strict';

const { PropTypes } = require('react');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');

class Link extends TeatimeComponent {
  render() {
    return (
      <a {...this.knownProps()} className={this.style('control')}/>
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
