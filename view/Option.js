'use strict';

const {Component} = require('react');
const {noop} = require('../lib/dash');
const PropTypes = require('prop-types');
const React = require('react');

class Option extends Component {
  _onClick = e => {
    this.props.onClick(e, this.props.position);
  }

  _onFocus = e => {
    this.props.onFocus(e, this.props.position);
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
        onMouseEnter={this._onFocus}
        role='option'>
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
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  position: PropTypes.number,
  value: PropTypes.string,
};

module.exports = Option;
