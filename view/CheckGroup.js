'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const { generateId, isUnique, mapKey, mapKeyBasedOnPos } = require('../tools/identity');
const Check = require('./Check');
const React = require('react');
const cssModules = require('react-css-modules');

class CheckGroup extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;
    this.updateKeyMapper(props.options);

    const value = props.value || props.defaultValue;

    this.state = {
      prefix: generateId(),
      values: mapValueToState(props.options, value || []),
    };

    bind(this, 'onChange');
  }

  componentWillReceiveProps({ options, value }) {
    if (this.controlled) {
      this.setState({values: mapValueToState(options, value)});
    }

    if (this.props.options !== options) {
      this.updateKeyMapper(options);
    }
  }

  onChange(e, { checked }, tc) {
    const values = updateValue(this.state.values, tc, checked);

    if (!this.controlled) {
      this.setState({values});
    }

    this.props.onChange(e, {
      value: mapStateToValue(this.props.options, values),
    });
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
    const { childClassName, disabled, name, options, styles } = this.props;
    const { prefix, values } = this.state;

    return options.map(({ text, value }, i) => (
      <Check
        className={childClassName}
        disabled={disabled}
        checked={values[i]}
        key={this.mapKey(prefix, value, i)}
        name={name}
        onChange={this.onChange}
        styles={styles}
        tc={i}
        value={value}>
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
  childClassName: PropTypes.string,
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

/**
 * @param  {object[]} options
 * @param  {boolean[]} values
 * @return {string[]}
 */
function mapStateToValue(options, values) {
  const selected = [];

  for (var i = 0; i < values.length; ++i) {
    if (!values[i]) {
      continue;
    }

    selected.push(options[i].value);
  }

  return selected;
}

/**
 * @param  {object[]} options
 * @param  {string[]} selected
 * @return {boolean[]}
 */
function mapValueToState(options, selected) {
  var length = selected.length;
  var i = 0;

  return options.map(({ value }) => {
    if (value === selected[i] && i < length) {
      i++;
      return true;
    }

    return false;
  });
}

/**
 * @param  {boolean[]} values
 * @param  {number} position
 * @param  {boolean} target
 * @return {boolean[]}
 */
function updateValue(values, position, target) {
  return values.map((value, i) => position !== i ? value : target);
}
