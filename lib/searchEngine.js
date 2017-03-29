'use strict';

const fuzzysearch = require('fuzzysearch');

exports.fuzzy = fuzzy;
exports.includes = includes;
exports.startsWith = startsWith;

// includes :: a -> b -> bool
function fuzzy(needle, haystack) {
  return fuzzysearch(needle.toLowerCase(), haystack.toLowerCase());
}

// includes :: a -> b -> bool
function includes(needle, haystack) {
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1;
}

// startsWith :: a -> b -> bool
function startsWith(needle, haystack) {
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) === 0;
}
