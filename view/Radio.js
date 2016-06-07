'use strict';

const { Component, PropTypes } = require('react');
const { bind, findIndexByValueProp, noop } = require('../tools/func');
const { generateId, isUnique, mapKey, mapKeyBasedOnPos } = require('../tools/identity');
const Check = require('./Check');
const React = require('react');
const cssModules = require('react-css-modules');

class Radio extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;
    this.updateKeyMapper(props.options);

    const value = props.value || props.defaultValue;

    this.state = {
      prefix: generateId(),
      selected: findIndexByValueProp(props.options, value),
    };

    bind(this, 'onChange');
  }

  componentWillReceiveProps({ options, value }) {
    if (this.controlled) {
      this.setState({selected: findIndexByValueProp(options, value)});
    }

    if (this.props.options !== options) {
      this.updateKeyMapper(options);
    }
  }

  onChange(e, _, tc) {
    if (!this.controlled) {
      this.setState({selected: tc});
    }

    this.props.onChange(e, {value: this.props.options[tc].value});
  }

  updateKeyMapper(options) {
    this.mapKey = !isUnique(options)
      ? mapKeyBasedOnPos
      : mapKey;
  }

  render() {
    return (
      <div
        styleName='container'
        {...this.props}
        onChange={undefined}>
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    const { disabled, name, options, styles } = this.props;
    const { prefix, selected } = this.state;

    return options.map(({ text, value }, i) => (
      <Check
        disabled={disabled}
        checked={selected === i}
        key={this.mapKey(prefix, value, i)}
        name={name}
        onChange={this.onChange}
        styles={styles}
        tc={i}
        type='radio'
        value={value}>
        {text}
      </Check>
    ));
  }
}

Radio.defaultProps = {
  onChange: noop,
  styles: {},
};

Radio.propTypes = {
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
  value: PropTypes.string,
};

module.exports = cssModules(Radio);
