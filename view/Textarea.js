'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const React = require('react');
const cx = require('classnames');

class Textarea extends Component {
  constructor(props) {
    super(props);

    bind(this, 'onChange');
  }

  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  onChange(e) {
    this.props.onChange(e, {value: e.target.value});
  }

  select() {
    if (this.refs.control) {
      this.refs.control.select();
    }
  }

  render() {
    const { className, styleName, styles, ...o } = this.props;

    return (
      <textarea
        {...o}
        className={cx(className, styles[styleName])}
        onChange={this.onChange}
        ref='control'/>
    );
  }
}

Textarea.defaultProps = {
  onChange: noop,
  rows: 3,
  styleName: 'control',
  styles: {},
};

Textarea.propTypes = {
  cols: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = Textarea;
