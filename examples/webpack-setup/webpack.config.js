'use strict';

const {resolve} = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },

  entry: resolve('main.js'),
  output: {
    filename: 'index.js',
    path: resolve('dist'),
  },
};
