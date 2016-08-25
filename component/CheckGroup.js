'use strict';

const { PropTypes } = require('react');
const CheckGroup = require('../view/CheckGroup');

const predefinedStyles = {
  s: require('../style/check-group/check-group-s.css'),
  m: require('../style/check-group/check-group-m.css'),
};

class CheckGroupComponent extends CheckGroup {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

CheckGroupComponent.defaultProps = {
  size: 's',
  ...CheckGroup.defaultProps,
};

CheckGroupComponent.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
  ]),
  ...CheckGroup.propTypes,
};

CheckGroupComponent.unwantedProps = [
  'size',
  ...CheckGroup.unwantedProps,
];

module.exports = CheckGroupComponent;
