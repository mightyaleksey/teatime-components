'use strict';

const { Component, PropTypes } = require('react');
const { styleName } = require('../tool/className');
const React = require('react');
const layer = require('../mixin/layer');

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zIndex: 100,
    };
  }

  onLayersUpdate(zIndex) {
    this.setState({zIndex});
  }

  render() {
    const { zIndex } = this.state;

    return (
      <div
        style={{zIndex}}
        {...this.props}
        className={styleName(this.props)}/>
    );
  }
}

Popup.defaultProps = {
  styleName: 'popup',
  styles: {},
};

Popup.propTypes = {
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = layer(Popup);
