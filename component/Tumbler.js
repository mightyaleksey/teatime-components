'use strict';

const { PropTypes } = require('react');
const Tumbler = require('../view/Tumbler');

const predefinedStyles = {
  xs: require('../style/tumbler/tumbler-xs.css'),
  s: require('../style/tumbler/tumbler-s.css'),
  m: require('../style/tumbler/tumbler-m.css'),
};

class TumblerComponent extends Tumbler {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

TumblerComponent.defaultProps = {
  size: 'xs',
  ...Tumbler.defaultProps,
};

TumblerComponent.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  ...Tumbler.propTypes,
};

TumblerComponent.unwantedProps = [
  'size',
];

module.exports = TumblerComponent;
