'use strict';

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-url')({url: 'inline'}),
  ],
};
