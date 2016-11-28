'use strict';

const {Component, PropTypes} = require('react');
const {cssColorValue} = require('../lib/color');
const {noop} = require('../lib/dash');
const React = require('react');

class Tile extends Component {
  _onClick = e => {
    this.props.onClick(e, this.props.color);
  }

  render() {
    const {
      className,
      color,
    } = this.props;

    return (
      <i
        className={className}
        onClick={this._onClick}
        style={{
          backgroundColor: cssColorValue(color),
        }}/>
    );
  }
}

Tile.defaultProps = {
  onClick: noop,
};

Tile.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

module.exports = Tile;
