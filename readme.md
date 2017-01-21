teatime-components
==================

React Components + CSS Modules :heart:


## Philosophy

- What can be done with styles, should be done with styles.
- No global dependencies neither in JS nor in CSS.


## Features

- Possibility to mix particular styles without CSS Modules using `className` property.
- In case you want to overwrite the defined styles you may provide the `styles` property with custom class names or use the global referers (see the usage without CSS Modules).
- Predictability.


## Requirements

- [React](https://facebook.github.io/react/)
- [React CSS Modules](https://github.com/gajus/react-css-modules)
- [PostCSS](https://github.com/postcss/postcss)
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [postcss-url](https://github.com/postcss/postcss-url) *(for better experience)*


## Usage

To use any component you should require it using commonJS syntax (or es6 modules). But before that you should configure the compiler. See the the webpack examples below.


### Standalone builds

In case you want avoid the compile step there are single-file distributions in the `dist` folder.

```html
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
<script src="https://raw.githubusercontent.com/sullenor/teatime-components/master/dist/teatime.js"></script>
```

or

```html
<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
<script src="https://raw.githubusercontent.com/sullenor/teatime-components/master/dist/teatime.min.js"></script>
```


### Using with CSS Modules

```javascript
// webpack.config.js
const {resolve} = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/i,
        loader: 'style!css?modules&importLoaders=1!postcss',
      },
    ],
  },

  postcss: [
    require('postcss-url')({url: 'inline'}),
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],

  entry: '...',
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
};
```


### Using without CSS Modules

In case you don't want to use CSS Modules and want to have a possibility to adjust the inner markup with global refers (human friendly class names) you may adjust class name generation with `localIdentName` parameter. See the example below.

```javascript
// webpack.config.js
const {resolve} = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/i,
        loader: 'style!css?modules&localIdentName=[name]--[local]&importLoaders=1!postcss',
      },
    ],
  },

  postcss: [
    require('postcss-url')({url: 'inline'}),
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],

  entry: '...',
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
};
```


### Tips

In order to remove various test helpers, which you don't need in your production environment, you should add the Webpack [DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin) to the plugins section. It will also decrease the bundle size and provide some performance. Configuration example:

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

Start development server:

```bash
$ npm start
```

Build documentation:

```bash
$ npm run docs
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
