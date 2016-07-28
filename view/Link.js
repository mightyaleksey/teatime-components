'use strict';

const { PropTypes } = require('react');
const React = require('react');
const Teatime = require('./Teatime');

class Link extends Teatime {
  render() {
    return (
      <a {...this.knownProps()} className={this.style('control')}/>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Link;
