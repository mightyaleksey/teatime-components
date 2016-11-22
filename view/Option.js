'use strict';

const {Component, PropTypes} = require('react');
const {noop} = require('../lib/dash');
const React = require('react');

class Option extends Component {
  _onClick = e => {
    this.props.onClick(e);
  }

  _onFocus = e => {
    this.props.onFocus(e);
  }

  render() {
    const {
      children,
      className,
      value,
    } = this.props;

    return (
      <span
        className={className}
        data-value={value}
        onClick={this._onClick}
        onMouseEnter={this._onFocus}>
        {children}
      </span>
    );
  }
}

Option.defaultProps = {
  onClick: noop,
  onFocus: noop,
};

Option.propTypes = {
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

module.exports = Option;
