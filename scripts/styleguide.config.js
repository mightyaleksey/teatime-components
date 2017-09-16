'use strict';

const {basename, resolve} = require('path');
const resolveTo = (...args) => resolve(__dirname, '..', ...args);

module.exports = {
  title: 'Teatime Components',
  components: '../components/*/*.js',
  getComponentPathLine: componentPath =>
    `import {${basename(componentPath, '.js')}} from 'teatime-components';`,
  // serverHost: 'localhost',
  serverPort: 3000,
  // styleguideDir

  theme: {
    color: {
      sidebarBackground: '#f5f4f3',
    },
    fontFamily: {
      base: '"Lato", sans-serif',
    },
  },

  require: [
    resolveTo('scripts/styleguide.css'),
    resolveTo('scripts/styleguide.js'),
  ],

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            resolveTo('components'),
            resolveTo('lib'),
          ],
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
          test: /\.css$/,
          include: resolveTo('scripts'),
          use: [
            'style-loader',
            'css-loader',
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
