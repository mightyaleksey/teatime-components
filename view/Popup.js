'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const cx = require('classnames');
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
    const { className, styleName, styles, ...o } = this.props;
    const { zIndex } = this.state;

    return (
      <div
        style={{zIndex}}
        {...o}
        className={cx(className, styles[styleName])}/>
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
