'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const Input = require('./Input');
const Popup = require('./Popup');
const Tile = require('./Tile');
const React = require('react');
const cssModules = require('react-css-modules');
const reactOutsideEvent = require('react-outside-event');

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
      'onPreviewClick',
      'onTileClick',
    ]);
  }

  componentWillReceiveProps(nextProps) {
    if (this.controlled) {
      this.setState({value: nextProps.value});
    }
  }

  onChange(e) {
    if (!this.controlled) {
      this.setState({value: e.target.value});
    }

    this.props.onChange(e, {value: e.target.value});
  }

  onOutsideEvent() {
    this.setState({isOpened: false});
  }

  onPreviewClick() {
    this.setState({isOpened: !this.state.isOpened});
  }

  onTileClick(e, color) {
    if (!this.controlled) {
      this.setState({
        isOpened: false,
        value: color.replace('#', ''),
      });
    } else {
      this.setState({
        isOpened: false,
      });
    }

    this.props.onChange(e, {value: color.replace('#', '')});
  }

  render() {
    const { className, ...o } = this.props;
    const { value } = this.state;

    return (
      <div className={className} styleName='wrapper'>
        {this.renderPreview()}
        <Input {...o} onChange={this.onChange} value={value}/>
        {this.renderMenu()}
      </div>
    );
  }

  renderPreview() {
    const { disabled } = this.props;
    const { value } = this.state;

    return (
      <button
        disabled={disabled}
        onClick={this.onPreviewClick}
        style={{background: `#${value}`}}
        styleName='preview'/>
    );
  }

  renderMenu() {
    const { palette, styles } = this.props;
    const { isOpened } = this.state;

    const tiles = palette.map((row, y) => (
      <div key={y} styleName='line'>
        {
          row.map((tile, x) => (
            <Tile
              color={`#${tile}`}
              key={`_${x}${y}${tile}`}
              onClick={this.onTileClick}
              styles={styles}/>
          ))
        }
      </div>
    ));

    return (
      <Popup className={styles[isOpened ? 'isOpened' : 'isClosed']} styleName='menu'>
        {tiles}
      </Popup>
    );
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
};

ColorPicker.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onPaste: PropTypes.func,
  onSelect: PropTypes.func,
  palette: PropTypes.array,
  placeholder: PropTypes.string,
  styles: PropTypes.object,
  value: PropTypes.string, // @todo add color validation
};

module.exports = reactOutsideEvent(cssModules(ColorPicker), ['click']);
