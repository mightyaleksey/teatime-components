'use strict';

const {resolve} = require('path');
module.exports = (...args) => resolve(__dirname, '../', ...args);
