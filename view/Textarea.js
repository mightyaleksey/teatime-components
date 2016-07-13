'use strict';

const { Component, PropTypes } = require('react');
const { bind, sanitizeProps } = require('../tool/component');
const { noop } = require('../tool/func');
const { styleName } = require('../tool/className');
const React = require('react');

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
    return (
      <textarea
        {...sanitizeProps(['styles', 'styleName'], this.props)}
        className={styleName(this.props)}
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
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Textarea;
