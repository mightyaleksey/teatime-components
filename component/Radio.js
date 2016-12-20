'use strict';

const {Component, PropTypes} = require('react');
const {filterProps, genericName, isControlled} = require('../lib/util');
const {genericId} = require('../lib/identity');
const {isUndefined, map, noop} = require('../lib/dash');
const Box = require('../view/Box');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  'button-l': require('../style/radio/radio-button-l.css'),
  'button-m': require('../style/radio/radio-button-m.css'),
  'button-s': require('../style/radio/radio-button-s.css'),
  'button-xs': require('../style/radio/radio-button-xs.css'),
  'common-m': require('../style/radio/radio-common-m.css'),
  'common-s': require('../style/radio/radio-common-s.css'),
};

class Radio extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);

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
    const {className, options} = this.props;
    const {css} = this;

    return (
      <div
        {...filterProps(this.props)}
        className={cc(css('container'), className)}>
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
  size: 's',
  styles: cssModules,
  theme: 'common',
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
    'xs',
  ]),
  styles: PropTypes.object,
  theme: PropTypes.oneOf([
    'button',
    'common',
  ]),
};

module.exports = Radio;
