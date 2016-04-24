const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
  entry: resolve('templates/browser'),

  output: {
    filename: 'index.js',
    path: resolve('demo'),
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        loader: 'babel?presets[]=es2015&presets[]=stage-0',
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]--[local]!postcss'),
      },
      {
        test: /\.svg$/i,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.jade$/i,
        loader: 'jade',
      },
    ],
  },

  postcss: [
    require('postcss-url')({url: 'inline'}),
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],

  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
    new HtmlPlugin({
      title: 'demo',
      filename: 'index.html',
      template: 'templates/page.jade',
      hash: true,
    }),
    new NpmInstallPlugin({
      saveDev: true,
      saveExact: true,
    }),
  ],
};
