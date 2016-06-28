teatime-components
==================

React Components + CSS Modules :heart:


## Philosophy

- What can be done with styles, should be done with styles.
- No global dependencies neither in JS nor in CSS.


## Features

- Universal components. Unlikely [BEM](https://en.bem.info/) there is a possibility to provide same styles to the different components.
- Possibility to mix particular styles without CSS Modules using `className` property (see [React CSS Modules](https://github.com/gajus/react-css-modules#the-implementation) for the details).
- Predictability.


## Requirements

- [React](https://facebook.github.io/react/)
- [React CSS Modules](https://github.com/gajus/react-css-modules)
- [babel](https://babeljs.io/)
  - [preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/)
  - [preset-react](http://babeljs.io/docs/plugins/preset-react/)
  - [preset-stage-2](http://babeljs.io/docs/plugins/preset-stage-2/)
- [PostCSS](https://github.com/postcss/postcss)
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [postcss-url](https://github.com/postcss/postcss-url) *(for better experience)*


## Webpack Configuration Example

```javascript
// webpack.config.js
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: '...',
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },

  module: {
    loaders: [
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style',
          'css?modules&localIdentName=[name]--[local]&importLoaders=1!postcss'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new NpmInstallPlugin({
      cacheMin: 999999,
      save: true,
      saveDev: true,
    }),
  ],

  postcss: [
    require('postcss-url')({url: 'inline'}),
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],
};
```

In order to remove various test helpers, which you don't need in your production environment, you should add the Webpack  [DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin). It will also decrease the bundle size and provide some performance. Configuration example:

```javascript
plugins: [
  // ...
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
],
```


## Development

Start [Webpack dev server](https://github.com/webpack/webpack-dev-server#documentation):

```bash
$ npm start
```

Build preview:

```bash
$ npm run demo
```

Run tests:

```bash
$ npm test
```


## Reference Guides

- React Component Specs and Lifecycle: https://facebook.github.io/react/docs/component-specs.html
- React Event System: http://facebook.github.io/react/docs/events.html
- React Forms: https://facebook.github.io/react/docs/forms.html
  - React Controlled Components: https://facebook.github.io/react/docs/forms.html#controlled-components
- React Prop Validation: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
- React Supported Attributes: https://facebook.github.io/react/docs/tags-and-attributes.html#supported-attributes
- CSS Modules: https://github.com/css-modules/css-modules#css-modules
  - CSS Modules Composition: https://github.com/css-modules/css-modules#composition
  - CSS Modules Values: https://github.com/css-modules/postcss-modules-values#css-modules-values


## License

> The MIT License
