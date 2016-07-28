'use strict';

const { PropTypes } = require('react');
const { generateId } = require('../tool/identity');
const { noop } = require('../tool/func');
const React = require('react');
const Teatime = require('./Teatime');

const MOUNTED_OVERLAYS = {};

var pendingUpdate;

class Overlay extends Teatime {
  constructor(props) {
    super(props);

    this.state = {
      id: generateId(),
    };
  }

  componentDidMount() {
    MOUNTED_OVERLAYS[this.state.id] = this;
    debouncedUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.shouldComponentUpdatePosition(prevProps, prevState)) {
      updateOverlays();
    }
  }

  componentWillUnmount() {
    delete MOUNTED_OVERLAYS[this.state.id];
  }

  render() {
    return (
      <div {...this.knownProps()} ref='overlay'/>
    );
  }
}

Overlay.defaultProps = {
  calculatePosition,
  onPositionUpdate: noop,
  shouldComponentUpdatePosition: noop,
};

Overlay.propTypes = {
  calculatePosition: PropTypes.func,
  onPositionUpdate: PropTypes.func,
  shouldComponentUpdatePosition: PropTypes.func,
};

Overlay.unwantedProps = [
  'calculatePosition',
  'onPositionUpdate',
  'shouldComponentUpdatePosition',
  ...Teatime.unwantedProps,
];

module.exports = Overlay;

/**
 * @param  {object} rect
 * @param  {number} rect.left
 * @param  {number} rect.top
 * @return {number}
 */
function calculatePosition(rect) {
  return rect.top + rect.left / 10000;
}

function debouncedUpdate() {
  clearTimeout(pendingUpdate);
  pendingUpdate = setTimeout(updateOverlays);
}

function updateOverlays() {
  clearTimeout(pendingUpdate);

  const layers = [];

  var component;
  var rect;
  var ref;

  for (var id in MOUNTED_OVERLAYS) {
    component = MOUNTED_OVERLAYS[id];

    if (!component.refs.overlay) {
      continue;
    }

    ref = component.refs.overlay;
    rect = ref.getBoundingClientRect();

    layers.push({
      component,
      pos: component.props.calculatePosition(rect),
      rect,
      ref,
    });
  }

  layers.sort(byPos);

  var index = layers.length;
  var target;

  while (index--) {
    target = layers[index];
    target.ref.style.zIndex = 100 + index;
    target.component.props.onPositionUpdate(target.rect, target.ref);
  }
}

/**
 * @param  {object} a
 * @param  {number} a.pos
 * @param  {object} b
 * @param  {number} b.pos
 * @return {number}
 */
function byPos(a, b) {
  return b.pos - a.pos;
}
