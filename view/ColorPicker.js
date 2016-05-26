'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const Input = require('./Input');
const React = require('react');
const cssModules = require('react-css-modules');

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    bind(this, [
      'onChange',
      'onPreviewClick',
    ]);
  }

  onChange() {}

  onPreviewClick() {}

  render() {
    const { name, styles, ...o } = this.props;

    return (
      <div {...o} styleName='wrapper'>
        <i onClick={this.onPreviewClick} styleName='preview'/>
        <Input name={name} onChange={this.onChange} styles={styles}/>
      </div>
    );
  }
}

ColorPicker.defaultTypes = {
  onChange: noop,
};

ColorPicker.propTypes = {
  onChange: PropTypes.func,
};

module.exports = cssModules(ColorPicker);
