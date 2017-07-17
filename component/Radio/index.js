/* @flow */
import {isControlled, map, noop} from '../../lib/util';
import Box from './Box';
import React, {Component} from 'react';
import classNames from 'classnames';

import radioButtonLarge from './radio-button-large.css';
import radioButtonMedium from './radio-button-medium.css';
import radioButtonSmall from './radio-button-small.css';
import radioCommonLarge from './radio-common-large.css';
import radioCommonMedium from './radio-common-medium.css';
import radioCommonSmall from './radio-common-small.css';

type Item = {
  label: string,
  value: string,
};

type Props = {
  className?: string,
  defaultValue: ?string,
  disabled: boolean,
  id?: string,
  name: string,
  onChange: (event: SyntheticInputEvent, eventData: {name: string, value: string}) => void,
  options: Array<Item>,
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  theme: 'button' | 'common',
  value: ?string,
};

type ItemProps = {
  checked: boolean,
  children: string,
  disabled: boolean,
  hasLabel: boolean,
  key: string,
  name: string,
  onChange: (e: SyntheticInputEvent, value: string) => void,
  styles: {
    box: string,
    native: string,
    control: string,
    label?: string,
  },
  type: 'radio',
  value: string,
};

const cssModules = {
  'button-l': radioButtonLarge,
  'button-m': radioButtonMedium,
  'button-s': radioButtonSmall,
  'common-l': radioCommonLarge,
  'common-m': radioCommonMedium,
  'common-s': radioCommonSmall,
};

class Radio extends Component {
  props: Props

  static defaultProps: {
    disabled: boolean,
    onChange: Function,
    size: 'l' | 'm' | 's',
    theme: 'button' | 'common',
  }

  state: {
    value: ?string,
  }

  css: {
    radio: string,
    box: string,
    native: string,
    control: string,
    label: string,
  }

  _controlled: boolean

  constructor(props: Props) {
    super(props);

    this._controlled = isControlled(props);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      value,
    };

    this.css = props.styles || cssModules[props.theme + '-' + props.size];

    (this:any)._onChange = this._onChange.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this._controlled = isControlled(nextProps);

    this.setState({
      value: this._controlled
        ? nextProps.value
        : this.state.value,
    });

    this.css = nextProps.styles || cssModules[nextProps.theme + '-' + nextProps.size];
  }

  _computeItems(items: Array<Item>) {
    const {disabled, name, theme} = this.props;
    const {value} = this.state;
    const {css} = this;

    const hasLabel = theme === 'common';

    return map(item => this.renderItem({
      checked: item.value === value,
      children: item.label,
      className: css.box,
      classNameForInput: css.native,
      classNameForControl: css.control,
      classNameForLabel: css.label,
      disabled: item.disabled || disabled,
      hasLabel,
      key: item.value,
      name,
      onChange: this._onChange,
      styles: {
        box: css.box,
        native: css.native,
        control: css.control,
        label: css.label,
      },
      type: 'radio',
      value: item.value,
    }), items);
  }

  _onChange(e: SyntheticInputEvent, value: string) {
    const {name, onChange} = this.props;
    // workaround for https://github.com/facebook/react/issues/9893
    const isSameValue = this.state.value === value;

    if (!isSameValue && !this._controlled) this.setState({value});
    if (!isSameValue) onChange(e, {name, value});
  }

  render() {
    const {className, id, options, style} = this.props; // todo pass id to the first child?
    const {css} = this;

    const items = this._computeItems(options);

    return (
      <div
        className={classNames(css.radio, className)}
        id={id}
        style={style}>
        {items}
      </div>
    );
  }

  renderItem(itemProps: ItemProps) {
    return (
      <Box {...itemProps}/>
    );
  }
}

Radio.defaultProps = {
  disabled: false,
  onChange: noop,
  size: 'm',
  theme: 'common',
};

export default Radio;
