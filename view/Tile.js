'use strict';

const { PropTypes } = require('react');
const { bind } = require('../tool/component');
const React = require('react');
const Teatime = require('./Teatime');

class Tile extends Teatime {
  constructor(props) {
    super(props);

    bind(this, 'onClick');
  }

  onClick(e) {
    this.props.onClick(e, this.props.color);
  }

  render() {
    return (
      <div
        {...this.knownProps()}
        className={this.style('item')}
        onClick={this.onClick}
        style={{
          backgroundColor: this.props.color,
        }}/>
    );
  }
}

Tile.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

module.exports = Tile;
