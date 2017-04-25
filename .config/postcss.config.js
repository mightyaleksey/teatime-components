'use strict';

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-url')({inline: 'encodeURIComponent', url: 'inline'}),
  ],
};
