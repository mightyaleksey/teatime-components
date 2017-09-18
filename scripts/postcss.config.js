'use strict';

module.exports = () => ({
  plugins: [
    require('postcss-url')({
      inline: {
        encodeType: 'encodeURIComponent',
      },
      url: 'inline',
    }),
    require('autoprefixer'),
  ],
});
