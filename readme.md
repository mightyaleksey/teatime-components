teatime-components
==================

A set of React Components + CSS Modules :heart:

See the component's examples at http://sullenor.github.io/teatime-components/


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
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: resolve('postcss.config.js'),
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

```javascript
'use strict';
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-url')({url: 'inline'}),
  ],
};
```


#### Example

```bash
.
├── dist/
├── index.html
├── main.js
├── package.json
├── postcss.config.js
└── webpack.config.js
```

*package.json*

```json
{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {
    "autoprefixer": "^6.7.7",
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.7",
    "babel-preset-latest": "^6.22.0",
    "babel-preset-react": "^6.22.0",
    "css-loader": "^0.27.1",
    "postcss-loader": "^1.3.2",
    "postcss-url": "^5.1.2",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "style-loader": "^0.13.2",
    "teatime-components": "^0.8.12",
    "webpack": "^2.2.1"
  }
}
```

*webpack.config.js*

```javascript
const {resolve} = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel',
        options: {
          presets: [
            'latest',
            'react',
          ],
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: resolve('postcss.config.js'),
            },
          },
        ],
      },
    ],
  },

  entry: resolve('main'),
  output: {
    filename: 'index.js',
    path: resolve('dist'),
  },
};
```

*postcss.config.js*

```javascript
'use strict';

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-url')({url: 'inline'}),
  ],
};
```

*main.js*

```javascript
import {Button} from 'teatime-components';
import {render} from 'react-dom';
import React from 'react';

render((
  <Button theme='action'>
    Make Awesome
  </Button>
), document.getElementById('entry'));
```

*index.html*

```html
<!doctype html>
<html lang='en'>
<head>
  <meta charset="utf-8">
  <title>Awesome Button</title>
</head>
<body>
  <div id='entry'></div>

  <script src='dist/index.js'></script>
</body>
</html>
```


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
