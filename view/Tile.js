'use strict';

const { Component, PropTypes } = require('react');
const { bind } = require('../tools/func');
const React = require('react');
const cssModules = require('react-css-modules');

class Tile extends Component {
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
        styleName='item'
        {...this.props}
        onClick={this.onClick}
        style={{backgroundColor: this.props.color}}/>
    );
  }
}

Tile.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

module.exports = cssModules(Tile);
