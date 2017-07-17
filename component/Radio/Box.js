/* @flow */
import {genericId} from '../../lib/identity';
import React, {Component} from 'react';

type Props = {
  checked?: boolean,
  children?: string,
  defaultChecked?: boolean,
  disabled: boolean,
  hasLabel: boolean,
  id?: string,
  name: string,
  onBlur?: (event: SyntheticEvent) => void,
  onChange: (event: SyntheticInputEvent, value: string) => void,
  onFocus?: (event: SyntheticFocusEvent) => void,
  style?: Object,
  styles: {
    box: string,
    native: string,
    control: string,
    label?: string,
  },
  type: 'checkbox' | 'radio',
  value: string,
};

type InputProps = {
  checked?: boolean,
  className: string,
  defaultChecked?: boolean,
  disabled: boolean,
  id: string,
  name: string,
  onChange: (e: SyntheticInputEvent) => void,
  type: 'checkbox' | 'radio',
  value: string,
};

type ControlProps = {
  children: any,
  className: string,
  htmlFor: string,
};

type LabelProps = {
  children: any,
  className?: string,
  htmlFor: string,
} | null;

class Box extends Component {
  props: Props

  css: {
    box: string,
    native: string,
    control: string,
    label?: string,
  }

  id: string

  constructor(props: Props) {
    super(props);

    this.css = props.styles;
    this.id = props.id || genericId();

    (this:any)._onChange = this._onChange.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.css = nextProps.styles;
    if (nextProps.id) this.id = nextProps.id || genericId();
  }

  _computeInputProps(): InputProps {
    const {
      checked,
      defaultChecked,
      disabled,
      name,
      onBlur,
      onFocus,
      type,
      value,
    } = this.props;
    const {css, id} = this;

    return {
      checked,
      className: css.native,
      defaultChecked,
      disabled,
      id,
      name,
      onBlur,
      onChange: this._onChange,
      onFocus,
      type,
      value,
    };
  }

  _computeControlProps(): ControlProps {
    const {children, hasLabel, type} = this.props;
    const {css, id} = this;

    return {
      children: !hasLabel
        ? children
        : null,
      className: css.control,
      htmlFor: id,
    };
  }

  _computeLabelProps(): LabelProps {
    const {children, hasLabel, type} = this.props;
    const {css, id} = this;

    return {
      children: hasLabel && children
        ? children
        : null,
      className: css.label,
      htmlFor: id,
    };
  }

  _onChange(e: SyntheticInputEvent) {
    this.props.onChange(e, this.props.value);
  }

  render() {
    const {style} = this.props;
    const {css} = this;

    const inputProps = this._computeInputProps();
    const controlProps = this._computeControlProps();
    const labelProps = this._computeLabelProps();

    return (
      <span className={css.box} style={style}>
        {this.renderInput(inputProps)}
        {this.renderControl(controlProps)}
        {this.renderLabel(labelProps)}
      </span>
    );
  }

  renderInput(inputProps: InputProps) {
    return (
      <input {...inputProps}/>
    );
  }

  renderControl(controlProps: ControlProps) {
    return (
      <label {...controlProps}/>
    );
  }

  renderLabel(labelProps: LabelProps) {
    if (!labelProps) return null;

    return (
      <label {...labelProps}/>
    );
  }
}

export default Box;
