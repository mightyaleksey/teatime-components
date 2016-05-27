'use strict';

const Check = require('./Check');
const React = require('react');
const { Component, PropTypes } = React;
const { bind, noop } = require('../tools/func');
const cssModules = require('react-css-modules');

class CheckGroup extends Component {
  constructor(props) {
    super(props);

    // @todo make assertion for one prop usage
    const value = this.props.value || this.props.defaultValue;

    this.state = {
      selected: value
        ? [...value] // @todo deep copy
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
    this.props.onChange(e, {value: newState});
  }

  render() {
    const { onChange, ...o } = this.props; // eslint-disable-line no-unused-vars

    return (
      <div {...o} styleName='container'>{this.renderOptions()}</div>
    );
  }

  renderOptions() {
    const {
      defaultValue, // eslint-disable-line no-unused-vars
      disabled,
      name,
      options,
      styles,
    } = this.props;
    const { selected } = this.state;

    return options.map(({ text, value }, i) => (
      <Check
        checked={selected.indexOf(value) > -1}
        disabled={disabled}
        key={`_${value}${i}`}
        name={name}
        onChange={this.onChange}
        styles={styles}
        value={value}
      >
        {text}
      </Check>
    ));
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
