'use strict';

const {DefinePlugin, LoaderOptionsPlugin, optimize} = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const resolveTo = require('./resolveTo');

module.exports = [
  {
    entry: resolveTo('index'),

    output: {
      filename: 'teatime.js',
      library: 'Teatime',
      libraryTarget: 'var',
      path: resolveTo('dist'),
    },

    devtool: false,
    target: 'web',
    node: {
      Buffer: false,
    },

    module: {
      rules: [
        {
          test: /\.js$/i,
          include: new RegExp(`${resolveTo()}/(component|decorator|lib|view)/`),
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {modules: false}],
              'react',
              'stage-2',
            ],
          },
        },
        {
          test: /\.css$/i,
          include: resolveTo('style'),
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[hash:base64:5]',
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: resolveTo('.config/postcss.config.js'),
              },
            },
          ],
        },
      ],
    },

    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  {
    entry: resolveTo('index'),

    output: {
      filename: 'teatime.min.js',
      library: 'Teatime',
      libraryTarget: 'var',
      path: resolveTo('dist'),
    },

    devtool: false,
    target: 'web',
    node: {
      Buffer: false,
      process: false,
    },

    plugins: [
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new LoaderOptionsPlugin({
        debug: false,
        minimize: true,
      }),
      new optimize.UglifyJsPlugin({
        comments: false,
        compress: {
          warnings: false,
        },
      }),
      new Visualizer({
        filename: 'stats.min.html',
      }),
    ],

    module: {
      loaders: [
        {
          test: /\.js$/i,
          include: new RegExp(`${resolveTo()}/(component|decorator|lib|view)/`),
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {modules: false}],
              'react',
              'react-optimize',
              'stage-2',
            ],
          },
        },
        {
          test: /\.css$/i,
          include: resolveTo('style'),
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[hash:base64:5]',
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: resolveTo('.config/postcss.config.js'),
              },
            },
          ],
        },
      ],
    },

    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
];
