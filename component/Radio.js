'use strict';

const { PropTypes } = require('react');
const Radio = require('../view/Radio');

const predefinedStyles = {
  s: require('../style/radio/radio-s.css'),
  m: require('../style/radio/radio-m.css'),
};

class RadioComponent extends Radio {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

RadioComponent.defaultProps = {
  size: 's',
  ...Radio.defaultProps,
};

RadioComponent.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
  ]),
  ...Radio.propTypes,
};

RadioComponent.unwantedProps = [
  'size',
  ...Radio.unwantedProps,
];

module.exports = RadioComponent;
