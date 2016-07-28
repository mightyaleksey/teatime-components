'use strict';

const { PropTypes } = require('react');
const RadioGroup = require('../view/RadioGroup');

const predefinedStyles = {
  xs: require('../style/radio-group/radio-group-xs.css'),
  s: require('../style/radio-group/radio-group-s.css'),
  m: require('../style/radio-group/radio-group-m.css'),
  l: require('../style/radio-group/radio-group-l.css'),
};

class RadioGroupComponent extends RadioGroup {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

RadioGroupComponent.defaultProps = {
  size: 's',
  ...RadioGroup.defaultProps,
};

RadioGroupComponent.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
    'l',
  ]),
  ...RadioGroup.propTypes,
};

RadioGroupComponent.unwantedProps = [
  'size',
  ...RadioGroup.unwantedProps,
];

module.exports = RadioGroupComponent;
