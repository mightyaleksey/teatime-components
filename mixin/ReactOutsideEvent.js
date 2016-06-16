'use strict';

const reactOutsideEvent = require('react-outside-event');

/**
 * @param  {component} Target
 * @param  {string[]} events
 * @return {component}
 */
module.exports = function ReactOutsideEvent(Target, events) {
  const WrappedComponent = reactOutsideEvent(Target, events);
  WrappedComponent.displayName = `${Target.displayName || Target.name}WithROEListener`;
  return WrappedComponent;
};
