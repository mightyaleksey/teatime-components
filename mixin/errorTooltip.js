'use strict';

const { Component, PropTypes } = require('react');
const { wrapper } = require('../style/anchor/anchor.css');
const React = require('react');
const Tooltip = require('../component/Tooltip');

module.exports = function errorTooltip(Target) {
  class ErrorTooltip extends Component {
    render() {
      const { direction, error, ...o } = this.props;

      return (
        <div className={wrapper}>
          <Target {...o}/>
          <Tooltip direction={direction}>
            {error}
          </Tooltip>
        </div>
      );
    }
  }

  ErrorTooltip.propTypes = {
    error: PropTypes.string,
  };

  return ErrorTooltip;
};
