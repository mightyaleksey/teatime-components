'use strict';

const { Component, PropTypes } = require('react');
const { bind, indexOf } = require('../tool/component');
const { generateId, hasUniqueValues, mapKey, mapKeyBasedOnPos } = require('../tool/identity');
const { noop } = require('../tool/func');
const { styleName } = require('../tool/className');
const Check = require('./Check');
const React = require('react');

class Radio extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;
    this.updateKeyMapper(props.hasUniqValues, props.options);

    const value = props.value || props.defaultValue;

    this.state = {
      prefix: generateId(),
      selected: indexOf(props.options, value),
    };

    bind(this, 'onChange');
  }

  componentWillReceiveProps({ hasUniqValues, options, value }) {
    if (this.controlled) {
      this.setState({selected: indexOf(options, value)});
    }

    if (this.props.hasUniqValues !== hasUniqValues) {
      this.updateKeyMapper(hasUniqValues, options);
    }
  }

  onChange(e, _, tc) {
    if (!this.controlled) {
      this.setState({selected: tc});
    }

    this.props.onChange(e, {value: this.props.options[tc].value});
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
        className={styleName(this.props)}
        onChange={undefined}>
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    const { disabled: globalDisabled, name, options, styles } = this.props;
    const { prefix, selected } = this.state;

    return options.map((option, i) => (
      <Check
        {...option}
        disabled={globalDisabled || option.disabled}
        checked={selected === i}
        key={this.mapKey(prefix, option.value, i)}
        name={name}
        onChange={this.onChange}
        styles={styles}
        tc={i}
        type='radio'/>
    ));
  }
}

Radio.defaultProps = {
  hasUniqValues: true,
  onChange: noop,
  styleName: 'container',
  styles: {},
};

Radio.propTypes = {
  hasUniqValues: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  styleName: PropTypes.string,
  styles: PropTypes.shape({
    container: PropTypes.string,
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    wrapper: PropTypes.string.isRequired,
  }),
};

module.exports = Radio;
