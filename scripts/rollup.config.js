'use strict';

const babel = require('rollup-plugin-babel');
const cssnano = require('cssnano');
const postcss = require('rollup-plugin-postcss');
const postcssModules = require('postcss-modules');

const cssExportMap = {};

module.exports = {
  plugins: [
    postcss({
      plugins: [
        cssnano(),
        postcssModules({
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens;
          },
        }),
      ],
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id];
      },
    }),

    babel({
      exclude: [
        'node_modules/**',
      ],
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
    }),
  ],
};
