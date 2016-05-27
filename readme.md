teatime-components
==================

React components + CSS Modules


## Philosophy

- What can be done with styles, should be done with styles.
- No global dependencies neither in JS nor in CSS.


## Features

- Universal components. Unlikely [BEM](https://en.bem.info/) there is a possibility to provide same styles to the different components.
- Possibility to mix particular styles without CSS Modules using `className` property (see [React CSS Modules](https://github.com/gajus/react-css-modules#the-implementation) for the details).

## Requirements

- [CSS Modules](https://github.com/css-modules/css-modules)
- [React](https://facebook.github.io/react/)
- [React CSS Modules](https://github.com/gajus/react-css-modules)
- [babel](https://babeljs.io/)
  - [preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/)
  - [preset-react](http://babeljs.io/docs/plugins/preset-react/)
  - [preset-stage-2](http://babeljs.io/docs/plugins/preset-stage-2/)
- [PostCSS](https://github.com/postcss/postcss)
  - [autoprefixer](https://github.com/postcss/autoprefixer)


## Links

- Component Specs and Lifecycle: https://facebook.github.io/react/docs/component-specs.html
- React event system: http://facebook.github.io/react/docs/events.html
- React forms: https://facebook.github.io/react/docs/forms.html
  - React controlled components: https://facebook.github.io/react/docs/forms.html#controlled-components
- React prop validation: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
- React supported attributes: https://facebook.github.io/react/docs/tags-and-attributes.html#supported-attributes


## License

> The MIT License
