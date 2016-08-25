'use strict';

const { PropTypes } = require('react');
const ColorPicker = require('../view/ColorPicker');

const predefinedStyles = {
  xs: require('../style/color-picker/color-picker-xs.css'),
  s: require('../style/color-picker/color-picker-s.css'),
  m: require('../style/color-picker/color-picker-m.css'),
};

class ColorPickerComponent extends ColorPicker {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

ColorPickerComponent.defaultProps = {
  size: 's',
  ...ColorPicker.defaultProps,
};

ColorPickerComponent.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  ...ColorPicker.propTypes,
};

ColorPickerComponent.unwantedProps = [
  'size',
  ...ColorPicker.unwantedProps,
];

module.exports = ColorPickerComponent;
