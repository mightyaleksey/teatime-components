'use strict';

let counter = 0;

exports.genericId = genericId;

// genericId :: any -> string
function genericId() {
  return `_teatime${++counter}`;
}
