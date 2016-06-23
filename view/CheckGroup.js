'use strict';

const { Component, PropTypes } = require('react');
const { bind, hasValueProp } = require('../tool/component');
const { composition } = require('../tool/className');
const { generateId, hasUniqueValues, mapKey, mapKeyBasedOnPos } = require('../tool/identity');
const { isUndefined, mapRange, noop } = require('../tool/func');
const Check = require('./Check');
const React = require('react');
const warning = require('../tool/warning');

var didWarnForDefaultValue = false;

class CheckGroup extends Component {
  constructor(props) {
    super(props);

    bind(this, 'onChange');

    this.controlled = hasValueProp(props);

    if (process.env.NODE_ENV !== 'production' && this.controlled && !didWarnForDefaultValue) { // eslint-disable-line no-undef
      warning(isUndefined(props.defaultValue),
        'CheckGroup elements must be either controlled or uncontrolled ' +
        '(specify either the value prop, or the defaultValue prop, but not ' +
        'both). Decide between using a controlled or uncontrolled select ' +
        'element and remove one of these props. More info: ' +
        'https://fb.me/react-controlled-components');

      didWarnForDefaultValue = true;
    }

    this.updateKeyMapper(props.hasUniqValues, props.options);

    const value = this.controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      prefix: generateId(),
      values: mapValueToState(props.options, value || []),
    };
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
    this.mapKey = !(hasUniqValues && hasUniqueValues(options))
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
      result.push((
        <Check
          {...options[i]}
          disabled={globalDisabled || options[i].disabled}
          checked={values[i]}
          key={this.mapKey(prefix, options[i].value, i)}
          name={name}
          onChange={this.onChange}
          styles={styles}
          tc={i}/>
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
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  hasUniqValues: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onContextMenu: PropTypes.func,
  options: PropTypes.array.isRequired,
  styleName: PropTypes.string,
  styles: PropTypes.shape({
    column: PropTypes.string,
    container: PropTypes.string,
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    wrapper: PropTypes.string.isRequired,
  }),
  value: PropTypes.arrayOf(PropTypes.string),
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
  const selectedMap = {};

  var length = selected.length;
  while (length--) {
    selectedMap[selected[length]] = null;
  }

  return options.map(({ value }) => value in selectedMap);
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
