'use strict';

const { Component, PropTypes } = require('react');
const { bind } = require('../tools/func');
const React = require('react');
const cx = require('classnames');

class Option extends Component {
  constructor(props) {
    super(props);

    bind(this, [
      'onClick',
      'onFocus',
      'onMouseEnter',
      'onSelect',
    ]);
  }

  onClick(e) {
    this.onSelect(e);
  }

  onMouseEnter(e) {
    this.onFocus(e);
  }

  onFocus(e) {
    if (!this.props.isFocused) {
      this.props.onFocus(e, null, this.props.tc);
    }
  }

  onSelect(e) {
    this.props.onSelect(e, null, this.props.tc);
  }

  render() {
    const { checked, className, focused, label, styles, value, ...o } = this.props;

    const styleName = checked
      ? 'isCheckedItem'
      : 'item';

    return (
      <span
        {...o}
        children={label}
        className={cx(className, {[styles.isFocused]: focused}, styles[styleName])}
        data-value={value}
        onClick={this.onClick}
        onFocus={this.onFocus}
        onMouseEnter={this.onMouseEnter}
        onSelect={this.onFocus}/>
    );
  }
}

Option.defaultProps = {
  styles: {},
};

Option.propTypes = {
  checked: PropTypes.bool,
  onFocus: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  styles: PropTypes.object,
  tc: PropTypes.any,
  value: PropTypes.string.isRequired,
};

module.exports = Option;
