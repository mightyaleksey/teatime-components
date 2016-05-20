'use strict';

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const glob = require('glob').sync;

module.exports = {
  entry: glob('demo/*.json', {realpath: true}),

  output: {
    filename: '[name].js',
    path: resolve('preview'),
  },

  module: {
    loaders: [
      {
        test: /\.js/i,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json/i,
        loader: './demo/demo-loader!json',
      },
      {
        test: /\.css$/i,
        loader: 'style!css?modules&localIdentName=[name]--[local]!postcss',
      },
      {
        test: /\.svg$/i,
        loader: 'svg-url',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      inject: 'body',
      hash: true,
    }),
    new NpmInstallPlugin({
      cacheMin: 999999,
      save: true,
      saveDev: true,
    }),
  ],

  postcss: () => [
    require('postcss-url')({url: 'inline'}),
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],
};
