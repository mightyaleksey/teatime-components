'use strict';

const { Component, PropTypes } = require('react');
const { bind, findIndexByValueProp, noop } = require('../tools/func');
const { generateId, isUnique, mapKey, mapKeyBasedOnPos } = require('../tools/identity');
const RadioButton = require('./RadioButton');
const React = require('react');
const cx = require('classnames');

class RadioGroup extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;
    this.updateKeyMapper(props.options);

    const value = props.value || props.defaultValue;

    // @todo make assertion for single property
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

    this.props.onChange(e, _);
  }

  updateKeyMapper(options) {
    this.mapKey = !isUnique(options)
      ? mapKeyBasedOnPos
      : mapKey;
  }

  render() {
    const { className, styleName, styles, ...o } = this.props;

    return (
      <div
        {...o}
        className={cx(className, styles[styleName])}
        onChange={undefined}>
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    const { disabled, name, options, styles } = this.props;
    const { prefix, selected } = this.state;

    return options.map(({ text, value }, i) => (
      <RadioButton
        checked={selected === i}
        disabled={disabled}
        key={this.mapKey(prefix, value, i)}
        name={name}
        onChange={this.onChange}
        styles={styles}
        tc={i}
        value={value}>
        {text}
      </RadioButton>
    ));
  }
}

RadioGroup.defaultProps = {
  onChange: noop,
  styleName: 'container',
  styles: {},
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = RadioGroup;
