'use strict';

const { PropTypes } = require('react');
const Spin = require('../view/Spin');

const predefinedStyles = {
  xs: require('../style/spin/spin-xs.css'),
  s: require('../style/spin/spin-s.css'),
  m: require('../style/spin/spin-m.css'),
  l: require('../style/spin/spin-l.css'),
  xl: require('../style/spin/spin-xl.css'),
};

class SpinComponent extends Spin {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

SpinComponent.defaultProps = {
  size: 's',
  ...Spin.defaultProps,
};

SpinComponent.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
    'l',
    'xl',
  ]),
  ...Spin.propTypes,
};

SpinComponent.unwantedProps = [
  'size',
];

module.exports = SpinComponent;
