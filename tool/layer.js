'use strict';

const LAYERS = {};

var pendingUpdate;

exports.forget = forget;
exports.observe = observe;
exports.update = update;

/**
 * @param {component} component
 * @param {number} id
 */
function forget(component, id) {
  delete LAYERS[id];
}

/**
 * @param {component} component
 * @param {number} id
 */
function observe(component, id) {
  const ref = component.refs.overlay;

  LAYERS[id] = {
    component,
    rect: ref && ref.getBoundingClientRect(),
  };
}

/**
 * @param {component} component
 * @param {number} id
 */
function update() {
  clearTimeout(pendingUpdate);
  pendingUpdate = setTimeout(updateComponents);
}

function updateComponents() {
  const positions = [];

  for (var id in LAYERS) {
    const target = LAYERS[id];

    const ref = target.component.refs.overlay;
    if (!ref) {
      continue;
    }

    const rect = ref.getBoundingClientRect();
    target.rect = rect;

    positions.push({
      component: target.component,
      pos: calcPos(rect),
      rect,
      ref,
    });
  }

  positions.sort(byPos);

  var length = positions.length;
  while (length--) {
    const target = positions[length];
    target.ref.style.zIndex = 100 + length;
    target.component.props.onUpdate(target.rect, target.ref);
  }
}

/**
 * @param  {object} rect
 * @param  {number} rect.top
 * @param  {number} rect.left
 * @return {number}
 */
function calcPos(rect) {
  return rect.top + float(rect.left);
}

/**
 * @param  {number} int
 * @return {number}
 */
function float(int) {
  return Number(`.${Math.round(int)}`);
}

/**
 * @param  {object} a
 * @param  {object} b
 * @return {number}
 */
function byPos(a, b) {
  return b.pos - a.pos;
}
