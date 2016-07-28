'use strict';

const { PropTypes } = require('react');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');

class Button extends TeatimeComponent {
  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  render() {
    return (
      <button
        {...this.knownProps()}
        className={this.style('control')}
        ref='control'/>
    );
  }
}

Button.propTypes = {
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Button;
