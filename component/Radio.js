'use strict';

const {Component, PropTypes} = require('react');
const {filterProps, genericName, isControlled} = require('../lib/util');
const {genericId} = require('../lib/identity');
const {isUndefined, map, noop} = require('../lib/dash');
const Box = require('../view/Box');
const React = require('react');
const cc = require('classnames');
const warn = require('../lib/warn');

const cssModules = {
  'button-l': require('../style/radio/radio-button-l.css'),
  'button-m': require('../style/radio/radio-button-m.css'),
  'button-s': require('../style/radio/radio-button-s.css'),
  'common-l': require('../style/radio/radio-common-l.css'),
  'common-m': require('../style/radio/radio-common-m.css'),
  'common-s': require('../style/radio/radio-common-s.css'),
};

let didWarnForRadioDefaultValue = false;

class Radio extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);

    if (process.env.NODE_ENV !== 'production')
      if (this._controlled && !isUndefined(props.defaultValue) && !didWarnForRadioDefaultValue) {
        didWarnForRadioDefaultValue = true;
        warn(true, 'defaultValue', 'Radio', 'radio');
      }

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      prefix: genericId(),
      value: isUndefined(value) ? null : value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this._controlled = isControlled(nextProps);

    this.setState({
      value: this._controlled
        ? nextProps.value
        : this.state.value,
    });
  }

  css = tokenName => genericName(this.props, tokenName)

  focus = noop

  _onChange = (e, {value}) => {
    if (!this._controlled) this.setState({value});
    this.props.onChange(e, {value});
  }

  computeOptions(options) {
    const {disabled, name, theme} = this.props;
    const {prefix, value} = this.state;

    const {css} = this;
    const styles = css();

    const hasLabel = theme === 'common';

    return map(option =>
      this.renderOption(option, {
        checked: option.value === value,
        disabled: option.disabled || disabled,
        hasLabel,
        key: `${prefix}${option.value}`,
        name,
        onChange: this._onChange,
        styles,
        type: 'radio',
      }), options);
  }

  render() {
    const {className, id, options} = this.props;
    const {css} = this;

    return (
      <div
        {...filterProps(this.props)}
        className={cc(css('container'), className)}
        id={id}
        onChange={void 0}>
        {this.computeOptions(options)}
      </div>
    );
  }

  renderOption(optionProps, genericProps) {
    return (
      <Box
        {...optionProps}
        {...genericProps}/>
    );
  }
}

Radio.defaultProps = {
  onChange: noop,
  size: 'm',
  styles: cssModules,
  theme: 'common',
};

Radio.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
  ]),
  styles: PropTypes.object,
  theme: PropTypes.oneOf([
    'button',
    'common',
  ]),
  value: PropTypes.any,
};

module.exports = Radio;
