'use strict';

const {resolve} = require('path');
const resolveTo = (...args) => resolve(__dirname, '..', ...args);

module.exports = {
  components: '../components/*/*.js',
  // serverHost: 'localhost',
  serverPort: 3000,
  // styleguideDir

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: resolveTo('components'),
          loader: 'babel-loader',
          options: {
            plugins: [
              'flow-react-proptypes',
              'transform-class-properties',
            ],
            presets: [
              [
                'es2015',
                {
                  loose: true,
                  modules: false,
                },
              ],
              'react',
            ],
          },
        },
        {
          test: /\.css$/,
          include: resolveTo('components'),
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                module: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'file-loader',
        },
      ],
    },
  },
};
