'use strict';

const RadioButton = require('./RadioButton');
const React = require('react');
const { Component, PropTypes } = React;
const { bind, noop } = require('../tools/func');
const cssModules = require('react-css-modules');

class RadioGroup extends Component {
  constructor(props) {
    super(props);

    // @todo make assertion for single property
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
      <RadioButton
        checked={value === selected}
        disabled={disabled}
        key={`_${value}${i}`}
        name={name}
        onChange={this.onChange}
        styles={styles}
        value={value}
      >
        {text}
      </RadioButton>
    ));
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
