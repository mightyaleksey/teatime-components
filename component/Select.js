'use strict';

const { PropTypes } = require('react');
const Select = require('../view/Select');

const predefinedStyles = {
  xs: require('../style/select/select-xs.css'),
  s: require('../style/select/select-s.css'),
  m: require('../style/select/select-m.css'),
};

class SelectComponent extends Select {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

SelectComponent.defaultProps = {
  size: 's',
  ...Select.defaultProps,
};

SelectComponent.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  ...Select.propTypes,
};

SelectComponent.unwantedProps = [
  'size',
];

module.exports = SelectComponent;
