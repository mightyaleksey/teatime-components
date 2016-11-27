'use strict';

const {Component} = require('react');
const OutsideClick = require('../decorator/OutsideClick');

// @todo detect direction automaticaly in case it wasn't provided
// use bounding reactangle on componentDidMount
// and choose the desired one
class Overlay extends Component {
  render() {
    return (
      <div {...this.props}/>
    );
  }
}

module.exports = OutsideClick(Overlay);
