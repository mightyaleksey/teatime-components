'use strict';

const { Component, PropTypes } = require('react');
const { cssModules, isControlled, omit } = require('../lib/tool');
const { genericId } = require('../lib/identity');
const { isUndefined, map, noop } = require('../lib/dash');
const Box = require('../view/Box');
const React = require('react');
const cc = require('classnames');

const omitProps = omit([
  'onChange',
  'size',
  'theme',
  'styles',
]);
const themes = cssModules({
  'button-l': require('../style/radio/radio-button-l.css'),
  'button-m': require('../style/radio/radio-button-m.css'),
  'button-s': require('../style/radio/radio-button-s.css'),
  'button-xs': require('../style/radio/radio-button-xs.css'),
  'common-m': require('../style/radio/radio-common-m.css'),
  'common-s': require('../style/radio/radio-common-s.css'),
});

class Radio extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);
    this._styles = themes(this.token);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      prefix: genericId(),
      styles: this._styles(props),
      value: isUndefined(value) ? null : value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this._controlled = isControlled(nextProps);

    this.setState({
      styles: this._styles(nextProps),
      value: this._controlled
        ? nextProps.value
        : this.state.value,
    });
  }

  // token :: object -> string
  token({ size, theme }) {
    return `${theme}-${size}`;
  }

  _onChange = (e, data) => {
    if (!this._controlled) this.setState({value: data.value});
    this.props.onChange(e, data);
  }

  render() {
    const {
      className,
      disabled,
      name,
      options,
      theme,
      ...other,
    } = this.props;
    const {
      prefix,
      styles,
      value,
    } = this.state;

    const elements = map(option =>
      this.renderOption(option, {
        checked: option.value === value,
        disabled: option.disabled || disabled,
        hasLabel: theme === 'common',
        key: `${prefix}${option.value}`,
        name,
        onChange: this._onChange,
        styles,
        type: 'radio',
      }), options);

    return (
      <div
        {...omitProps(other)}
        className={cc(styles.container, className)}>
        {elements}
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
