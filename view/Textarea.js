'use strict';

const { PropTypes } = require('react');
const { bind } = require('../tool/component');
const { noop } = require('../tool/func');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');

class Textarea extends TeatimeComponent {
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
        {...this.knownProps()}
        className={this.style('control')}
        onChange={this.onChange}
        ref='control'/>
    );
  }
}

Textarea.defaultProps = {
  onChange: noop,
  rows: 3,
};

Textarea.propTypes = {
  cols: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
  }),
};

module.exports = Textarea;
