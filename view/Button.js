'use strict';

const { Component, PropTypes } = require('react');
const { styleName } = require('../tool/className');
const { sanitizeProps } = require('../tool/component');
const React = require('react');

class Button extends Component {
  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  filter(props) {
    let filteredProps = {};

    Object.keys(props).forEach(prop => {
      if (!Button.illegalDOMProps.includes(prop)) {
        filteredProps[prop] = props[prop];
      }
    });

    return filteredProps;
  }

  render() {
    return (
      <button {...sanitizeProps(['theme', 'styles', 'styleName'], this.props)} className={styleName(this.props)} ref='control'/>
    );
  }
}

Button.defaultProps = {
  styleName: 'control',
  styles: {},
};

Button.propTypes = {
  styleName: PropTypes.string,
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Button;
