'use strict';

const { PropTypes } = require('react');
const { bind, hasValueProp } = require('../tool/component');
const { isUndefined, noop } = require('../tool/func');
const { isHexBased, normalizeColor, trimHash } = require('../tool/color');
const Input = require('./Input');
const OutsideEventDecorator = require('../decorator/OutsideEventDecorator');
const Overlay = OutsideEventDecorator(require('./Overlay'));
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');
const Tile = require('./Tile');
const classNames = require('classnames');
const warning = require('../tool/warning');

var didWarnForDefaultValue = false;

class ColorPicker extends TeatimeComponent {
  constructor(props) {
    super(props);

    bind(this, [
      'getParentNode',
      'onChange',
      'onInputBlur',
      'onInputFocus',
      'onKeyDown',
      'onOutsideEvent',
      'onPreviewClick',
      'onTileClick',
    ]);

    this.controlled = hasValueProp(props);

    if (process.env.NODE_ENV !== 'production' && this.controlled && !didWarnForDefaultValue) { // eslint-disable-line no-undef
      warning(typeof props.defaultValue === 'undefined',
        'ColorPicker contains an input of type text with both value and defaultValue props. ' +
        'Input elements must be either controlled or uncontrolled ' +
        '(specify either the value prop, or the defaultValue prop, but not ' +
        'both). Decide between using a controlled or uncontrolled input ' +
        'element and remove one of these props. More info: ' +
        'https://fb.me/react-controlled-components');

      didWarnForDefaultValue = true;
    }

    var value = this.controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      isOpened: false,
      value: !isUndefined(value)
        ? value
        : 'FFFFFF',
    };
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

  /**
   * @return {node|void}
   */
  getParentNode() {
    return this.refs.container;
  }

  onChange(e, data) {
    this.updateValue(e, data.value);
  }

  onInputBlur(e) {
    var nextValue = normalizeColor(this.state.value);
    if (nextValue === this.state.value) return;
    this.updateValue(e, normalizeColor(nextValue || 'FFFFFF'));
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
    this.updateValue(e, trimHash(color));
    this.focus();
  }

  updateValue(e, value) {
    if (!this.controlled) {
      this.setState({isOpened: false, value});
    }

    this.props.onChange(e, {isOpened: false, value});
  }

  render() {
    return (
      <div
        className={classNames(this.style('container'), {
          [this.style('isFixedWrapper')]: this.props.hasFixedWidth,
        }, this.props.className)}
        onKeyDown={this.onKeyDown}
        ref='container'>
        {this.renderPreview()}
        <Input
          {...this.knownProps()}
          className={undefined}
          defaultValue={undefined}
          onBlur={this.onInputBlur}
          onChange={this.onChange}
          onFocus={this.onInputFocus}
          ref='control'
          styles={this.styles()}
          value={this.state.value}/>
        {this.renderMenu()}
      </div>
    );
  }

  renderPreview() {
    const value = this.state.value;

    return (
      <button
        className={this.style('preview')}
        disabled={this.props.disabled}
        onClick={this.onPreviewClick}
        ref='preview'
        style={{
          background: `#${isHexBased(value) ? trimHash(value) : 'fff'}`,
        }}/>
    );
  }

  renderMenu() {
    return (
      <Overlay
        className={classNames(this.style('menu'), {
          [this.style('isClosedMenu')]: !this.state.isOpened,
          [this.style('isOpenedMenu')]: this.state.isOpened,
          [this.style('isFixedMenu')]: this.props.hasFixedWidth,
        })}
        getParentNode={this.getParentNode}
        onOutsideEvent={this.onOutsideEvent}>
        {this.renderTiles()}
      </Overlay>
    );
  }

  renderTiles() {
    if (!this.state.isOpened) {
      return null;
    }

    const palette = this.props.palette;
    const tiles = [];

    for (var length = palette.length, i = 0; i < length; ++i) {
      const tile = palette[i];

      tiles.push((
        <Tile
          color={`#${tile}`}
          key={`_${tile}`}
          onClick={this.onTileClick}
          styles={this.styles()}/>
      ));
    }

    return tiles;
  }
}

ColorPicker.defaultProps = {
  hasFixedWidth: false,
  onChange: noop,
  palette: [
    '000000',
    'CC0000',
    'CC6600',
    'CCCC00',
    '66CC00',
    '00CC00',
    '00CC66',
    '00CCCC',
    '0066CC',
    '0000CC',
    '6600CC',
    'CC00CC',
    'CC0066',
    '333333',
    'FF0000',
    'FF8000',
    'FFFF00',
    '80FF00',
    '00FF00',
    '00FF80',
    '00FFFF',
    '007FFF',
    '0000FF',
    '7F00FF',
    'FF00FF',
    'FF0080',
    '666666',
    'FF3333',
    'FF9933',
    'FFFF33',
    '99FF33',
    '33FF33',
    '33FF99',
    '33FFFF',
    '3399FF',
    '3333FF',
    '9933FF',
    'FF33FF',
    'FF3399',
    '999999',
    'FF6666',
    'FFB366',
    'FFFF66',
    'B3FF66',
    '66FF66',
    '66FFB3',
    '66FFFF',
    '66B2FF',
    '6666FF',
    'B266FF',
    'FF66FF',
    'FF66B3',
    'CCCCCC',
    'FF9999',
    'FFCC99',
    'FFFF99',
    'CCFF99',
    '99FF99',
    '99FFCC',
    '99FFFF',
    '99CCFF',
    '9999FF',
    'CC99FF',
    'FF99FF',
    'FF99CC',
    'FFFFFF',
    'FFCCCC',
    'FFE6CC',
    'FFFFCC',
    'E6FFCC',
    'CCFFCC',
    'CCFFE6',
    'CCFFFF',
    'CCE5FF',
    'CCCCFF',
    'E5CCFF',
    'FFCCFF',
    'FFCCE6',
  ],
};

// @todo add color validation for value prop
ColorPicker.propTypes = {
  hasFixedWidth: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  palette: PropTypes.array,
  styles: PropTypes.shape({
    clear: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    control: PropTypes.string.isRequired,
    isClosedMenu: PropTypes.string.isRequired,
    isFixedMenu: PropTypes.string.isRequired,
    isFixedWrapper: PropTypes.string.isRequired,
    isOpenedMenu: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    line: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    wrapper: PropTypes.string.isRequired,
  }),
};

ColorPicker.unwantedProps = [
  'hasFixedWidth',
  'palette',
  ...TeatimeComponent.unwantedProps,
];

module.exports = ColorPicker;
