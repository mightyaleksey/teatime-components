/* @flow */
import {isControlled, map, noop} from '../../lib/util';
import Color from './Color';
import React, {Component} from 'react';
import classNames from 'classnames';

import colorPickerLarge from './color-picker-large.css';
import colorPickerMedium from './color-picker-medium.css';
import colorPickerSmall from './color-picker-small.css';

type Props = {
  autoFocus: boolean,
  className?: string,
  defaultValue?: string,
  direction: 'bottom' | 'top',
  disabled: boolean,
  id?: string,
  name: string,
  onBlur: (event: SyntheticEvent) => void,
  onChange: (event: SyntheticEvent, eventData: {name: string, value: string}) => void,
  onFocus: (event: SyntheticFocusEvent) => void,
  palette: Array<string>,
  placeholder?: string,
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  value?: string,
};

type SwatchProps = {
  className: string,
  disabled?: boolean,
  onClick: Function,
  style: Object,
};

type ClearProps = {
  className: string,
  disabled?: boolean,
  onClick: Function,
} | null;

type InputProps = {
  className: string,
  disabled: boolean,
  onChange: (e: SyntheticInputEvent) => void,
  ref: Function,
};

type MenuProps = {
  children: any,
  className: string,
};

type ItemProps = {
  className: string,
  onClick: Function,
  value: string,
};

const cssModules = {
  l: colorPickerLarge,
  m: colorPickerMedium,
  s: colorPickerSmall,
};

class ColorPicker extends Component {
  props: Props

  static defaultProps: {
    autoFocus: boolean,
    direction: 'bottom' | 'top',
    disabled: boolean,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    palette: Array<string>,
    size: 'l' | 'm' | 's',
  }

  state: {
    isMenuOpened: boolean,
    value: string,
  }

  css: {
    colorPicker: string,
    swatch: string,
    clear: string,
    control: string,
    menu: string,
    bottom: string,
    top: string,
    opened: string,
    menuItem: string,
  }

  _controlled: boolean

  _inputElement: HTMLInputElement

  constructor(props: Props) {
    super(props);

    this._controlled = isControlled(props);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      isMenuOpened: false,
      value: value != null ? value : '',
    };

    this.css = props.styles || cssModules[props.size];

    (this:any)._onClearClick = this._onClearClick.bind(this);
    (this:any)._onInputBlur = this._onInputBlur.bind(this);
    (this:any)._onInputChange = this._onInputChange.bind(this);
    (this:any)._onInputFocus = this._onInputFocus.bind(this);
    (this:any)._onPaletteClick = this._onPaletteClick.bind(this);
    (this:any)._onSwatchClick = this._onSwatchClick.bind(this);
    (this:any)._saveInputRef = this._saveInputRef.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this._controlled = isControlled(nextProps);

    if (this._controlled) {
      const {value} = nextProps;

      this.setState({
        value: value != null ? value : '',
      });
    }

