'use strict';

const { Component, PropTypes } = require('react');
const { compose, omit } = require('lodash/fp');
const { findUnwantedProps } = require('../tool/component');

class TeatimeComponent extends Component {
  constructor(props) {
    super(props);

    const unwantedProps = findUnwantedProps(this);
    if (unwantedProps) {
      this.knownProps = compose(omit(unwantedProps), this.knownProps);
    }
  }

  /**
   * @return {object}
   */
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

TeatimeComponent.propTypes = {
  styles: PropTypes.object.isRequired,
};

TeatimeComponent.unwantedProps = [
  'styles',
];

module.exports = TeatimeComponent;
