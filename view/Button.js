'use strict';

const { Component, PropTypes } = require('react');
const { composition } = require('../tools/func');
const React = require('react');

class Button extends Component {
  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  render() {
    return (
      <button {...this.props} className={composition(this.props)} ref='control'/>
    );
  }
}

Button.defaultProps = {
  styleName: 'control',
  styles: {},
};

Button.propTypes = {
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = Button;
