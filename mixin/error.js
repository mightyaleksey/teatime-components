'use strict';

const { Component, PropTypes } = require('react');
const { createTag, div } = require('../');

/**
 * @param  {component} Target
 * @param  {component} Tooltip
 * @param  {object} tooltipProps
 * @return {component}
 */
module.exports = function error(Target, Tooltip, tooltipProps) {
  const target = createTag(Target);
  const tooltip = createTag(Tooltip);

  class ErrorTooltip extends Component {
    render() {
      const { direction, error, ...o } = this.props;

      return div({className: ''},
        target(o),
        error
          ? tooltip({direction, ...tooltipProps}, error)
          : null
      );
    }
  }

  ErrorTooltip.propTypes = {
    error: PropTypes.string,
  };

  return ErrorTooltip;
};
