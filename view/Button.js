'use strict';

const { Component, PropTypes } = require('react');
const React = require('react');
const cx = require('classnames');

class Button extends Component {
  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  render() {
    const { className, styleName, styles, ...o } = this.props;

    return (
      <button {...o} className={cx(className, styles[styleName])} ref='control'/>
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
