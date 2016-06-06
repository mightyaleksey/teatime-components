'use strict';

const { Component, PropTypes } = require('react');
const { wrapper } = require('../style/anchor/anchor.css');
const React = require('react');
const Tooltip = require('../component/Tooltip');

/**
 * @param  {component} Target
 * @param  {object}    [preset]
 * @return {component}
 */
module.exports = function tooltipWrapper(Target, preset) {
  class TooltipWrapper extends Component {
    render() {
      const { direction, message, size, type, ...o } = this.props;

      return (
        <div className={wrapper}>
          <Target {...o} size={size}/>
          <Tooltip
            direction={direction}
            size={size}
            type={type}
            {...preset}>
            {message}
          </Tooltip>
        </div>
      );
    }
  }

  TooltipWrapper.propTypes = {
    error: PropTypes.string,
  };

  return TooltipWrapper;
};
