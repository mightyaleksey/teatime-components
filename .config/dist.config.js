'use strict';

const {DefinePlugin, optimize} = require('webpack');
const {assign} = require('../lib/dash');
const resolveTo = require('./resolveTo');

const common = {
  module: {
    loaders: [
      {
        test: /\.js$/i,
        include: new RegExp(`${resolveTo()}/(component|decorator|lib|view)/`),
        loader: 'babel',
      },
      {
        test: /\.css$/i,
        include: resolveTo('style'),
        loader: 'style!css?modules&localIdentName=[name]--[local]&importLoaders=1!postcss',
      },
      {
        test: /\.css$/i,
        include: resolveTo('.styleguidist'),
        loader: 'style!css',
      },
    ],
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-url')({url: 'inline'}),
  ],
};

module.exports = [
  assign(common, {
    entry: resolveTo('index'),

    output: {
      filename: 'teatime.js',
      library: 'Teatime',
      libraryTarget: 'var',
      path: resolveTo('dist'),
    },
  }),
  assign(common, {
    entry: resolveTo('index'),

    output: {
      filename: 'teatime.min.js',
      library: 'Teatime',
      libraryTarget: 'var',
      path: resolveTo('dist'),
    },

    plugins: [
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new optimize.UglifyJsPlugin({
        compress:{
          warnings: false,
        },
      }),
    ],
  }),
];
