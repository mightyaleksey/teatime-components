'use strict';

const { Component: ReactComponent, PropTypes } = require('react');
const { compose, omit } = require('lodash/fp');
const { findUnwantedProps } = require('../tool/component');

class Component extends ReactComponent {
  constructor(props) {
    super(props);

    const unwantedProps = findUnwantedProps(this);
    if (unwantedProps) {
      this.knownProps = compose(omit(unwantedProps), this.knownProps);
    }
  }

  knownProps() {
    return this.props;
  }

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

Component.unwantedProps = [
  'styles',
];

module.exports = Component;
