'use strict';

const {resolve} = require('path');

module.exports = {
  entry: resolve('packages/teatime-components/index'),

  output: {
    filename: 'teatime-components.webpack.js',
    // library: 'Teatime',
    // libraryTarget: 'var',
    path: resolve('dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('component'),
          resolve('lib'),
          resolve('packages'),
        ],
        options: {
          plugins: [
            'flow-react-proptypes',
          ],
          presets: [
            [
              'es2015',
              {
                loose: true,
              },
            ],
            'react',
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]--[local]',
              modules: true,
            },
          },
        ],
        include: resolve('component'),
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
};
