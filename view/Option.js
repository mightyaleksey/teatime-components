'use strict';

const { Component, PropTypes } = require('react');
const { bind } = require('../tools/func');
const React = require('react');

class Option extends Component {
  constructor(props) {
    super(props);

    bind(this, [
      'onFocus',
      'onSelect',
    ]);
  }

  onFocus(e) {
    if (this.props.isFocused) return;
    this.props.onFocus(e, {value: this.props.value}, this.props.tc);
  }

  onSelect(e) {
    this.props.onSelect(e, {value: this.props.value}, this.props.tc);
  }

  render() {
    return (
      <span
        className={this.props.className}
        data-value={this.props.value}
        onClick={this.onSelect}
        onMouseEnter={this.onFocus}>
        {this.props.children}
      </span>
    );
  }
}

Option.propTypes = {
  isFocused: PropTypes.bool,
  onFocus: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  tc: PropTypes.any,
};

module.exports = Option;
