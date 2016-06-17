'use strict';

const { Component, PropTypes } = require('react');
const { bind, composition, mapRange, noop } = require('../tools/func');
const { generateId, isUnique, mapKey, mapKeyBasedOnPos } = require('../tools/identity');
const Check = require('./Check');
const React = require('react');

class CheckGroup extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;
    this.updateKeyMapper(props.hasUniqValues, props.options);

    const value = props.value || props.defaultValue;

    this.state = {
      prefix: generateId(),
      values: mapValueToState(props.options, value || []),
    };

    bind(this, 'onChange');
  }

  componentWillReceiveProps({ hasUniqValues, options, value }) {
    if (this.controlled) {
      this.setState({values: mapValueToState(options, value)});
    }

    if (this.props.hasUniqValues !== hasUniqValues) {
      this.updateKeyMapper(hasUniqValues, options);
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

  /**
   * @param {boolean} hasUniqValues
   * @param {object[]} options
   */
  updateKeyMapper(hasUniqValues, options) {
    this.mapKey = !(hasUniqValues && isUnique(options))
      ? mapKeyBasedOnPos
      : mapKey;
  }

  render() {
    return (
      <div
        {...this.props}
        className={composition(this.props)}
        onChange={undefined}>
        {this.renderColumns()}
      </div>
    );
  }

  renderColumns() {
    const { cols, styles } = this.props;
    const { prefix } = this.state;
    const rCols = Math.max(cols || 0, 1);

    if (rCols === 1) {
      return this.renderOptions(0, rCols);
    }

    return mapRange(step => (
      <div
        className={styles.column}
        key={mapKeyBasedOnPos(prefix, '_', step)}>
        {this.renderOptions(step, rCols)}
      </div>
    ), rCols);
  }

  /**
   * @param  {number} start
   * @param  {number} step
   * @return {component[]}
   */
  renderOptions(start, step) {
    const { disabled: globalDisabled, name, options, styles } = this.props;
    const { prefix, values } = this.state;

    const result = [];

    for (var i = start; i < options.length; i += step) {
      const { className, disabled, text, value } = options[i];

      result.push((
        <Check
          className={className}
          disabled={globalDisabled || disabled}
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

    return result;
  }
}

CheckGroup.defaultProps = {
  hasUniqValues: true,
  onChange: noop,
  styleName: 'container',
  styles: {},
};

CheckGroup.propTypes = {
  cols: PropTypes.number,
  hasUniqValues: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onContextMenu: PropTypes.func,
  options: PropTypes.array.isRequired,
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = CheckGroup;

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
