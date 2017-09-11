import babel from 'rollup-plugin-babel';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

export default {
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

  input: 'components/Button/index.js',
  output: {
    file: 'packages/teatime-components/components/Button.js',
    format: 'cjs',
  },
};
