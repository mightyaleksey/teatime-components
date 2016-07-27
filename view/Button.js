'use strict';

const { PropTypes } = require('react');
const Component = require('./Component');
const React = require('react');

class Button extends Component {
  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  render() {
    return (
      <button {...this.props} className={this.style('control')} ref='control'/>
    );
  }
}

Button.propTypes = {
  styles: PropTypes.shape({
    control: PropTypes.string,
  }),
};

module.exports = Button;
