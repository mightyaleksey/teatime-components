'use strict';

const { compose, curry, isArray } = require('../lib/dash');
const { dirname, resolve } = require('path');
const mergeWith = require('lodash.mergewith');

const merge = curry((b, a) => mergeWith(a, b, customizer));
const replace = curry((reg, sub, s) => s.replace(reg, sub));
const rootDir = dirname(__dirname);

module.exports = {
  title: 'Teatime Components',
  components: '../component/*.js',
  getComponentPathLine: replace(/^\.\.\//, ''),
  getExampleFilename: compose(
    replace(/\.js$/, '.md'),
    replace(/\/component\//, '/story/')),
  updateWebpackConfig: merge({
    entry: [
      resolve(__dirname, 'common.css'),
    ],

    module: {
      loaders: [
        {
          test: /\.js$/i,
          include: new RegExp(`${rootDir}/(component|lib|view)/`),
          loader: 'babel',
        },
        {
          test: /\.css$/i,
          include: resolve('style'),
          loader: 'style!css?modules&localIdentName=[name]--[local]&importLoaders=1!postcss',
        },
        {
          test: /\.css$/i,
          include: __dirname,
          loader: 'style!css',
        },
      ],
    },

    postcss: [
      require('postcss-url')({url: 'inline'}),
      require('autoprefixer'),
    ],
  }),
  styleguideDir: '../docs',
};

function customizer(obj, src) {
  if (isArray(obj)) return obj.concat(src);
}
