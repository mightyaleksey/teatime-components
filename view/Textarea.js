'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const cssModules = require('react-css-modules');

class Textarea extends Component {
  render() {
    return (
      <textarea {...this.props} styleName='control'/>
    );
  }
}

Textarea.defaultProps = {
  rows: 3,
  styles: {},
};

Textarea.propTypes = {
  cols: PropTypes.number,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onPaste: PropTypes.func,
  onScroll: PropTypes.func,
  onSelect: PropTypes.func,
  onWheel: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = cssModules(Textarea);
