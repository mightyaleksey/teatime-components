'use strict';

const { Component, PropTypes } = require('react');
const { compose, omit } = require('lodash/fp');
const { findUnwantedProps } = require('../tool/component');

class Teatime extends Component {
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

Teatime.defaultProps = {
  styles: {},
};

Teatime.propTypes = {
  styles: PropTypes.object,
};

Teatime.unwantedProps = [
  'styles',
];

module.exports = Teatime;
