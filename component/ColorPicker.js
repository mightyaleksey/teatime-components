'use strict';

const {Component, PropTypes} = require('react');
const {TAB} = require('../lib/keyCode');
const {cssColorValue} = require('../lib/color');
const {filterProps, isControlled, genericName} = require('../lib/util');
const {isUndefined, map, noop} = require('../lib/dash');
const Overlay = require('../view/Overlay');
const React = require('react');
const Tile = require('../view/Tile');
const cc = require('classnames');

const cssModules = {
  xs: require('../style/colorPicker/colorPicker-xs.css'),
  s: require('../style/colorPicker/colorPicker-s.css'),
  m: require('../style/colorPicker/colorPicker-m.css'),
};

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      isOpened: false,
      value: isUndefined(value) ? '' : value,
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

  focus() {
    if (!this._input) return;
    this._input.focus();
  }

  select() {
    if (!this._input) return;
    this._input.select();
  }

  _onChange = e => {
    const value = e.target.value;
    if (!this._controlled) this.setState({isOpened: false, value});
    this.props.onChange(e, {value});
  }

  _onClearClick = () => {
    this.setState({
      isOpened: !this.state.isOpened,
      value: '',
    });

    this.focus();
  }

  _onClick = () => {
    this.setState({isOpened: !this.state.isOpened});
  }

  _onInputFocus = () => {
    if (!this.state.isOpened) return;
    this.setState({isOpened: false});
  }

  _onKeyDown = ({keyCode}) => {
    if (this.props.disabled) return;
    if (keyCode === TAB) this.setState({isOpened: false});
  }

  _onTileClick = (e, value) => {
    if (!this._controlled) this.setState({isOpened: false, value});
    this.props.onChange(e, {value});
    this.focus();
  }

  _onOutsideClick = () => {
    if (!this.state.isOpened) return;
    this.setState({isOpened: false});
  }

  _parentNode = () => {
    return this.refs.parent;
  }

  computeTiles(palette) {
    if (!this.state.isOpened) return null;

    const {css} = this;

    const menuItem = css('menuItem');
    return map(color =>
      this.renderTile({
        className: menuItem,
        color,
        key: color,
        onClick: this._onTileClick,
      }), palette);
  }

  render() {
    const {className} = this.props;
    const {css} = this;

    return (
      <span
        {...filterProps(this.props)}
        className={cc(css('container'), className)}
        ref='parent'>
        {this.renderButton()}
        {this.renderClear()}
        {this.renderInput()}
        {this.renderMenu()}
      </span>
    );
  }

  renderButton() {
    const {disabled} = this.props;
    const {value} = this.state;
    const {css} = this;

    return (
      <button
        className={css('button')}
        disabled={disabled}
        onClick={this._onClick}
        style={{
          backgroundColor: cssColorValue(value),
        }}/>
    );
  }

  renderClear() {
    const {disabled} = this.props;
    const {value} = this.state;

    if (disabled || !value) return null;

    const {css} = this;

    return (
      <span
        className={css('clear')}
        disabled={disabled}
        onClick={this._onClearClick}
        value={value}/>
    );
  }

  renderInput() {
    const {autoFocus, disabled, id, name, placeholder} = this.props;
    const {value} = this.state;
    const {css} = this;

    return (
      <input
        autoFocus={autoFocus}
        className={css('control')}
        disabled={disabled}
        id={id}
        name={name}
        onChange={this._onChange}
        onFocus={this._onInputFocus}
        placeholder={placeholder}
        ref={r => this._input = r}
        type='text'
        value={value}/>
    );
  }

  renderMenu() {
    const {palette} = this.props;
    const {isOpened} = this.state;
    const {css} = this;

    return (
      <Overlay
        className={cc(css('menu'), {
          [css('isClosedMenu')]: !isOpened,
        })}
        onOutsideClick={this._onOutsideClick}
        parentNode={this._parentNode}>
        {this.computeTiles(palette)}
      </Overlay>
    );
  }

  renderTile(tileProps) {
    return (
      <Tile {...tileProps}/>
    );
  }
}

ColorPicker.defaultProps = {
  onChange: noop,
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
  styles: cssModules,
};

ColorPicker.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  palette: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  styles: PropTypes.object,
};

module.exports = ColorPicker;
