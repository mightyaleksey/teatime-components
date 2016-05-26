'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const cssModules = require('react-css-modules');
const layer = require('../mixin/layer');

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zIndex: 1,
    };
  }

  onLayersUpdate(zIndex) {
    this.setState({zIndex});
  }

  render() {
    const { zIndex } = this.state;

    return (
      <div style={{zIndex}} styleName='popup' {...this.props}/>
    );
  }
}

Popup.defaultTypes = {
  styles: {},
};

Popup.propTypes = {
  styles: PropTypes.object,
};

module.exports = layer(cssModules(Popup));
