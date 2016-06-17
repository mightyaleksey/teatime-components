'use strict';

const { Component, PropTypes } = require('react');
const { bind, composition, findIndexByValueProp, noop } = require('../tools/func');
const { generateId, isUnique, mapKey, mapKeyBasedOnPos } = require('../tools/identity');
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
      selected: findIndexByValueProp(props.options, value),
    };

    bind(this, 'onChange');
  }

  componentWillReceiveProps({ hasUniqValues, options, value }) {
    if (this.controlled) {
      this.setState({selected: findIndexByValueProp(options, value)});
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
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    const { disabled, name, options, styles } = this.props;
    const { prefix, selected } = this.state;

    return options.map(({ className, text, value }, i) => (
      <Check
        className={className}
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
  styles: PropTypes.object,
};

module.exports = Radio;
