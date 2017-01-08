'use strict';

const {compose, curry, isArray} = require('../lib/dash');
const {dirname} = require('path');
const {version} = require('../package');
const merge = require('./merge');
const resolveTo = require('./resolveTo');

const replace = curry((reg, sub, s) => s.replace(reg, sub));
const rootDir = dirname(__dirname);

const minorVersion = version.split('.').slice(0, 2).join('.');

module.exports = {
  title: `${version} / Teatime Components`,
  getExampleFilename: compose(
    replace(/\.js$/, '.md'),
    replace(/\/component\//, '/\.story/')),

  sections: [
    {
      name: 'Components',
      components: resolveTo('component/*.js'),
    },
    {
      name: 'Dimensions',
      content: resolveTo('.story/docs/dimensions.md'),
    },
  ],

  updateWebpackConfig: merge({
    entry: [
      resolveTo('.styleguidist/common.css'),
    ],

    module: {
      loaders: [
        {
          test: /\.js$/i,
          include: new RegExp(`${rootDir}/(component|decorator|lib|view)/`),
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

    postcss: [
      require('postcss-url')({url: 'inline'}),
      require('autoprefixer'),
    ],
  }),

  styleguideDir: resolveTo(`docs/${minorVersion}`),
};
