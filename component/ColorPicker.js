'use strict';

const {Component, PropTypes} = require('react');
const {TAB} = require('../lib/keyCode');
const {isControlled, themes} = require('../lib/tool');
const {isUndefined, map, noop, omit, prop} = require('../lib/dash');
const Overlay = require('../view/Overlay');
const React = require('react');
const Tile = require('../view/Tile');
const cc = require('classnames');

const cssModules = {
  xs: require('../style/colorPicker/colorPicker-xs.css'),
  s: require('../style/colorPicker/colorPicker-s.css'),
  m: require('../style/colorPicker/colorPicker-m.css'),
};

const omitProps = omit([
  'onChange',
  'styles',
]);

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);
    this._styles = themes(this.token);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      isOpened: false,
      styles: this._styles(props),
      value: isUndefined(value) ? '' : value,
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

  focus() {
    if (!this._input) return;
    this._input.focus();
  }

  select() {
    if (!this._input) return;
    this._input.select();
  }

  token = prop('size')

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

  render() {
    const {
      autoFocus,
      className,
      disabled,
      id,
      name,
      palette,
      placeholder,
      ...other,
    } = this.props;

    const {styles, value} = this.state;

    const {
      container,
      button,
      clear,
      control,
      menu,
      menuItem,
    } = styles;

    const tiles = map(color =>
      this.renderTile({
        className: menuItem,
        color,
        key: color,
        onClick: this._onTileClick,
      }), palette);

    return (
      <span
        {...omitProps(other)}
        className={cc(container, className)}
        ref='parent'>
        {this.renderButton({
          className: button,
          disabled,
          onClick: this._onClick,
          style: {
            backgroundColor: '#' + value,
          },
        })}
        {this.renderClear({
          className: clear,
          disabled,
          onClick: this._onClearClick,
          value,
        })}
        {this.renderInput({
          autoFocus,
          className: control,
          disabled,
          id,
          name,
          onChange: this._onChange,
          onFocus: this._onInputFocus,
          placeholder,
          ref: r => this._input = r,
          type: 'text',
          value,
        })}
        {this.renderMenu({
          children: tiles,
          className: menu,
          onOutsideClick: this._onOutsideClick,
          parentNode: this._parentNode,
        })}
      </span>
    );
  }

  renderButton(buttonProps) {
    return (
      <button {...buttonProps}/>
    );
  }

  renderClear(clearProps) {
    if (clearProps.disabled || !clearProps.value) return null;

    return (
      <span {...clearProps}/>
    );
  }

  renderInput(inputProps) {
    return (
      <input {...inputProps}/>
    );
  }

  renderMenu(menuProps) {
    if (!this.state.isOpened) return null;

    return (
      <Overlay {...menuProps}/>
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
