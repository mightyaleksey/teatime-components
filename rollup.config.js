import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import glob from 'glob/sync';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'component/Button/index.js',
  format: 'cjs',
  plugins: [
    babel({
      exclude: [
        'node_modules/**',
      ],
      plugins: [
        'flow-react-proptypes',
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
    commonjs({
      exclude: [
        '*.css',
      ],
    }),
    resolve(),
  ],
  dest: 'dist/teatime-components.rollup.js',
  external: glob('component/**/*.css', {absolute: true})
    .concat(
      'classnames',
      'prop-types',
      'react'
    ),
};
