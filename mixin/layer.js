'use strict';

const { Component } = require('react');
const { findDOMNode } = require('react-dom');
const { generateId } = require('../tools/identity');
const React = require('react');

const layers = {};

/**
 * @param  {component} Target
 * @return {component}
 */
module.exports = function (Target) {
  class Layer extends Component {
    componentDidMount() {
      const id = this._id = generateId();
      layers[id] = {node: findDOMNode(this.refs.target), ref: this.refs.target};
      this.updateLayers();
    }

    componentWillUnmount() {
      delete layers[this._id];
    }

    updateLayers() {
      const rects = [];

      for (var id in layers) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        const rect = layers[id].node.getBoundingClientRect();
        rects.push({id, z: toNum(rect.top, rect.left)});
      }

      var length = rects.length;
      rects.sort((a, b) => b.z - a.z);
      while (length--) {
        layers[rects[length].id].ref.onOrderChange(length + 100);
      }
    }

    render() {
      return (
        <Target ref='target' {...this.props}/>
      );
    }
  }

  return Layer;
};

/**
 * @param  {number} top
 * @param  {number} left
 * @return {number}
 */
function toNum(top, left) {
  return Math.round(top) - Number(`.${Math.round(left)}`);
}
