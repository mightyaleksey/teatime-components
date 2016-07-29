'use strict';

const { PropTypes } = require('react');
const Input = require('../view/Input');

const predefinedStyles = {
  xs: require('../style/input/input-xs.css'),
  s: require('../style/input/input-s.css'),
  m: require('../style/input/input-m.css'),
};

class InputComponent extends Input {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

InputComponent.defaultProps = {
  size: 's',
  ...Input.defaultProps,
};

InputComponent.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  ...Input.propTypes,
};

InputComponent.unwantedProps = [
  'size',
];

module.exports = InputComponent;
