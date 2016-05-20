'use strict';

const { Component, PropTypes } = require('react');
const { RadioButton } = require('./radioButton');
const { createTag, div } = require('../');
const { bind, noop } = require('../tools/func');
const cssModules = require('react-css-modules');

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.value || this.props.defaultValue || '',
    };

    bind(this, 'onChange');
  }

  onChange(e) {
    if (e.target.value === this.state.selected) {
      return;
    }

    this.setState({selected: e.target.value});
    this.props.onChange(e);
  }

  render() {
    return div({styleName: 'container'}, this.renderOptions());
  }

  renderOptions() {
    const { defaultValue, disabled, name, options, styles, ...o } = this.props; // eslint-disable-line no-unused-vars
    const { selected } = this.state;

    return options.map(({ text, value }, i) => RadioButton({
      ...o,
      checked: value === selected,
      disabled,
      key: `_${value}${i}`,
      name,
      onChange: this.onChange,
      styles: styles.option,
      value,
    }, text));
  }
}

RadioGroup.defaultProps = {
  onChange: noop,
  styles: {},
};

RadioGroup.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onDoubleClick: PropTypes.func,
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