    this.css = nextProps.styles || cssModules[nextProps.size];
  }

  focus() {
    if (this._inputElement) this._inputElement.focus();
  }

  select() {
    if (this._inputElement) this._inputElement.select();
  }

  _computeSwatchProps(): SwatchProps {
    const {disabled} = this.props;
    const {css} = this;

    return {
      className: css.swatch,
      disabled,
      onClick: this._onSwatchClick,
      style: {
        backgroundColor: '',
      },
    };
  }

  _computeClearProps(): ClearProps {
    const {disabled} = this.props;
    const {value} = this.state;
    const {css} = this;

    if (disabled || !value) return null;

    return {
      className: css.clear,
      disabled,
      onClick: this._onClearClick,
    };
  }

  _computeInputProps(): InputProps {
    const {disabled} = this.props;
    const {value} = this.state;
    const {css} = this;

    return {
      className: css.control,
      disabled,
      onBlur: this._onInputBlur,
      onChange: this._onInputChange,
      onFocus: this._onInputFocus,
      ref: this._saveInputRef,
      value,
    };
  }

  _computeMenuProps(): MenuProps {
    const {direction} = this.props;
    const {isMenuOpened} = this.state;
    const {css} = this;

    const menuItems = this._computeMenuItems(this.props.palette);

    return {
      children: menuItems,
      className: classNames(css.menu, css[direction], {
        [css.opened]: isMenuOpened,
      }),
    };
  }

  _computeMenuItems(menuItems: Array<string>) {
    if (!this.state.isMenuOpened) return null;

    const {css} = this;

    return map(color => this.renderMenuItem({
      className: css.menuItem,
      key: color,
      onClick: this._onPaletteClick,
      value: color,
    }), menuItems);
  }

  _emitChange(e: SyntheticEvent, value: string) {
    const {name, onChange} = this.props;
    if (!this._controlled) this.setState({value});
    onChange(e, {name, value});
  }

  _onClearClick(e: SyntheticEvent) {
    this._emitChange(e, '');
    this.focus();
  }

  _onInputBlur(e: SyntheticEvent) {
    this.props.onBlur(e);
  }

  _onInputChange(e: SyntheticInputEvent) {
    this._emitChange(e, e.target.value);
  }

  _onInputFocus(e: SyntheticFocusEvent) {
    this.props.onFocus(e);
  }

  _onPaletteClick(e: SyntheticEvent, color: string) {
    this.setState({isMenuOpened: false});
    this._emitChange(e, color);
  }

  _onSwatchClick(e: SyntheticEvent) {
    this.setState({isMenuOpened: !this.state.isMenuOpened});
  }

  _saveInputRef(ref: HTMLInputElement) {
    this._inputElement = ref;
  }

  render() {
    const {className, style} = this.props;
    const {css} = this;

    const swatchProps = this._computeSwatchProps();
    const clearProps = this._computeClearProps();
    const inputProps = this._computeInputProps();
    const menuProps = this._computeMenuProps();

    return (
      <span className={classNames(css.colorPicker, className)} style={style}>
        {this.renderSwatch(swatchProps)}
        {this.renderClear(clearProps)}
        {this.renderInput(inputProps)}
        {this.renderMenu(menuProps)}
      </span>
    );
  }

  renderSwatch(swatchProps: SwatchProps) {
    return (
      <button {...swatchProps}/>
    );
  }

  renderClear(clearProps: ClearProps) {
    if (!clearProps) return null;

    return (
      <span {...clearProps}/>
    );
  }

  renderInput(inputProps: InputProps) {
    return (
      <input {...inputProps}/>
    );
  }

  renderMenu(menuProps: MenuProps) {
    return (
      <div {...menuProps}/>
    );
  }

  renderMenuItem(itemProps: ItemProps) {
    return (
      <Color {...itemProps}/>
    );
  }
}

ColorPicker.defaultProps = {
  autoFocus: false,
  direction: 'bottom',
  disabled: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  palette: [
    '000000', 'CC0000', 'CC6600',
    'CCCC00', '66CC00', '00CC00',
    '00CC66', '00CCCC', '0066CC',
    '0000CC', '6600CC', 'CC00CC',
    'CC0066', '333333', 'FF0000',
    'FF8000', 'FFFF00', '80FF00',
    '00FF00', '00FF80', '00FFFF',
    '007FFF', '0000FF', '7F00FF',
    'FF00FF', 'FF0080', '666666',
    'FF3333', 'FF9933', 'FFFF33',
    '99FF33', '33FF33', '33FF99',
    '33FFFF', '3399FF', '3333FF',
    '9933FF', 'FF33FF', 'FF3399',
    '999999', 'FF6666', 'FFB366',
    'FFFF66', 'B3FF66', '66FF66',
    '66FFB3', '66FFFF', '66B2FF',
    '6666FF', 'B266FF', 'FF66FF',
    'FF66B3', 'CCCCCC', 'FF9999',
    'FFCC99', 'FFFF99', 'CCFF99',
    '99FF99', '99FFCC', '99FFFF',
    '99CCFF', '9999FF', 'CC99FF',
    'FF99FF', 'FF99CC', 'FFFFFF',
    'FFCCCC', 'FFE6CC', 'FFFFCC',
    'E6FFCC', 'CCFFCC', 'CCFFE6',
    'CCFFFF', 'CCE5FF', 'CCCCFF',
    'E5CCFF', 'FFCCFF', 'FFCCE6',
  ],
  size: 'm',
};

export default ColorPicker;
