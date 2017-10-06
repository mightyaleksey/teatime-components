'use strict';

const {Component} = require('react');
const {genericId} = require('../lib/identity');
const {noop} = require('../lib/dash');
const PropTypes = require('prop-types');
const React = require('react');

const MOUNTED_OVERLAYS = {};

let pendingUpdate;

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: genericId(),
    };
  }

  componentDidMount() {
    MOUNTED_OVERLAYS[this.state.id] = this;
    debouncedUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.shouldComponentUpdatePosition(prevProps, prevState))
      updateOverlays();
  }

  componentWillUnmount() {
    delete MOUNTED_OVERLAYS[this.state.id];
  }

  render() {
    const {children, className, onClick} = this.props;

    return (
      <div
        className={className}
        onClick={onClick}
        ref='overlay'>
        {children}
      </div>
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
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onPositionUpdate: PropTypes.func,
  shouldComponentUpdatePosition: PropTypes.func,
};

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

  let component;
  let rect;
  let ref;

  for (const id in MOUNTED_OVERLAYS) {
    component = MOUNTED_OVERLAYS[id];

    if (!component.refs.overlay)
      continue;

    ref = component.refs.overlay;

    component.props.onPositionUpdate(ref);

    rect = ref.getBoundingClientRect();

    layers.push({
      component,
      pos: component.props.calculatePosition(rect),
      rect,
      ref,
    });
  }

  layers.sort(byPos);

  let index = layers.length;
  let target;

  while (index--) {
    target = layers[index];
    target.ref.style.zIndex = 100 + index;
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
