'use strict';

const { classNames } = require('../tool/className');
const { wrapper } = require('../style/anchor/anchor.css');
const React = require('react');
const Tooltip = require('../component/Tooltip');

/**
 * @param  {component} Target
 * @return {component}
 */
module.exports = function TooltipWrapper(Target) {
  const Wrapper = class extends Target {
    render() {
      const { tooltipDirection, tooltipMessage, tooltipSize, tooltipType, tooltipWrapper } = this.props;

      return (
        <div className={classNames(tooltipWrapper, wrapper)}>
          {super.render()}
          <Tooltip
            direction={tooltipDirection}
            size={tooltipSize}
            type={tooltipType}>
            {tooltipMessage}
          </Tooltip>
        </div>
      );
    }
  };

  return Wrapper;
};
