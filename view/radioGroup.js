'use strict';

const { Component, PropTypes } = require('react');
const { RadioButton } = require('./radioButton');
const { createTag, div } = require('../');
const cssModules = require('react-css-modules');

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.value || this.props.defaultValue,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({selected: e.target.value});
    typeof this.props.onChange === 'function' && this.props.onChange(e);
  }

  render() {
    return div({styleName: 'container'}, this.renderOptions());
  }

  renderOptions() {
    const { defaultValue, name, options, styles, ...o } = this.props; // eslint-disable-line no-unused-vars
    const { selected } = this.state;

    return options.map(({ text, value }, i) => RadioButton({
      ...o,
      checked: value === selected,
      key: `_${value}${i}`,
      name,
      onChange: this.onChange,
      styles: styles.option,
      value,
    }, text));
  }
}

RadioGroup.defaultProps = {
  styles: {},
};

RadioGroup.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onCompositionEnd: PropTypes.func,
  onCompositionStart: PropTypes.func,
  onCompositionUpdate: PropTypes.func,
  onContextMenu: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragExit: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchCancel: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  options: PropTypes.array.isRequired,
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = cssModules(RadioGroup);
module.exports.RadioGroup = createTag(module.exports);
