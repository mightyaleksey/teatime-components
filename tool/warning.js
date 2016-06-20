'use strict';

const { noop } = require('./func');

var warning = noop;

if (process.env.NODE_ENV !== 'production') { // eslint-disable-line no-undef
  warning = function warning(condition, format, ...args) {
    if (typeof format === 'undefined') {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (condition) {
      return;
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, () => args[argIndex++]);

    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {} // eslint-disable-line no-empty
  };
}

module.exports = warning;
