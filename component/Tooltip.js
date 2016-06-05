'use strict';

const { PropTypes } = require('react');
const Popup = require('../view/Popup');
const React = require('react');

const styles = {
  'normal-xs': require('../style/tooltip/tooltip-normal-xs.css'),
  'normal-s': require('../style/tooltip/tooltip-normal-s.css'),
  'normal-m': require('../style/tooltip/tooltip-normal-m.css'),
  'success-xs': require('../style/tooltip/tooltip-success-xs.css'),
  'success-s': require('../style/tooltip/tooltip-success-s.css'),
  'success-m': require('../style/tooltip/tooltip-success-m.css'),
  'warning-xs': require('../style/tooltip/tooltip-warning-xs.css'),
  'warning-s': require('../style/tooltip/tooltip-warning-s.css'),
  'warning-m': require('../style/tooltip/tooltip-warning-m.css'),
};

class Tooltip extends Popup {
  render() {
    const { direction, size, type, ...o } = this.props;

    return (
      <Popup
        {...o}
        styleName={direction}
        styles={styles[`${type}-${size}`]}/>
    );
  }
}

Tooltip.defaultProps = {
  direction: 'right',
  size: 's',
  type: 'normal',
};

Tooltip.propTypes = {
  direction: PropTypes.oneOf([
    'bottom',
    'left',
    'right',
    'top',
  ]),
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  type: PropTypes.oneOf([
    'normal',
    'success',
    'warning',
  ]),
};

module.exports = Tooltip;
