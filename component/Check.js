'use strict';

const {Component, PropTypes} = require('react');
const {genericId} = require('../lib/identity');
const {isUndefined, noop, omit, prop} = require('../lib/dash');
const {themes} = require('../lib/tool');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  s: require('../style/check/check-s.css'),
  m: require('../style/check/check-m.css'),
};

const omitProps = omit([
  'id',
  'onChange',
  'styles',
]);

class Check extends Component {
  constructor(props) {
    super(props);

    this._styles = themes(this.token);

    this.state = {
      id: props.id || genericId(),
      styles: this._styles(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: isUndefined(nextProps.id) ? this.state.id : nextProps.id,
      styles: this._styles(nextProps),
    });
  }

  focus() {
    if (!this._check) return;
    this._check.focus();
  }

  token = prop('size')

  _onChange = e => {
    const {checked, value} = e.target;
    this.props.onChange(e, {checked, value});
  }

  render() {
    const {
      checked,
      children,
      className,
      defaultChecked,
      disabled,
      hasLabel,
      label,
      name,
      value,
      ...other,
    } = this.props;

    const {
      control,
      label: labelStyle,
      native,
      wrapper,
    } = this.state.styles;

    const id = this.state.id;
    const text = isUndefined(label)
      ? children
      : label;

    return (
      <span
        {...omitProps(other)}
        className={cc(wrapper, className)}>
        {this.renderInput({
          checked,
          className: native,
          defaultChecked,
          disabled,
          id,
          name,
          onChange: this._onChange,
          ref: r => this._check = r,
          type: 'checkbox',
          value,
        })}
        {this.renderControl({
          children: hasLabel ? void 0 : text,
          className: control,
          htmlFor: id,
        })}
        {this.renderLabel({
          children: text,
          className: labelStyle,
          htmlFor: id,
        })}
      </span>
    );
  }

  renderInput(inputProps) {
    return (
      <input {...inputProps}/>
    );
  }

  renderControl(controlProps) {
    return (
      <label {...controlProps}/>
    );
  }

  renderLabel(labelProps) {
    if (!this.props.hasLabel) return null;

    return (
      <label {...labelProps}/>
    );
  }
}

Check.defaultProps = {
  hasLabel: true,
  onChange: noop,
  size: 's',
  styles: cssModules,
};

Check.propTypes = {
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    's',
    'm',
  ]),
  styles: PropTypes.object,
};

module.exports = Check;
