'use strict';

const { PropTypes } = require('react');
const { bind, hasValueProp, indexOf } = require('../tool/component');
const { generateId, hasUniqueValues, mapKey, mapKeyBasedOnPos } = require('../tool/identity');
const { isUndefined, noop } = require('../tool/func');
const RadioButton = require('./RadioButton');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');
const warning = require('../tool/warning');

var didWarnForDefaultValue = false;

class RadioGroup extends TeatimeComponent {
  constructor(props) {
    super(props);

    bind(this, 'onChange');

    this.controlled = hasValueProp(props);

    if (process.env.NODE_ENV !== 'production' && this.controlled && !didWarnForDefaultValue) { // eslint-disable-line no-undef
      warning(isUndefined(props.defaultValue),
        'RadioGroup elements must be either controlled or uncontrolled ' +
        '(specify either the value prop, or the defaultValue prop, but not ' +
        'both). Decide between using a controlled or uncontrolled radioGroup ' +
        'element and remove one of these props. More info: ' +
        'https://fb.me/react-controlled-components');

      didWarnForDefaultValue = true;
    }

    this.updateKeyMapper(props.hasUniqValues, props.options);

    const value = this.controlled
      ? props.value
      : props.defaultValue;

    // @todo make assertion for single property
    this.state = {
      prefix: generateId(),
      selected: indexOf(props.options, value),
    };
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

    this.props.onChange(e, _);
  }

  /**
   * @param  {boolean} hasUniqValues
   * @param  {object[]} options
   * @return {void}
   */
  updateKeyMapper(hasUniqValues, options) {
    this.mapKey = !(hasUniqValues && hasUniqueValues(options))
      ? mapKeyBasedOnPos
      : mapKey;
  }

  render() {
    return (
      <div
        {...this.knownProps()}
        className={this.style('container')}
        onChange={undefined}>
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    const { disabled: globalDisabled, name, options } = this.props;
    const { prefix, selected } = this.state;

    return options.map((option, i) => (
      <RadioButton
        {...option}
        checked={selected === i}
        disabled={globalDisabled || option.disabled}
        key={this.mapKey(prefix, option.value, i)}
        name={name}
        onChange={this.onChange}
        styles={this.styles()}
        tc={i}/>
    ));
  }
}

RadioGroup.defaultProps = {
  hasUniqValues: true,
  onChange: noop,
};

RadioGroup.propTypes = {
  defaultValue: PropTypes.string,
  hasUniqValues: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  styles: PropTypes.shape({
    container: PropTypes.string,
    control: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    wrapper: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
};

RadioGroup.unwantedProps = [
  'hasUniqValues',
  'options',
  ...TeatimeComponent.unwantedProps,
];

module.exports = RadioGroup;
