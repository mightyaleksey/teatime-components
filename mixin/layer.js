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
      subscribeTo(this);
      updateLayers();
    }

    componentDidUpdate() {
      updateLayers();
    }

    componentWillUnmount() {
      unsubscribeFrom(this);
    }

    render() {
      return (
        <Target ref='target' {...this.props}/>
      );
    }
  }

  return Layer;
};

function updateLayers() {
  const positions = [];
  var target;

  for (var id in layers) {
    var layer = layers[id];
    if (!layer) {
      continue;
    }

    target = layer.refs.target;
    if (!target) {
      continue;
    }

    target = findDOMNode(target);
    if (!target) {
      continue;
    }

    positions.push({
      layer,
      position: calcPosition(target.getBoundingClientRect()),
    });
  }

  positions.sort((a, b) => b.position - a.position);

  var length = positions.length;
  while (length--) {
    target = positions[length].layer.refs.target;
    if (typeof target.onLayersUpdate === 'function') {
      target.onLayersUpdate(length + 100);
    }
  }
}

/**
 * @param {reactClass} component
 */
function subscribeTo(component) {
  const id = component._id = generateId();
  layers[id] = component;
}

/**
 * @param {reactClass} component
 */
function unsubscribeFrom(component) {
  layers[component._id] = null;
  component._id = null;
}

/**
 * @param  {object} rect
 * @param  {number} rect.top
 * @param  {number} rect.left
 * @return {number}
 */
function calcPosition(clientRect) {
  return clientRect.top + Number(`.${Math.round(clientRect.left)}`);
}
