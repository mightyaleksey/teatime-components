'use strict';

const pkg = require('../package');
const webpack = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {readdirSync} = require('fs');
const {resolve} = require('path');

const resolveTo = (...args) => resolve(__dirname, '..', ...args);

const components = readdirSync(resolveTo('components'))
  .reduce((map, component) => {
    map[component] = resolveTo(`components/${component}/${component}`);
    return map;
  }, {});

module.exports = {
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
              importLoaders: 1,
              module: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolveTo('scripts/postcss.config'),
              },
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
    ],
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'injectStyles',
      filename: '_[name].js',
      minChunks: Infinity,
    }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  target: 'node',
  externals: Object.keys(pkg.dependencies),

  entry: Object.assign(components, {
    injectStyles: [
      'css-loader/lib/css-base',
      'style-loader/lib/addStyles',
      'style-loader/lib/urls',
    ],
  }),
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: resolveTo('packages/teatime-components/components'),
  },
};
