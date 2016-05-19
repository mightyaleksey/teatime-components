'use strict';

var counter = 0;

exports.generateId = generateId;

/**
 * @return {string}
 */
function generateId() {
  return `_teatime${++counter}`;
}
