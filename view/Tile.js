'use strict';

const { Component, PropTypes } = require('react');
const { bind, composition } = require('../tools/func');
const React = require('react');

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
        {...this.props}
        className={composition(this.props)}
        onClick={this.onClick}
        style={{backgroundColor: this.props.color}}/>
    );
  }
}

Tile.defaultProps = {
  styleName: 'item',
};

Tile.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  styleName: PropTypes.string,
};

module.exports = Tile;
