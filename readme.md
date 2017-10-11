teatime-components
==================

A set of React Components + CSS Modules :heart:

See the component's examples at http://sullenor.github.io/teatime-components/

👋 In case you are going to update to React@16 — check the necessity of adding polyfills: https://reactjs.org/docs/javascript-environment-requirements.html


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

### Using single-file distributives

#### Installation

Download the distributive via `curl` for example:

```bash
curl -O https://raw.githubusercontent.com/sullenor/teatime-components/0.8.14/dist/teatime.js
```

or the minified version:

```bash
curl -O https://raw.githubusercontent.com/sullenor/teatime-components/0.8.14/dist/teatime.min.js
```


#### Configutation

Simply add `react` and `react-dom` scripts into your html page and the downloaded version of the `teatime-components` after:

```html
<script src='https://unpkg.com/react@15/dist/react.js'></script>
<script src='https://unpkg.com/react-dom@15/dist/react-dom.js'></script>
<script src='teatime.js'></script>
```

or the minified version:

```html
<script src='https://unpkg.com/react@15/dist/react.min.js'></script>
<script src='https://unpkg.com/react-dom@15/dist/react-dom.min.js'></script>
<script src='teatime.min.js'></script>
```


#### Example

https://jsfiddle.net/r0byq6d8/

```html
<!doctype html>
<html lang='en'>
<head>
  <meta charset="utf-8">
  <title>Awesome Button</title>
  <script src='https://unpkg.com/react@15/dist/react.min.js'></script>
  <script src='https://unpkg.com/react-dom@15/dist/react-dom.min.js'></script>
  <script src='https://rawgit.com/sullenor/teatime-components/master/dist/teatime.min.js'></script>
</head>
<body>
  <div id='entry'></div>

  <script type='text/javascript'>
    const createElement = React.createElement;
    const render = ReactDOM.render;

    render(createElement(Teatime.Button, {theme: 'action'}, 'Make Awesome'),
      document.getElementById('entry'));
  </script>
</body>
</html>
```


### Using with compilation

**Warning**: Despite the fact that the published code is compatible with ECMAScript 5, it is highly recommended to include the [babel-polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill) for the ECMAScript 6 constructor's basic methods (like `String.startsWith` and etc.).


#### Installation

Using `npm` do:

```bash
npm install teatime-components
```


#### Configutation

Using `webpack` do:

```javascript
const {resolve} = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },

  entry: '...',
  output: {
    filename: 'index.js',
    path: resolve('dist'),
  },
};
```


#### Example

See [examples/webpack-setup](examples/webpack-setup).


#### Tips

In order to remove various test helpers, which you don't need in your production environment, you should add the Webpack [DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin) to the plugins section. It will also decrease the bundle size and provide some performance. Configuration example:

```javascript
plugins: [
  // ...
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
    },
  }),
],
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
