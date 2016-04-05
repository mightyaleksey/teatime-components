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
        loader: 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0&plugins[]=react-require',
      },
      {
        test: /\.css$/i,
        loader: 'style!css?modules&localIdentName=[name]--[local]!postcss',
      },
      {
        test: /\.jade$/i,
        loader: 'jade',
      },
    ],
  },

  postcss: [
    require('autoprefixer'),
  ],

  plugins: [
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
