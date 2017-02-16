'use strict';

const {Component, PropTypes} = require('react');
const {genericId} = require('../lib/identity');
const {isUndefined, noop} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || genericId(),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: isUndefined(nextProps.id) ? this.state.id : nextProps.id,
    });
  }

  _onChange = e => {
    const {checked, value} = e.target;

    this.props.onChange(e, {checked, value}, this.props.position);
  }

  render() {
    const {
      checked,
      children,
      className,
      defaultValue,
      disabled,
      hasLabel,
      label,
      name,
      styles,
      type,
      value,
    } = this.props;

    const {
      control,
      label: labelStyle,
      native,
      wrapper,
    } = styles;

    const id = this.state.id;
    const text = isUndefined(label)
      ? children
      : label;

    return (
      <span
        className={cc(wrapper, className)}>
        {this.renderInput({
          checked,
          className: native,
          defaultValue,
          disabled,
          id,
          name,
          onChange: this._onChange,
          type,
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

Box.defaultProps = {
  hasLabel: true,
  onChange: noop,
  type: 'checkbox',
};

Box.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hasLabel: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  position: PropTypes.number,
  styles: PropTypes.object,
  type: PropTypes.oneOf([
    'checkbox',
    'radio',
  ]),
  value: PropTypes.string,
};

module.exports = Box;
