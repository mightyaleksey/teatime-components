'use strict';

const { Check } = require('./check');
const { Component, PropTypes } = require('react');
const { createTag, div } = require('../');
const { bind, noop } = require('../tools/func');
const cssModules = require('react-css-modules');

class CheckGroup extends Component {
  constructor(props) {
    super(props);

    const value = this.props.value || this.props.defaultValue;
    this.state = {
      selected: value
        ? [...value]
        : [],
    };

    bind(this, 'onChange');
  }

  onChange(e) {
    const { checked, value } = e.target;
    const { selected } = this.state;
    const newState = checked
      ? selected.concat(value)
      : selected.filter(stored => stored !== value);

    this.setState({selected: newState});
    this.props.onChange(e, newState);
  }

  render() {
    return div({styleName: 'container'}, this.renderOptions());
  }

  renderOptions() {
    const { defaultValue, disabled, options, styles, ...o } = this.props; // eslint-disable-line no-unused-vars
    const { selected } = this.state;

    return options.map(({ text, value }, i) => Check({
      ...o,
      checked: selected.indexOf(value) > -1,
      disabled,
      key: `_${value}${i}`,
      onChange: this.onChange,
      styles: styles.option,
      value,
    }, text));
  }
}

CheckGroup.defaultProps = {
  onChange: noop,
  styles: {},
};

CheckGroup.propTypes = {
  defaultValue: PropTypes.array,
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
  value: PropTypes.array,
};

module.exports = cssModules(CheckGroup);
module.exports.CheckGroup = createTag(module.exports);
