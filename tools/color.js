'use strict';

exports.pureHex = pureHex;

/**
 * @param  {string} hex #cccccc
 * @return {string}      cccccc
 */
function pureHex(hex) {
  return hex.replace('#', '');
}
