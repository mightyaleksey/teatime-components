'use strict';

const { Component, PropTypes } = require('react');
const { wrapper } = require('../style/anchor/anchor.css');
const React = require('react');
const Tooltip = require('../component/Tooltip');

module.exports = function tooltipWrapper(Target, defaultProps) {
  class TooltipWrapper extends Component {
    render() {
      const { direction, message, size, type, ...o } = this.props;

      return (
        <div className={wrapper}>
          <Target {...o} size={size}/>
          <Tooltip
            size={size}
            {...defaultProps}
            direction={direction}
            type={type}>
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
