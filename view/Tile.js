'use strict';

const { Component, PropTypes } = require('react');
const { bind } = require('../tools/func');
const React = require('react');
const cx = require('classnames');

class Tile extends Component {
  constructor(props) {
    super(props);

    bind(this, 'onClick');
  }

  onClick(e) {
    this.props.onClick(e, this.props.color);
  }

  render() {
    const { className, styleName, styles, ...o } = this.props;

    return (
      <div
        {...o}
        className={cx(className, styles[styleName])}
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
