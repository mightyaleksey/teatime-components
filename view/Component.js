'use strict';

const { Component: ReactComponent, PropTypes } = require('react');

class Component extends ReactComponent {
  /**
   * @param  {string} styleName
   * @return {string}
   */
  style(styleName) {
    return this.styles()[styleName];
  }

  /**
   * @return {object}
   */
  styles() {
    return this.props.styles;
  }
}

Component.defaultProps = {
  styles: {},
};

Component.propTypes = {
  styles: PropTypes.object,
};

module.exports = Component;
