'use strict';

var counter = 0;

exports.genericId = genericId;

// genericId :: any -> string
function genericId() {
  return `_teatime${++counter}`;
}
