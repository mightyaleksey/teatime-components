'use strict';

const {Component} = require('react');
const OutsideClick = require('../decorator/OutsideClick');
const React = require('react');

// @todo detect direction automaticaly in case it wasn't provided
// use bounding reactangle on componentDidMount
// and choose the desired one
class Overlay extends Component {
  render() {
    return (
      <span {...this.props}/>
    );
  }
}

module.exports = OutsideClick(Overlay);
