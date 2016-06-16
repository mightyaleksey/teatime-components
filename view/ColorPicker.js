'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const { pureHex } = require('../tools/color');
const Input = require('./Input');
const Popup = require('./Popup');
const Tile = require('./Tile');
const React = require('react');
const cx = require('classnames');
const reactOutsideEvent = require('../mixin/ReactOutsideEvent');

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;

    this.state = {
      isOpened: false,
      value: props.value || props.defaultValue || 'FFFFFF',
    };

    bind(this, [
      'onChange',
      'onInputFocus',
      'onKeyDown',
      'onPreviewClick',
      'onTileClick',
    ]);
  }

  componentWillReceiveProps(nextProps) {
    if (this.controlled) {
      this.setState({value: nextProps.value});
    }
  }

  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  onChange(e, data) {
    this.updateValue(e, data.value);
  }

  onInputFocus() {
    // @todo add possibility to control focus from outside
    if (this.state.isOpened === false) return;
    this.setState({isOpened: false});
  }

  onKeyDown(e) {
    if (this.props.disabled) return;

    const preview = this.refs.preview;

    if (e.keyCode === 9 && preview && preview === e.target) { // tab
      this.setState({isOpened: false});
    }
  }

  onPreviewClick() {
    this.setState({isOpened: !this.state.isOpened});
  }

  onOutsideEvent() {
    if (this.state.isOpened === false) return;
    this.setState({isOpened: false});
  }

  onTileClick(e, color) {
    this.updateValue(e, pureHex(color));
    this.focus();
  }

  updateValue(e, value) {
    if (!this.controlled) {
      this.setState({isOpened: false, value});
    }

    this.props.onChange(e, {isOpened: false, value});
  }

  render() {
    const { className, id, styleName, styles, ...o } = this.props;

    return (
      <div
        className={cx(className, styles[styleName])}
        onKeyDown={this.onKeyDown}>
        {this.renderPreview()}
        <Input
          {...o}
          defaultValue={undefined}
          id={id}
          onChange={this.onChange}
          onFocus={this.onInputFocus}
          ref='control'
          styles={styles}
          value={this.state.value}/>
        {this.renderMenu()}
      </div>
    );
  }

  renderPreview() {
    const { disabled, styles } = this.props;

    return (
      <button
        className={styles.preview}
        disabled={disabled}
        onClick={this.onPreviewClick}
        ref='preview'
        style={{background: `#${this.state.value}`}}/>
    );
  }

  renderMenu() {
    const { styles } = this.props;
    const popupMixin = styles[this.state.isOpened
      ? 'isOpened'
      : 'isClosed'];

    return (
      <Popup className={popupMixin} styleName='menu' styles={styles}>
        {this.renderTiles()}
      </Popup>
    );
  }

  renderTiles() {
    if (!this.state.isOpened) {
      return null;
    }

    const { palette, styles } = this.props;

    return palette.map((tiles, p) => (
      <div className={styles.line} key={p}>{this.renderLine(tiles, p, styles)}</div>
    ));
  }

  renderLine(tiles, position, styles) {
    return tiles.map((tile, i) => (
      <Tile
        color={`#${tile}`}
        key={`_${i}${position}`}
        onClick={this.onTileClick}
        styles={styles}/>
    ));
  }
}

ColorPicker.defaultProps = {
  onChange: noop,
  palette: [
    ['000000', 'CC0000', 'CC6600', 'CCCC00', '66CC00', '00CC00', '00CC66', '00CCCC', '0066CC', '0000CC', '6600CC', 'CC00CC', 'CC0066'],
    ['333333', 'FF0000', 'FF8000', 'FFFF00', '80FF00', '00FF00', '00FF80', '00FFFF', '007FFF', '0000FF', '7F00FF', 'FF00FF', 'FF0080'],
    ['666666', 'FF3333', 'FF9933', 'FFFF33', '99FF33', '33FF33', '33FF99', '33FFFF', '3399FF', '3333FF', '9933FF', 'FF33FF', 'FF3399'],
    ['999999', 'FF6666', 'FFB366', 'FFFF66', 'B3FF66', '66FF66', '66FFB3', '66FFFF', '66B2FF', '6666FF', 'B266FF', 'FF66FF', 'FF66B3'],
    ['CCCCCC', 'FF9999', 'FFCC99', 'FFFF99', 'CCFF99', '99FF99', '99FFCC', '99FFFF', '99CCFF', '9999FF', 'CC99FF', 'FF99FF', 'FF99CC'],
    ['FFFFFF', 'FFCCCC', 'FFE6CC', 'FFFFCC', 'E6FFCC', 'CCFFCC', 'CCFFE6', 'CCFFFF', 'CCE5FF', 'CCCCFF', 'E5CCFF', 'FFCCFF', 'FFCCE6'],
  ],
  styleName: 'container',
};

// @todo add color validation for value prop
ColorPicker.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  palette: PropTypes.array,
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = reactOutsideEvent(ColorPicker, ['click']);
