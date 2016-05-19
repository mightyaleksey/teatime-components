'use strict';

var counter = 0;

/**
 * @return {string}
 */
exports.generateId = function generateId() {
  return `_teatime${++counter}`;
};
