'use strict';

const { PropTypes } = require('react');
const Check = require('../view/Check');

const predefinedStyles = {
  s: require('../style/check/check-s.css'),
  m: require('../style/check/check-m.css'),
};

class CheckComponent extends Check {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

CheckComponent.defaultProps = {
  size: 's',
  ...Check.defaultProps,
};

CheckComponent.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
  ]),
  ...Check.propTypes,
};

CheckComponent.unwantedProps = [
  'size',
];

module.exports = CheckComponent;
