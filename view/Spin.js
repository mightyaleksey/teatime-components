'use strict';

const { PropTypes } = require('react');
const React = require('react');
const Teatime = require('./Teatime');

class Spin extends Teatime {
  render() {
    return (
      <span {...this.knownProps()} className={this.style('control')}/>
    );
  }
}

Spin.propTypes = {
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Spin;
