var Teatime =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.Button = __webpack_require__(1);
	exports.Check = __webpack_require__(31);
	exports.CheckGroup = __webpack_require__(39);
	exports.ColorPicker = __webpack_require__(47);
	exports.Input = __webpack_require__(68);
	exports.Link = __webpack_require__(74);
	exports.Radio = __webpack_require__(93);
	exports.Select = __webpack_require__(107);
	exports.Spin = __webpack_require__(121);
	exports.Textarea = __webpack_require__(132);
	exports.Tooltip = __webpack_require__(141);
	exports.Tumbler = __webpack_require__(168);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    genericName = _require2.genericName;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);

	var cssModules = {
	  'action-l': __webpack_require__(6),
	  'action-m': __webpack_require__(12),
	  'action-s': __webpack_require__(14),
	  'link-l': __webpack_require__(16),
	  'link-m': __webpack_require__(21),
	  'link-s': __webpack_require__(23),
	  'normal-l': __webpack_require__(25),
	  'normal-m': __webpack_require__(27),
	  'normal-s': __webpack_require__(29)
	};

	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Button);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Button, [{
	    key: 'focus',
	    value: function focus() {
	      if (!this._button) return;
	      this._button.focus();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          autoFocus = _props.autoFocus,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          id = _props.id,
	          theme = _props.theme,
	          type = _props.type;
	      var css = this.css;


	      var role = theme === 'link' ? 'link' : 'button';

	      return React.createElement(
	        'button',
	        _extends({}, filterProps(this.props), {
	          autoFocus: autoFocus,
	          className: cc(css('control'), className),
	          disabled: disabled,
	          id: id,
	          ref: function ref(r) {
	            return _this2._button = r;
	          },
	          role: role,
	          type: type }),
	        children
	      );
	    }
	  }]);

	  return Button;
	}(Component);

	Button.defaultProps = {
	  size: 'm',
	  styles: cssModules,
	  theme: 'normal'
	};

	Button.propTypes = {
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object,
	  theme: PropTypes.oneOf(['action', 'link', 'normal'])
	};

	module.exports = Button;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(4),
	    compose = _require.compose,
	    isUndefined = _require.isUndefined,
	    negate = _require.negate,
	    prop = _require.prop;

	var isControlled = compose(negate(isUndefined), prop('value'));
	var whiteList = /^(?:data-|on[A-Z]|style$)/;

	exports.filterProps = filterProps;
	exports.isControlled = isControlled;
	exports.genericName = genericName;

	// filterProps :: a -> b
	function filterProps(props) {
	  var keys = Object.keys(props);
	  var length = keys.length;
	  var nextProps = {};

	  for (var j = 0; j < length; ++j) {
	    var key = keys[j];
	    if (whiteList.test(key)) nextProps[key] = props[key];
	  }

	  return nextProps;
	}

	// genericName :: object -> string -> string
	function genericName(_ref, name) {
	  var size = _ref.size,
	      _ref$styles = _ref.styles,
	      styles = _ref$styles === undefined ? {} : _ref$styles,
	      theme = _ref.theme;

	  var preset = (theme + '-' + size).replace(/-?undefined-?/, '');
	  if (!name) return styles[preset];
	  return styles[preset][name];
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var isArray = Array.isArray;

	exports.assign = curry(assign);
	exports.castArray = castArray;
	exports.compose = compose;
	exports.constant = constant;
	exports.curry = curry;
	exports.filter = curry(filter);
	exports.first = first;
	exports.groupBy = curry(groupBy);
	exports.identity = identity;
	exports.invert = invert;
	exports.isArray = isArray;
	exports.isFunction = isFunction;
	exports.isString = isString;
	exports.isUndefined = isUndefined;
	exports.map = curry(map);
	exports.mapN = curry(mapN);
	exports.negate = negate;
	exports.noop = noop;
	exports.omit = curry(omit);
	exports.prop = curry(prop);
	exports.reduce = curry(reduce);
	exports.trace = trace;

	// map :: (a -> b -> n) -> [a] -> [b]
	function mapN(f, c) {
	  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

	  if (isArray(c)) {
	    var _length = Math.min(c.length, n);
	    var _nC = Array(_length);
	    for (var i = 0; i < _length; ++i) {
	      _nC[i] = f(c[i]);
	    }return _nC;
	  }

	  var keys = Object.keys(c);
	  var length = Math.min(keys.length, n);
	  var nC = Array(length);

	  for (var j = 0; j < length; ++j) {
	    nC[j] = f(c[keys[j]]);
	  }return nC;
	}

	// assign :: a -> b -> c
	function assign(a, b) {
	  var c = {};
	  _copy(c, a);
	  _copy(c, b);
	  return c;
	}

	// _copy :: a -> b -> a
	function _copy() {
	  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var keys = Object.keys(b);
	  var length = keys.length;

	  for (var j = 0; j < length; ++j) {
	    var key = keys[j];
	    a[key] = b[key];
	  }

	  return a;
	}

	// castArray :: a -> [a]
	function castArray(a) {
	  if (isArray(a)) return a;
	  if (arguments.length === 0) return [];
	  return [a];
	}

	function compose() {
	  for (var _len = arguments.length, fn = Array(_len), _key = 0; _key < _len; _key++) {
	    fn[_key] = arguments[_key];
	  }

	  var quantity = fn.length;
	  return _compose;

	  function _compose() {
	    var index = quantity - 1;
	    var result = quantity ? fn[index].apply(this, arguments) : arguments[0];

	    if (index < 1) return result;
	    while (index--) {
	      result = fn[index].call(this, result);
	    }return result;
	  }
	}

	// constant :: a -> (_ -> a)
	function constant(a) {
	  return constantly;

	  function constantly() {
	    return a;
	  }
	}

	function curry(f) {
	  var arity = f.length;
	  return curried;

	  function curried() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    if (args.length >= arity) return f.apply(this, args);
	    return curried.bind.apply(curried, [this].concat(args));
	  }
	}

	// filter :: (a -> bool) -> [a] -> []
	function filter(f, c) {
	  return reduce(function (nC, a) {
	    if (f(a)) nC.push(a);
	    return nC;
	  }, [], c);
	}

	// first :: [a] -> a
	function first(a) {
	  return a[0];
	}

	// groupBy :: (b -> a) -> [a] -> b
	function groupBy(identity, c) {
	  return reduce(function (acc, a) {
	    var id = identity(a);

	    if (isArray(acc[id])) {
	      acc[id].push(a);
	    } else {
	      acc[id] = [a];
	    }

	    return acc;
	  }, {}, c);
	}

	// identity :: a -> a
	function identity(a) {
	  return a;
	}

	// invert :: {a: b} -> {b: a}
	function invert(c) {
	  var keys = Object.keys(c);
	  var nC = {};

	  for (var j = 0; j < keys.length; ++j) {
	    var key = keys[j];
	    nC[c[key]] = key;
	  }

	  return nC;
	}

	// isFunction :: a -> bool
	function isFunction(a) {
	  return typeof a === 'function';
	}

	// isString :: a -> bool
	function isString(a) {
	  return typeof a === 'string';
	}

	// isUndefined :: a -> bool
	function isUndefined(a) {
	  return a === undefined;
	}

	// map :: (a -> b) -> [a] -> [b]
	function map(f, c) {
	  if (isArray(c)) {
	    var _length2 = c.length;
	    var _nC2 = Array(_length2);
	    for (var i = 0; i < _length2; ++i) {
	      _nC2[i] = f(c[i]);
	    }return _nC2;
	  }

	  var keys = Object.keys(c);
	  var length = keys.length;
	  var nC = Array(length);

	  for (var j = 0; j < length; ++j) {
	    nC[j] = f(c[keys[j]]);
	  }return nC;
	}

	// negate :: (a -> b) -> !b
	function negate(f) {
	  return _negate;

	  function _negate() {
	    return !f.apply(this, arguments);
	  }
	}

	// noop :: a -> undefined
	function noop() {}

	// omit :: [a] -> {a} -> {};
	function omit(props, c) {
	  var keys = Object.keys(c);
	  var list = invert(props);
	  var nC = {};

	  for (var j = 0; j < keys.length; ++j) {
	    var key = keys[j];
	    if (!list.hasOwnProperty(key)) nC[key] = c[key];
	  }

	  return nC;
	}

	// prop :: a -> (b -> b[a])
	function prop(name, a) {
	  return a[name];
	}

	// reduce :: (b -> a -> b) -> b -> [a] -> b
	function reduce(f, acc, c) {
	  var nC = acc;

	  if (isArray(c)) {
	    var _length3 = c.length;
	    for (var i = 0; i < _length3; ++i) {
	      nC = f(nC, c[i]);
	    }return nC;
	  }

	  var keys = Object.keys(c);
	  var length = keys.length;

	  for (var j = 0; j < length; ++j) {
	    nC = f(nC, c[keys[j]]);
	  }return nC;
	}

	// trace :: a -> a
	function trace(a) {
	  console.log(a); // eslint-disable-line no-console
	  return a;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-action-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-action-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".button-action-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-action-l--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(9).locals["action"] + " " + __webpack_require__(10).locals["l"] + ""
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".button--selector\n{\n  /* the common selector */\n}\n\n.button--control\n{\n  display: inline-block;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none;\n\n  border-radius: 3px;\n  outline: none;\n\n  -webkit-tap-highlight-color: transparent;\n}\n\n.button--control::-moz-focus-inner\n{\n  margin: 0;\n  padding: 0;\n\n  border: 0;\n}\n\n/* action */\n\n@-webkit-keyframes button--flicker\n{\n  from,\n  to\n  {\n    background-color: #fc0;\n  }\n\n  40%,\n  60%\n  {\n    background-color: #ffe066;\n  }\n}\n\n@keyframes button--flicker\n{\n  from,\n  to\n  {\n    background-color: #fc0;\n  }\n\n  40%,\n  60%\n  {\n    background-color: #ffe066;\n  }\n}\n\n.button--action\n{\n\n  -webkit-transition: background .1s ease-out;\n\n  transition: background .1s ease-out;\n\n  color: black;\n  border: 1px solid #ffdb4d;\n  background: #ffdb4d;\n}\n\n.button--action:hover\n{\n  border: 1px solid #ffd633;\n  background: #ffd633;\n}\n\n.button--action:focus\n{\n  -webkit-animation: button--flicker 1s infinite linear;\n          animation: button--flicker 1s infinite linear;\n}\n\n.button--action:active\n{\n  background: #fc0;\n}\n\n/* normal */\n\n.button--normal\n{\n\n  -webkit-transition: border .1s ease-out,box-shadow .1s ease-out;\n\n  transition: border .1s ease-out,box-shadow .1s ease-out;\n\n  color: black;\n  border: 1px solid #ccc;\n  background: white;\n}\n\n.button--normal:hover\n{\n  border: 1px solid #b3b3b3;\n}\n\n.button--normal:focus\n{\n  border: 1px solid #ffdb4d;\n  box-shadow: inset 0 0 0 1px #ffdb4d;\n}\n\n.button--normal:active\n{\n  background: #f6f5f3;\n}\n\n.button--control:disabled\n{\n  cursor: default;\n\n  color: rgba(0,0,0,.5);\n  border: 1px solid #ebebeb;\n  background: #ebebeb;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "button--selector",
		"control": "button--control",
		"action": "button--action button--control",
		"flicker": "button--flicker",
		"normal": "button--normal button--control"
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".button-size--l\n{\n  padding: 0 14px;\n\n  font: 15px/30px arial,sans-serif;\n}\n\n.button-size--m\n{\n  padding: 0 12px;\n\n  font: 13px/26px arial,sans-serif;\n}\n\n.button-size--s\n{\n  padding: 0 9px;\n\n  font: 13px/22px arial,sans-serif;\n}\n", ""]);

	// exports
	exports.locals = {
		"l": "button-size--l",
		"m": "button-size--m",
		"s": "button-size--s"
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-action-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-action-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".button-action-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-action-m--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(9).locals["action"] + " " + __webpack_require__(10).locals["m"] + ""
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-action-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-action-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".button-action-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-action-s--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(9).locals["action"] + " " + __webpack_require__(10).locals["s"] + ""
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-link-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-link-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(19), undefined);
	exports.i(__webpack_require__(20), undefined);

	// module
	exports.push([module.id, ".button-link-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-link-l--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(18).locals["control"] + " " + __webpack_require__(19).locals["control"] + " " + __webpack_require__(20).locals["l"] + ""
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".link--selector\n{\n  /* the common selector */\n}\n\n.link--control,\n.link--control:visited\n{\n  margin: 0;\n  padding: 0;\n\n  cursor: pointer;\n  -webkit-transition: color .15s ease-out;\n  transition: color .15s ease-out;\n  text-decoration: none;\n\n  color: #04b;\n\n  line-height: 1.2;\n}\n\n.link--control:hover\n{\n  color: #c00;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "link--selector",
		"control": "link--control"
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".link-button--control\n{\n  border: 0;\n  outline: none;\n  background: transparent;\n\n  -webkit-tap-highlight-color: transparent;\n}\n\n.link-button--control:focus\n{\n  /* todo */\n}\n\n.link-button--control:disabled\n{\n  cursor: default;\n\n  color: rgba(0,0,0,.5);\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-button--control"
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".link-size--l\n{\n  font: 15px arial,sans-serif;\n}\n\n.link-size--m\n{\n  font: 13px arial,sans-serif;\n}\n\n.link-size--s\n{\n  font: 13px arial,sans-serif;\n}\n", ""]);

	// exports
	exports.locals = {
		"l": "link-size--l",
		"m": "link-size--m",
		"s": "link-size--s"
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-link-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-link-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(19), undefined);
	exports.i(__webpack_require__(20), undefined);

	// module
	exports.push([module.id, ".button-link-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-link-m--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(18).locals["control"] + " " + __webpack_require__(19).locals["control"] + " " + __webpack_require__(20).locals["m"] + ""
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-link-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-link-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(19), undefined);
	exports.i(__webpack_require__(20), undefined);

	// module
	exports.push([module.id, ".button-link-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-link-s--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(18).locals["control"] + " " + __webpack_require__(19).locals["control"] + " " + __webpack_require__(20).locals["s"] + ""
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-normal-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-normal-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".button-normal-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-normal-l--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(9).locals["normal"] + " " + __webpack_require__(10).locals["l"] + ""
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-normal-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-normal-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".button-normal-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-normal-m--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(9).locals["normal"] + " " + __webpack_require__(10).locals["m"] + ""
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-normal-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./button-normal-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".button-normal-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "button-normal-s--control " + __webpack_require__(9).locals["selector"] + " " + __webpack_require__(9).locals["normal"] + " " + __webpack_require__(10).locals["s"] + ""
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    genericName = _require2.genericName;

	var _require3 = __webpack_require__(32),
	    genericId = _require3.genericId;

	var _require4 = __webpack_require__(4),
	    isUndefined = _require4.isUndefined,
	    noop = _require4.noop;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);

	var cssModules = {
	  l: __webpack_require__(33),
	  m: __webpack_require__(37)
	};

	var Check = function (_Component) {
	  _inherits(Check, _Component);

	  function Check(props) {
	    _classCallCheck(this, Check);

	    var _this = _possibleConstructorReturn(this, (Check.__proto__ || Object.getPrototypeOf(Check)).call(this, props));

	    _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    };

	    _this._onChange = function (e) {
	      var _e$target = e.target,
	          checked = _e$target.checked,
	          value = _e$target.value;

	      _this.props.onChange(e, { checked: checked, value: value });
	    };

	    _this.state = {
	      id: props.id || genericId()
	    };
	    return _this;
	  }

	  _createClass(Check, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        id: isUndefined(nextProps.id) ? this.state.id : nextProps.id
	      });
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this._check) return;
	      this._check.focus();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = this.props.className;
	      var css = this.css;


	      return React.createElement(
	        'span',
	        _extends({}, filterProps(this.props), {
	          className: cc(css('wrapper'), className),
	          onChange: void 0 }),
	        this.renderInput(),
	        this.renderControl(),
	        this.renderLabel()
	      );
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput() {
	      var _this2 = this;

	      var _props = this.props,
	          checked = _props.checked,
	          defaultChecked = _props.defaultChecked,
	          disabled = _props.disabled,
	          name = _props.name,
	          value = _props.value;
	      var id = this.state.id;
	      var css = this.css;


	      return React.createElement('input', {
	        checked: checked,
	        className: css('native'),
	        defaultChecked: defaultChecked,
	        disabled: disabled,
	        id: id,
	        name: name,
	        onChange: this._onChange,
	        ref: function ref(r) {
	          return _this2._check = r;
	        },
	        type: 'checkbox',
	        value: value });
	    }
	  }, {
	    key: 'renderControl',
	    value: function renderControl() {
	      var _props2 = this.props,
	          children = _props2.children,
	          hasLabel = _props2.hasLabel,
	          label = _props2.label;
	      var id = this.state.id;
	      var css = this.css;


	      var text = isUndefined(label) ? children : label;

	      return React.createElement('label', {
	        children: hasLabel ? void 0 : text,
	        className: css('control'),
	        htmlFor: id });
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      if (!this.props.hasLabel) return null;

	      var _props3 = this.props,
	          children = _props3.children,
	          label = _props3.label;
	      var id = this.state.id;
	      var css = this.css;


	      var text = isUndefined(label) ? children : label;

	      return React.createElement('label', {
	        children: text,
	        className: css('label'),
	        htmlFor: id });
	    }
	  }]);

	  return Check;
	}(Component);

	Check.defaultProps = {
	  hasLabel: true,
	  onChange: noop,
	  size: 'm',
	  styles: cssModules
	};

	Check.propTypes = {
	  hasLabel: PropTypes.bool,
	  label: PropTypes.string,
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  size: PropTypes.oneOf(['l', 'm']),
	  styles: PropTypes.object
	};

	module.exports = Check;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	var counter = 0;

	exports.genericId = genericId;

	// genericId :: any -> string
	function genericId() {
	  return '_teatime' + ++counter;
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./check-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./check-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(35), undefined);
	exports.i(__webpack_require__(36), undefined);

	// module
	exports.push([module.id, ".check-l--wrapper\n{\n}\n\n.check-l--native\n{\n}\n\n.check-l--control\n{\n}\n\n.check-l--label\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "check-l--wrapper " + __webpack_require__(35).locals["selector"] + " " + __webpack_require__(35).locals["wrapper"] + " " + __webpack_require__(36).locals["wrapper-l"] + "",
		"native": "check-l--native " + __webpack_require__(35).locals["native"] + " " + __webpack_require__(36).locals["native-l"] + "",
		"control": "check-l--control " + __webpack_require__(35).locals["control"] + " " + __webpack_require__(36).locals["control-l"] + "",
		"label": "check-l--label " + __webpack_require__(35).locals["label"] + ""
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".check--selector\n{\n  /* the common selector */\n}\n\n.check--wrapper\n{\n  position: relative;\n\n  display: inline-block;\n\n  color: black;\n}\n\n.check--native\n{\n  position: absolute;\n\n  margin: 0;\n\n  opacity: 0;\n  border: 0;\n  outline: 0;\n}\n\n.check--control\n{\n  position: relative;\n\n  display: inline-block;\n\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: background .1s ease-out,box-shadow .1s ease-out;\n  transition: background .1s ease-out,box-shadow .1s ease-out;\n\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  background: white;\n  box-shadow: inset 0 0 0 1px #ccc;\n\n  font: inherit;\n  line-height: normal;\n\n  -webkit-tap-highlight-color: transparent;\n}\n\n.check--control:hover\n{\n  box-shadow: inset 0 0 0 1px #b3b3b3;\n}\n\n.check--control:active\n{\n  background: #f6f5f3;\n}\n\n.check--control:before\n{\n  visibility: hidden;\n\n  content: '\\A0';\n}\n\n.check--control:after\n{\n  position: absolute;\n\n  display: block;\n  visibility: hidden;\n\n  content: '';\n  -webkit-transition: bottom .05s ease-out,opacity .05s ease-out,visibility 0s .05s;\n  transition: bottom .05s ease-out,opacity .05s ease-out,visibility 0s .05s;\n\n  opacity: 0;\n}\n\n.check--label\n{\n  margin: 0 0 0 .45em;\n\n  font: inherit;\n  line-height: normal;\n}\n\n.check--native:checked + .check--control\n{\n  background: #ffeba0;\n  box-shadow: inset 0 0 0 1px #ccbd80;\n}\n\n.check--native:checked + .check--control:after\n{\n  visibility: visible;\n\n  -webkit-transition: bottom .05s ease-out,opacity .05s ease-out;\n\n  transition: bottom .05s ease-out,opacity .05s ease-out;\n\n  opacity: 1;\n}\n\n.check--native:focus + .check--control\n{\n  box-shadow: inset 0 0 0 2px #ffdb4d;\n}\n\n.check--native:disabled + .check--control\n{\n  cursor: default;\n\n  background: #ebebeb;\n  box-shadow: none;\n}\n\n.check--native:disabled + .check--control:after,\n.check--native:disabled ~ .check--label\n{\n  opacity: .5;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "check--selector",
		"wrapper": "check--wrapper",
		"native": "check--native",
		"control": "check--control",
		"label": "check--label"
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* size m */\n\n.check-size--wrapper-m\n{\n  font: 13px/1.2 arial,sans-serif;\n}\n\n.check-size--control-m\n{\n  width: 14px;\n  height: 14px;\n}\n\n.check-size--control-m:after\n{\n  bottom: 8px;\n  left: 2px;\n\n  width: 15px;\n  height: 16px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2015%2016%22%3E%3Cpath%20d%3D%22M13.512.453L5.475%2012.478%201.708%208.28.667%209.605l4.936%205.453%209.119-13.445z%22%2F%3E%3C%2Fsvg%3E) 0 0 no-repeat;\n}\n\n.check-size--native-m:checked + .check-size--control-m:after\n{\n  bottom: 3px;\n}\n\n/* size l */\n\n.check-size--wrapper-l\n{\n  font: 15px/1.2 arial,sans-serif;\n}\n\n.check-size--control-l\n{\n  width: 17px;\n  height: 17px;\n}\n\n.check-size--control-l:after\n{\n  bottom: 10px;\n  left: 3px;\n\n  width: 16px;\n  height: 17px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2217%22%20viewBox%3D%220%200%2016%2017%22%3E%3Cpath%20d%3D%22M14.381.147l-8.79%2013.151-4.119-4.591-1.139%201.45%205.398%205.962%209.973-14.703z%22%2F%3E%3C%2Fsvg%3E) 0 0 no-repeat;\n}\n\n.check-size--native-l:checked + .check-size--control-l:after\n{\n  bottom: 3px;\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper-m": "check-size--wrapper-m",
		"control-m": "check-size--control-m",
		"native-m": "check-size--native-m",
		"wrapper-l": "check-size--wrapper-l",
		"control-l": "check-size--control-l",
		"native-l": "check-size--native-l"
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./check-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./check-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(35), undefined);
	exports.i(__webpack_require__(36), undefined);

	// module
	exports.push([module.id, ".check-m--wrapper\n{\n}\n\n.check-m--native\n{\n}\n\n.check-m--control\n{\n}\n\n.check-m--label\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "check-m--wrapper " + __webpack_require__(35).locals["selector"] + " " + __webpack_require__(35).locals["wrapper"] + " " + __webpack_require__(36).locals["wrapper-m"] + "",
		"native": "check-m--native " + __webpack_require__(35).locals["native"] + " " + __webpack_require__(36).locals["native-m"] + "",
		"control": "check-m--control " + __webpack_require__(35).locals["control"] + " " + __webpack_require__(36).locals["control-m"] + "",
		"label": "check-m--label " + __webpack_require__(35).locals["label"] + ""
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(4),
	    assign = _require2.assign,
	    map = _require2.map,
	    noop = _require2.noop;

	var _require3 = __webpack_require__(3),
	    filterProps = _require3.filterProps,
	    genericName = _require3.genericName,
	    isControlled = _require3.isControlled;

	var Box = __webpack_require__(40);
	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);
	var chunk = __webpack_require__(41);

	var cssModules = {
	  l: __webpack_require__(42),
	  m: __webpack_require__(45)
	};

	var CheckGroup = function (_Component) {
	  _inherits(CheckGroup, _Component);

	  function CheckGroup(props) {
	    _classCallCheck(this, CheckGroup);

	    var _this = _possibleConstructorReturn(this, (CheckGroup.__proto__ || Object.getPrototypeOf(CheckGroup)).call(this, props));

	    _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    };

	    _this.focus = noop;

	    _this._onChange = function (e, _ref, position) {
	      var checked = _ref.checked;

	      var values = updateValue(_this.state.values, position, checked);

	      if (!_this._controlled) {
	        _this.setState({ values: values });
	      }

	      _this.props.onChange(e, {
	        value: mapStateToValue(_this._checkItems, values)
	      });
	    };

	    _this._controlled = isControlled(props);

	    var checkItems = _this._checkItems = calculateCheckItems(props.options);
	    var value = _this._controlled ? props.value : props.defaultValue;

	    _this.state = {
	      values: mapValueToState(checkItems, value || [])
	    };
	    return _this;
	  }

	  _createClass(CheckGroup, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._controlled = isControlled(nextProps);

	      var options = this.props.options;

	      var value = this._controlled ? nextProps.value : this.state.value;

	      var values = this.state.values;

	      if (nextProps.options !== options) {
	        this._checkItems = calculateCheckItems(nextProps.options);
	        values = mapValueToState(this._checkItems, value || []);
	      }

	      this.setState({ values: values });
	    }
	  }, {
	    key: 'computeChecks',
	    value: function computeChecks(checkItems) {
	      var _this2 = this;

	      var _props = this.props,
	          disabled = _props.disabled,
	          name = _props.name;
	      var values = this.state.values;


	      var styles = this.css();

	      return map(function (item) {
	        return _this2.renderCheck(_extends({}, item, {
	          checked: values[item._position],
	          disabled: item.disabled || disabled,
	          key: '' + item._position + item.value,
	          name: name,
	          onChange: _this2._onChange,
	          position: item._position,
	          styles: styles
	        }));
	      }, checkItems);
	    }
	  }, {
	    key: 'computeColumns',
	    value: function computeColumns(checks) {
	      var _this3 = this;

	      var cols = this.props.cols;

	      var chunkSize = Math.ceil(this._checkItems.length / cols);
	      var columns = chunk(checks, chunkSize);
	      var className = this.css('column');

	      var index = 0;
	      return map(function (children) {
	        return _this3.renderColumn({
	          children: children,
	          className: className,
	          key: ++index
	        });
	      }, columns);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          className = _props2.className,
	          id = _props2.id;
	      var css = this.css;


	      var checks = this.computeChecks(this._checkItems);
	      var columns = this.computeColumns(checks);

	      return React.createElement(
	        'div',
	        _extends({}, filterProps(this.props), {
	          className: cc(css('container'), className),
	          id: id,
	          onChange: void 0 }),
	        columns
	      );
	    }
	  }, {
	    key: 'renderColumn',
	    value: function renderColumn(columnProps) {
	      return React.createElement('div', columnProps);
	    }
	  }, {
	    key: 'renderCheck',
	    value: function renderCheck(checkProps) {
	      return React.createElement(Box, checkProps);
	    }
	  }]);

	  return CheckGroup;
	}(Component);

	CheckGroup.defaultProps = {
	  cols: 1,
	  onChange: noop,
	  size: 'm',
	  styles: cssModules
	};

	CheckGroup.propTypes = {
	  cols: PropTypes.number,
	  defaultValue: PropTypes.arrayOf(PropTypes.string),
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  options: PropTypes.array.isRequired,
	  size: PropTypes.oneOf(['l', 'm']),
	  styles: PropTypes.object,
	  value: PropTypes.arrayOf(PropTypes.string)
	};

	module.exports = CheckGroup;

	// calculateMenuItems :: (a -> q -> bool) -> [a] -> q -> [b]
	function calculateCheckItems() {
	  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  var length = items.length;
	  var nextItems = Array(length);

	  for (var i = 0; i < length; ++i) {
	    nextItems[i] = assign(items[i], { _position: i });
	  }return nextItems;
	}

	function mapStateToValue(options, values) {
	  var selected = [];

	  for (var i = 0; i < values.length; ++i) {
	    if (!values[i]) {
	      continue;
	    }

	    selected.push(options[i].value);
	  }

	  return selected;
	}

	function mapValueToState(options, selected) {
	  var selectedMap = {};

	  var length = selected.length;
	  while (length--) {
	    selectedMap[selected[length]] = null;
	  }

	  return map(function (_ref2) {
	    var value = _ref2.value;
	    return value in selectedMap;
	  }, options);
	}

	function updateValue(values, position, target) {
	  return values.map(function (value, i) {
	    return position !== i ? value : target;
	  });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(32),
	    genericId = _require2.genericId;

	var _require3 = __webpack_require__(4),
	    isUndefined = _require3.isUndefined,
	    noop = _require3.noop;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);

	var Box = function (_Component) {
	  _inherits(Box, _Component);

	  function Box(props) {
	    _classCallCheck(this, Box);

	    var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));

	    _this._onChange = function (e) {
	      var _e$target = e.target,
	          checked = _e$target.checked,
	          value = _e$target.value;

	      _this.props.onChange(e, { checked: checked, value: value }, _this.props.position);
	    };

	    _this.state = {
	      id: props.id || genericId()
	    };
	    return _this;
	  }

	  _createClass(Box, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        id: isUndefined(nextProps.id) ? this.state.id : nextProps.id
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          checked = _props.checked,
	          children = _props.children,
	          className = _props.className,
	          defaultValue = _props.defaultValue,
	          disabled = _props.disabled,
	          hasLabel = _props.hasLabel,
	          label = _props.label,
	          name = _props.name,
	          styles = _props.styles,
	          type = _props.type,
	          value = _props.value;
	      var control = styles.control,
	          labelStyle = styles.label,
	          native = styles.native,
	          wrapper = styles.wrapper;


	      var id = this.state.id;
	      var text = isUndefined(label) ? children : label;

	      return React.createElement(
	        'span',
	        {
	          className: cc(wrapper, className) },
	        this.renderInput({
	          checked: checked,
	          className: native,
	          defaultValue: defaultValue,
	          disabled: disabled,
	          id: id,
	          name: name,
	          onChange: this._onChange,
	          type: type,
	          value: value
	        }),
	        this.renderControl({
	          children: hasLabel ? void 0 : text,
	          className: control,
	          htmlFor: id
	        }),
	        this.renderLabel({
	          children: text,
	          className: labelStyle,
	          htmlFor: id
	        })
	      );
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput(inputProps) {
	      return React.createElement('input', inputProps);
	    }
	  }, {
	    key: 'renderControl',
	    value: function renderControl(controlProps) {
	      return React.createElement('label', controlProps);
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel(labelProps) {
	      if (!this.props.hasLabel) return null;

	      return React.createElement('label', labelProps);
	    }
	  }]);

	  return Box;
	}(Component);

	Box.defaultProps = {
	  hasLabel: true,
	  onChange: noop,
	  type: 'checkbox'
	};

	Box.propTypes = {
	  hasLabel: PropTypes.bool,
	  label: PropTypes.string,
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  position: PropTypes.number,
	  type: PropTypes.oneOf(['checkbox', 'radio'])
	};

	module.exports = Box;

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Creates an array of elements split into groups the length of `size`.
	 * If `array` can't be split evenly, the final chunk will be the remaining
	 * elements.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to process.
	 * @param {number} [size=1] The length of each chunk
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the new array of chunks.
	 * @example
	 *
	 * _.chunk(['a', 'b', 'c', 'd'], 2);
	 * // => [['a', 'b'], ['c', 'd']]
	 *
	 * _.chunk(['a', 'b', 'c', 'd'], 3);
	 * // => [['a', 'b', 'c'], ['d']]
	 */
	function chunk(array, size, guard) {
	  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
	    size = 1;
	  } else {
	    size = nativeMax(toInteger(size), 0);
	  }
	  var length = array ? array.length : 0;
	  if (!length || size < 1) {
	    return [];
	  }
	  var index = 0,
	      resIndex = 0,
	      result = Array(nativeCeil(length / size));

	  while (index < length) {
	    result[resIndex++] = baseSlice(array, index, (index += size));
	  }
	  return result;
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = chunk;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./checkGroup-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./checkGroup-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(44), undefined);
	exports.i(__webpack_require__(34), undefined);

	// module
	exports.push([module.id, ".checkGroup-l--container\n{\n}\n\n.checkGroup-l--column\n{\n\n  margin: 0 34px 0 0;\n}\n\n.checkGroup-l--wrapper\n{\n\n  margin: 0 0 16px;\n}\n\n.checkGroup-l--wrapper:last-child\n{\n  margin: 0;\n}\n\n.checkGroup-l--native\n{\n}\n\n.checkGroup-l--control\n{\n}\n\n.checkGroup-l--label\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "checkGroup-l--container " + __webpack_require__(44).locals["container"] + "",
		"column": "checkGroup-l--column " + __webpack_require__(44).locals["column"] + "",
		"wrapper": "checkGroup-l--wrapper " + __webpack_require__(34).locals["wrapper"] + " " + __webpack_require__(44).locals["wrapper"] + "",
		"native": "checkGroup-l--native " + __webpack_require__(34).locals["native"] + "",
		"control": "checkGroup-l--control " + __webpack_require__(34).locals["control"] + "",
		"label": "checkGroup-l--label " + __webpack_require__(34).locals["label"] + ""
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".checkGroup--container,\n.checkGroup--column\n{\n  display: inline-block;\n\n  vertical-align: top;\n}\n\n.checkGroup--column:last-child\n{\n  margin-right: 0;\n}\n\n.checkGroup--wrapper\n{\n  display: block;\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "checkGroup--container",
		"column": "checkGroup--column",
		"wrapper": "checkGroup--wrapper"
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./checkGroup-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./checkGroup-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(44), undefined);
	exports.i(__webpack_require__(38), undefined);

	// module
	exports.push([module.id, ".checkGroup-m--container\n{\n}\n\n.checkGroup-m--column\n{\n\n  margin: 0 30px 0 0;\n}\n\n.checkGroup-m--wrapper\n{\n\n  margin: 0 0 15px;\n}\n\n.checkGroup-m--wrapper:last-child\n{\n  margin: 0;\n}\n\n.checkGroup-m--native\n{\n}\n\n.checkGroup-m--control\n{\n}\n\n.checkGroup-m--label\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "checkGroup-m--container " + __webpack_require__(44).locals["container"] + "",
		"column": "checkGroup-m--column " + __webpack_require__(44).locals["column"] + "",
		"wrapper": "checkGroup-m--wrapper " + __webpack_require__(38).locals["wrapper"] + " " + __webpack_require__(44).locals["wrapper"] + "",
		"native": "checkGroup-m--native " + __webpack_require__(38).locals["native"] + "",
		"control": "checkGroup-m--control " + __webpack_require__(38).locals["control"] + "",
		"label": "checkGroup-m--label " + __webpack_require__(38).locals["label"] + ""
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(48),
	    TAB = _require2.TAB;

	var _require3 = __webpack_require__(49),
	    cssColorValue = _require3.cssColorValue,
	    userColorValue = _require3.userColorValue;

	var _require4 = __webpack_require__(3),
	    filterProps = _require4.filterProps,
	    isControlled = _require4.isControlled,
	    genericName = _require4.genericName;

	var _require5 = __webpack_require__(4),
	    isUndefined = _require5.isUndefined,
	    map = _require5.map,
	    noop = _require5.noop;

	var Overlay = __webpack_require__(50);
	var React = __webpack_require__(2);
	var Tile = __webpack_require__(53);
	var cc = __webpack_require__(5);

	var cssModules = {
	  l: __webpack_require__(54),
	  m: __webpack_require__(64),
	  s: __webpack_require__(66)
	};

	var ColorPicker = function (_Component) {
	  _inherits(ColorPicker, _Component);

	  function ColorPicker(props) {
	    _classCallCheck(this, ColorPicker);

	    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

	    _initialiseProps.call(_this);

	    _this._controlled = isControlled(props);

	    var value = _this._controlled ? props.value : props.defaultValue;

	    _this.state = {
	      isOpened: false,
	      value: isUndefined(value) ? '' : userColorValue(value)
	    };
	    return _this;
	  }

	  _createClass(ColorPicker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._controlled = isControlled(nextProps);

	      this.setState({
	        value: this._controlled ? nextProps.value : this.state.value
	      });
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this._input) return;
	      this._input.focus();
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (!this._input) return;
	      this._input.select();
	    }
	  }, {
	    key: 'computeTiles',
	    value: function computeTiles(palette) {
	      var _this2 = this;

	      if (!this.state.isOpened) return null;

	      var css = this.css;


	      var menuItem = css('menuItem');
	      return map(function (color) {
	        return _this2.renderTile({
	          className: menuItem,
	          color: color,
	          key: color,
	          onClick: _this2._onTileClick
	        });
	      }, palette);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = this.props.className;
	      var css = this.css;


	      return React.createElement(
	        'span',
	        _extends({}, filterProps(this.props), {
	          className: cc(css('container'), className),
	          onChange: void 0,
	          ref: 'parent' }),
	        this.renderButton(),
	        this.renderClear(),
	        this.renderInput(),
	        this.renderMenu()
	      );
	    }
	  }, {
	    key: 'renderButton',
	    value: function renderButton() {
	      var disabled = this.props.disabled;
	      var value = this.state.value;
	      var css = this.css;


	      return React.createElement('button', {
	        className: css('button'),
	        disabled: disabled,
	        onClick: this._onClick,
	        style: {
	          backgroundColor: cssColorValue(value)
	        } });
	    }
	  }, {
	    key: 'renderClear',
	    value: function renderClear() {
	      var disabled = this.props.disabled;
	      var value = this.state.value;


	      if (disabled || !value) return null;

	      var css = this.css;


	      return React.createElement('span', {
	        className: css('clear'),
	        disabled: disabled,
	        onClick: this._onClearClick,
	        value: value });
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput() {
	      var _this3 = this;

	      var _props = this.props,
	          autoFocus = _props.autoFocus,
	          disabled = _props.disabled,
	          id = _props.id,
	          name = _props.name,
	          placeholder = _props.placeholder;
	      var value = this.state.value;
	      var css = this.css;


	      return React.createElement('input', {
	        autoFocus: autoFocus,
	        className: css('control'),
	        disabled: disabled,
	        id: id,
	        name: name,
	        onBlur: this._onInputBlur,
	        onChange: this._onChange,
	        onFocus: this._onInputFocus,
	        placeholder: placeholder,
	        ref: function ref(r) {
	          return _this3._input = r;
	        },
	        type: 'text',
	        value: value });
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      var palette = this.props.palette;
	      var isOpened = this.state.isOpened;
	      var css = this.css;


	      return React.createElement(
	        Overlay,
	        {
	          className: cc(css('menu'), _defineProperty({}, css('isClosedMenu'), !isOpened)),
	          onOutsideClick: this._onOutsideClick,
	          parentNode: this._parentNode },
	        this.computeTiles(palette)
	      );
	    }
	  }, {
	    key: 'renderTile',
	    value: function renderTile(tileProps) {
	      return React.createElement(Tile, tileProps);
	    }
	  }]);

	  return ColorPicker;
	}(Component);

	var _initialiseProps = function _initialiseProps() {
	  var _this4 = this;

	  this.css = function (tokenName) {
	    return genericName(_this4.props, tokenName);
	  };

	  this._onChange = function (e) {
	    var value = e.target.value;
	    if (!_this4._controlled) _this4.setState({ isOpened: false, value: value });
	    _this4.props.onChange(e, { value: value });
	  };

	  this._onClearClick = function () {
	    _this4.setState({
	      isOpened: !_this4.state.isOpened,
	      value: ''
	    });

	    _this4.focus();
	  };

	  this._onClick = function () {
	    _this4.setState({ isOpened: !_this4.state.isOpened });
	  };

	  this._onInputBlur = function (e) {
	    var value = _this4.state.value;

	    var nextValue = userColorValue(value);
	    if (nextValue === value) return;

	    if (!_this4._controlled) {
	      _this4.setState({
	        isOpened: false,
	        value: nextValue
	      });
	    }

	    _this4.props.onChange(e, { value: nextValue });
	  };

	  this._onInputFocus = function () {
	    if (!_this4.state.isOpened) return;
	    _this4.setState({ isOpened: false });
	  };

	  this._onKeyDown = function (_ref) {
	    var keyCode = _ref.keyCode;

	    if (_this4.props.disabled) return;
	    if (keyCode === TAB) _this4.setState({ isOpened: false });
	  };

	  this._onTileClick = function (e, value) {
	    if (!_this4._controlled) _this4.setState({ isOpened: false, value: value });
	    _this4.props.onChange(e, { value: value });
	    _this4.focus();
	  };

	  this._onOutsideClick = function () {
	    if (!_this4.state.isOpened) return;
	    _this4.setState({ isOpened: false });
	  };

	  this._parentNode = function () {
	    return _this4.refs.parent;
	  };
	};

	ColorPicker.defaultProps = {
	  onChange: noop,
	  palette: ['000000', 'CC0000', 'CC6600', 'CCCC00', '66CC00', '00CC00', '00CC66', '00CCCC', '0066CC', '0000CC', '6600CC', 'CC00CC', 'CC0066', '333333', 'FF0000', 'FF8000', 'FFFF00', '80FF00', '00FF00', '00FF80', '00FFFF', '007FFF', '0000FF', '7F00FF', 'FF00FF', 'FF0080', '666666', 'FF3333', 'FF9933', 'FFFF33', '99FF33', '33FF33', '33FF99', '33FFFF', '3399FF', '3333FF', '9933FF', 'FF33FF', 'FF3399', '999999', 'FF6666', 'FFB366', 'FFFF66', 'B3FF66', '66FF66', '66FFB3', '66FFFF', '66B2FF', '6666FF', 'B266FF', 'FF66FF', 'FF66B3', 'CCCCCC', 'FF9999', 'FFCC99', 'FFFF99', 'CCFF99', '99FF99', '99FFCC', '99FFFF', '99CCFF', '9999FF', 'CC99FF', 'FF99FF', 'FF99CC', 'FFFFFF', 'FFCCCC', 'FFE6CC', 'FFFFCC', 'E6FFCC', 'CCFFCC', 'CCFFE6', 'CCFFFF', 'CCE5FF', 'CCCCFF', 'E5CCFF', 'FFCCFF', 'FFCCE6'],
	  size: 'm',
	  styles: cssModules
	};

	ColorPicker.propTypes = {
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  palette: PropTypes.arrayOf(PropTypes.string),
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object
	};

	module.exports = ColorPicker;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	exports.ARROR_DOWN = 40;
	exports.ARROR_UP = 38;
	exports.ENTER = 13;
	exports.ESC = 27;
	exports.SPACE = 32;
	exports.TAB = 9;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(4),
	    isString = _require.isString;

	var hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i;

	exports.cssColorValue = cssColorValue;
	exports.userColorValue = userColorValue;

	// cssColorValue :: a -> a
	function cssColorValue() {
	  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	  if (!isString(color)) return color;

	  var nextColor = color.trim().replace(/^#/, '');
	  if (!hex.test(nextColor)) return color;

	  if (nextColor.length === 3) {
	    nextColor = nextColor.replace(/./g, function (d) {
	      return d + d;
	    });
	  }

	  return '#' + nextColor.toLowerCase();
	}

	// userColorValue :: a -> a
	function userColorValue(color) {
	  return hex.test(color) ? cssColorValue(color).replace(/^#/, '').toUpperCase() : color;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component;

	var OutsideClick = __webpack_require__(51);
	var React = __webpack_require__(2);

	// @todo detect direction automaticaly in case it wasn't provided
	// use bounding reactangle on componentDidMount
	// and choose the desired one

	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);

	  function Overlay() {
	    _classCallCheck(this, Overlay);

	    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
	  }

	  _createClass(Overlay, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', this.props);
	    }
	  }]);

	  return Overlay;
	}(Component);

	module.exports = OutsideClick(Overlay);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component;

	var _require2 = __webpack_require__(52),
	    findDOMNode = _require2.findDOMNode;

	var _require3 = __webpack_require__(4),
	    omit = _require3.omit;

	var React = __webpack_require__(2);

	var omitProps = omit(['onOutsideClick', 'parentNode']);

	module.exports = OutsideClick;

	// OutsideClick :: Component -> Component
	function OutsideClick(Target) {
	  return function (_Component) {
	    _inherits(Outside, _Component);

	    function Outside(props) {
	      _classCallCheck(this, Outside);

	      var _this = _possibleConstructorReturn(this, (Outside.__proto__ || Object.getPrototypeOf(Outside)).call(this, props));

	      _this._handleEvent = function (e) {
	        var target = e.target;

	        var parentNode = _this._parentNode();
	        if (!parentNode) return;

	        var isInside = parentNode.contains(target) || parentNode === target;
	        if (isInside) return;

	        _this.props.onOutsideClick(e);
	      };

	      _this._parentNode = function () {
	        return findDOMNode(_this.refs.parent);
	      };

	      if (props.parentNode) _this._parentNode = props.parentNode;

	      if (!props.onOutsideClick) {
	        throw new Error('Should provide `onOutsideClick` prop');
	      }
	      return _this;
	    }

	    _createClass(Outside, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        window.addEventListener('click', this._handleEvent);
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        window.removeEventListener('click', this._handleEvent);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return React.createElement(Target, _extends({ ref: 'parent' }, omitProps(this.props)));
	      }
	    }]);

	    return Outside;
	  }(Component);
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(49),
	    cssColorValue = _require2.cssColorValue;

	var _require3 = __webpack_require__(4),
	    noop = _require3.noop;

	var React = __webpack_require__(2);

	var Tile = function (_Component) {
	  _inherits(Tile, _Component);

	  function Tile() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tile);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tile.__proto__ || Object.getPrototypeOf(Tile)).call.apply(_ref, [this].concat(args))), _this), _this._onClick = function (e) {
	      _this.props.onClick(e, _this.props.color);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tile, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          color = _props.color;


	      return React.createElement('i', {
	        className: className,
	        onClick: this._onClick,
	        style: {
	          backgroundColor: cssColorValue(color)
	        } });
	    }
	  }]);

	  return Tile;
	}(Component);

	Tile.defaultProps = {
	  onClick: noop
	};

	Tile.propTypes = {
	  color: PropTypes.string,
	  onClick: PropTypes.func
	};

	module.exports = Tile;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./colorPicker-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./colorPicker-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(56), undefined);
	exports.i(__webpack_require__(59), undefined);

	// module
	exports.push([module.id, ".colorPicker-l--container\n{\n}\n\n.colorPicker-l--button\n{\n}\n\n.colorPicker-l--clear\n{\n}\n\n.colorPicker-l--control\n{\n}\n\n.colorPicker-l--menu\n{\n}\n\n.colorPicker-l--menuItem\n{\n}\n\n/* mixin */\n\n.colorPicker-l--isClosedMenu\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "colorPicker-l--container " + __webpack_require__(56).locals["selector"] + " " + __webpack_require__(56).locals["container"] + " " + __webpack_require__(59).locals["container-l"] + "",
		"button": "colorPicker-l--button " + __webpack_require__(56).locals["button"] + " " + __webpack_require__(59).locals["button-l"] + "",
		"clear": "colorPicker-l--clear " + __webpack_require__(56).locals["clear"] + " " + __webpack_require__(59).locals["clear-l"] + "",
		"control": "colorPicker-l--control " + __webpack_require__(56).locals["control"] + " " + __webpack_require__(59).locals["control-l"] + "",
		"menu": "colorPicker-l--menu " + __webpack_require__(56).locals["menu"] + "",
		"menuItem": "colorPicker-l--menuItem " + __webpack_require__(56).locals["menuItem"] + "",
		"isClosedMenu": "colorPicker-l--isClosedMenu " + __webpack_require__(56).locals["isClosedMenu"] + ""
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(57), undefined);
	exports.i(__webpack_require__(58), undefined);

	// module
	exports.push([module.id, ".colorPicker--selector\n{\n  /* the common selector */\n}\n\n.colorPicker--container\n{\n  position: relative;\n\n  display: inline-block;\n\n  width: 11em;\n\n  white-space: nowrap;\n}\n\n.colorPicker--button\n{\n\n  position: relative;\n\n  margin: 0 -1px 0 0;\n  padding: 0;\n\n  border-radius: 0;\n\n  font: inherit;\n}\n\n.colorPicker--button:before\n{\n  visibility: hidden;\n\n  content: '\\A0';\n}\n\n.colorPicker--button:active,\n.colorPicker--button:hover,\n.colorPicker--button:focus\n{\n  z-index: 1;\n}\n\n.colorPicker--button:disabled\n{\n  z-index: 1;\n\n  background: white;\n}\n\n.colorPicker--button:disabled:after\n{\n  position: absolute;\n  top: 49.5%;\n  left: -19.5%;\n\n  width: 141%;\n  height: 0;\n\n  content: '';\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n\n  border-bottom: 1px solid #ccc;\n}\n\n.colorPicker--clear\n{\n\n  z-index: 1;\n}\n\n.colorPicker--control\n{\n\n  position: relative;\n}\n\n.colorPicker--menu\n{\n\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n\n  min-width: 100%;\n\n  background: white;\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1),0 9px 20px -5px rgba(0,0,0,.4);\n}\n\n.colorPicker--menuItem\n{\n  float: left;\n\n  width: 7.69%;\n  height: 0;\n  padding-bottom: 7.69%;\n\n  cursor: pointer;\n}\n\n/* mixin */\n\n.colorPicker--isClosedMenu\n{\n  display: none;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "colorPicker--selector",
		"container": "colorPicker--container",
		"button": "colorPicker--button " + __webpack_require__(9).locals["normal"] + "",
		"clear": "colorPicker--clear " + __webpack_require__(57).locals["clear"] + "",
		"control": "colorPicker--control " + __webpack_require__(57).locals["control"] + "",
		"menu": "colorPicker--menu " + __webpack_require__(58).locals["menu"] + "",
		"menuItem": "colorPicker--menuItem",
		"isClosedMenu": "colorPicker--isClosedMenu"
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".input--selector\n{\n  /* the common selector */\n}\n\n.input--wrapper\n{\n  position: relative;\n\n  display: inline-block;\n\n  width: 100%;\n}\n\n.input--control\n{\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n\n  -webkit-transition: border .1s ease-out,box-shadow .1s ease-out;\n\n  transition: border .1s ease-out,box-shadow .1s ease-out;\n\n  border: 1px solid #ccc;\n  border-radius: 0;\n  outline: none;\n  background: white;\n\n  font: inherit;\n\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* http://stackoverflow.com/questions/14007655/remove-ie10s-clear-field-x-button-on-certain-inputs */\n.input--control::-ms-clear\n{\n  display: none;\n}\n\n.input--control:-moz-placeholder,\n.input--control:-ms-input-placeholder,\n.input--control::-moz-placeholder,\n.input--control::-webkit-input-placeholder\n{\n  text-indent: 0;\n\n  color: #999;\n}\n\n.input--control:focus\n{\n  border: 1px solid #ffdb4d;\n  box-shadow: inset 0 0 0 1px #ffdb4d;\n}\n\n.input--control:disabled\n{\n  cursor: default;\n\n  color: rgba(0,0,0,.5);\n  border: 1px solid #ebebeb;\n  background: #ebebeb;\n}\n\n.input--clear\n{\n  position: absolute;\n  top: 1px;\n  right: 1px;\n\n  display: block;\n\n  cursor: pointer;\n  -webkit-transition: opacity .1s ease-out;\n  transition: opacity .1s ease-out;\n\n  opacity: .3;\n}\n\n.input--clear:hover\n{\n  opacity: 1;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "input--selector",
		"wrapper": "input--wrapper",
		"control": "input--control",
		"clear": "input--clear"
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".layer--tooltip\n{\n  z-index: 100;\n}\n\n.layer--menu\n{\n  z-index: 200;\n}\n", ""]);

	// exports
	exports.locals = {
		"tooltip": "layer--tooltip",
		"menu": "layer--menu"
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(60), undefined);
	exports.i(__webpack_require__(62), undefined);
	exports.i(__webpack_require__(63), undefined);

	// module
	exports.push([module.id, "/* size s */\n\n.colorPicker-size--container-s\n{\n  font: 13px/24px arial,sans-serif;\n}\n\n.colorPicker-size--button-s\n{\n  width: 24px;\n  height: 24px;\n\n  font: 13px/22px arial,sans-serif;\n}\n\n.colorPicker-size--clear-s\n{\n}\n\n.colorPicker-size--control-s\n{\n\n  width: calc(100% - 23px);\n}\n\n/* size m */\n\n.colorPicker-size--container-m\n{\n  font: 13px/28px arial,sans-serif;\n}\n\n.colorPicker-size--button-m\n{\n  width: 28px;\n  height: 28px;\n\n  font: 13px/26px arial,sans-serif;\n}\n\n.colorPicker-size--clear-m\n{\n}\n\n.colorPicker-size--control-m\n{\n\n  width: calc(100% - 27px);\n}\n\n/* size l */\n\n.colorPicker-size--container-l\n{\n  font: 15px/32px arial,sans-serif;\n}\n\n.colorPicker-size--button-l\n{\n  width: 32px;\n  height: 32px;\n\n  font: 15px/30px arial,sans-serif;\n}\n\n.colorPicker-size--clear-l\n{\n}\n\n.colorPicker-size--control-l\n{\n\n  width: calc(100% - 31px);\n}\n", ""]);

	// exports
	exports.locals = {
		"container-s": "colorPicker-size--container-s",
		"button-s": "colorPicker-size--button-s",
		"clear-s": "colorPicker-size--clear-s " + __webpack_require__(60).locals["clear"] + "",
		"control-s": "colorPicker-size--control-s " + __webpack_require__(60).locals["control"] + "",
		"container-m": "colorPicker-size--container-m",
		"button-m": "colorPicker-size--button-m",
		"clear-m": "colorPicker-size--clear-m " + __webpack_require__(62).locals["clear"] + "",
		"control-m": "colorPicker-size--control-m " + __webpack_require__(62).locals["control"] + "",
		"container-l": "colorPicker-size--container-l",
		"button-l": "colorPicker-size--button-l",
		"clear-l": "colorPicker-size--clear-l " + __webpack_require__(63).locals["clear"] + "",
		"control-l": "colorPicker-size--control-l " + __webpack_require__(63).locals["control"] + ""
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(57), undefined);
	exports.i(__webpack_require__(61), undefined);

	// module
	exports.push([module.id, ".input-s--wrapper\n{\n}\n\n.input-s--control\n{\n}\n\n.input-s--clear\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "input-s--wrapper " + __webpack_require__(57).locals["selector"] + " " + __webpack_require__(57).locals["wrapper"] + " " + __webpack_require__(61).locals["wrapper-s"] + "",
		"control": "input-s--control " + __webpack_require__(57).locals["control"] + " " + __webpack_require__(61).locals["control-s"] + "",
		"clear": "input-s--clear " + __webpack_require__(57).locals["clear"] + " " + __webpack_require__(61).locals["clear-s"] + ""
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* size s */\n\n.input-size--wrapper-s\n{\n  font: 13px/24px arial,sans-serif;\n}\n\n.input-size--control-s\n{\n  height: 24px;\n  padding: 0 6px;\n}\n\n.input-size--clear-s\n{\n  width: 22px;\n  height: 22px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%3E%3Cpolygon%20points%3D%2210%2C0.7%209.3%2C0%205%2C4.3%200.7%2C0%200%2C0.7%204.3%2C5%200%2C9.3%200.7%2C10%205%2C5.7%209.3%2C10%2010%2C9.3%205.7%2C5%22%2F%3E%3C%2Fsvg%3E) center center no-repeat;\n}\n\n.input-size--clear-s + .input-size--control-s\n{\n  padding-right: 24px;\n}\n\n/* size m */\n\n.input-size--wrapper-m\n{\n  font: 13px/28px arial,sans-serif;\n}\n\n.input-size--control-m\n{\n  height: 28px;\n  padding: 0 7px;\n}\n\n.input-size--clear-m\n{\n  width: 26px;\n  height: 26px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%3E%3Cpolygon%20points%3D%2210%2C0.7%209.3%2C0%205%2C4.3%200.7%2C0%200%2C0.7%204.3%2C5%200%2C9.3%200.7%2C10%205%2C5.7%209.3%2C10%2010%2C9.3%205.7%2C5%22%2F%3E%3C%2Fsvg%3E) center center no-repeat;\n}\n\n.input-size--clear-m + .input-size--control-m\n{\n  padding-right: 28px;\n}\n\n/* size l */\n\n.input-size--wrapper-l\n{\n  font: 15px/32px arial,sans-serif;\n}\n\n.input-size--control-l\n{\n  height: 32px;\n  padding: 0 9px;\n}\n\n.input-size--clear-l\n{\n  width: 30px;\n  height: 30px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%3E%3Cpolygon%20points%3D%2214%2C0.7%2013.3%2C0%207%2C6.3%200.7%2C0%200%2C0.7%206.3%2C7%200%2C13.3%200.7%2C14%207%2C7.7%2013.3%2C14%2014%2C13.3%207.7%2C7%22%2F%3E%3C%2Fsvg%3E) center center no-repeat;\n}\n\n.input-size--clear-l + .input-size--control-l\n{\n  padding-right: 32px;\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper-s": "input-size--wrapper-s",
		"control-s": "input-size--control-s",
		"clear-s": "input-size--clear-s",
		"wrapper-m": "input-size--wrapper-m",
		"control-m": "input-size--control-m",
		"clear-m": "input-size--clear-m",
		"wrapper-l": "input-size--wrapper-l",
		"control-l": "input-size--control-l",
		"clear-l": "input-size--clear-l"
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(57), undefined);
	exports.i(__webpack_require__(61), undefined);

	// module
	exports.push([module.id, ".input-m--wrapper\n{\n}\n\n.input-m--control\n{\n}\n\n.input-m--clear\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "input-m--wrapper " + __webpack_require__(57).locals["selector"] + " " + __webpack_require__(57).locals["wrapper"] + " " + __webpack_require__(61).locals["wrapper-m"] + "",
		"control": "input-m--control " + __webpack_require__(57).locals["control"] + " " + __webpack_require__(61).locals["control-m"] + "",
		"clear": "input-m--clear " + __webpack_require__(57).locals["clear"] + " " + __webpack_require__(61).locals["clear-m"] + ""
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(57), undefined);
	exports.i(__webpack_require__(61), undefined);

	// module
	exports.push([module.id, ".input-l--wrapper\n{\n}\n\n.input-l--control\n{\n}\n\n.input-l--clear\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "input-l--wrapper " + __webpack_require__(57).locals["selector"] + " " + __webpack_require__(57).locals["wrapper"] + " " + __webpack_require__(61).locals["wrapper-l"] + "",
		"control": "input-l--control " + __webpack_require__(57).locals["control"] + " " + __webpack_require__(61).locals["control-l"] + "",
		"clear": "input-l--clear " + __webpack_require__(57).locals["clear"] + " " + __webpack_require__(61).locals["clear-l"] + ""
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./colorPicker-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./colorPicker-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(56), undefined);
	exports.i(__webpack_require__(59), undefined);

	// module
	exports.push([module.id, ".colorPicker-m--container\n{\n}\n\n.colorPicker-m--button\n{\n}\n\n.colorPicker-m--clear\n{\n}\n\n.colorPicker-m--control\n{\n}\n\n.colorPicker-m--menu\n{\n}\n\n.colorPicker-m--menuItem\n{\n}\n\n/* mixin */\n\n.colorPicker-m--isClosedMenu\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "colorPicker-m--container " + __webpack_require__(56).locals["selector"] + " " + __webpack_require__(56).locals["container"] + " " + __webpack_require__(59).locals["container-m"] + "",
		"button": "colorPicker-m--button " + __webpack_require__(56).locals["button"] + " " + __webpack_require__(59).locals["button-m"] + "",
		"clear": "colorPicker-m--clear " + __webpack_require__(56).locals["clear"] + " " + __webpack_require__(59).locals["clear-m"] + "",
		"control": "colorPicker-m--control " + __webpack_require__(56).locals["control"] + " " + __webpack_require__(59).locals["control-m"] + "",
		"menu": "colorPicker-m--menu " + __webpack_require__(56).locals["menu"] + "",
		"menuItem": "colorPicker-m--menuItem " + __webpack_require__(56).locals["menuItem"] + "",
		"isClosedMenu": "colorPicker-m--isClosedMenu " + __webpack_require__(56).locals["isClosedMenu"] + ""
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./colorPicker-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./colorPicker-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(56), undefined);
	exports.i(__webpack_require__(59), undefined);

	// module
	exports.push([module.id, ".colorPicker-s--container\n{\n}\n\n.colorPicker-s--button\n{\n}\n\n.colorPicker-s--clear\n{\n}\n\n.colorPicker-s--control\n{\n}\n\n.colorPicker-s--menu\n{\n}\n\n.colorPicker-s--menuItem\n{\n}\n\n/* mixin */\n\n.colorPicker-s--isClosedMenu\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "colorPicker-s--container " + __webpack_require__(56).locals["selector"] + " " + __webpack_require__(56).locals["container"] + " " + __webpack_require__(59).locals["container-s"] + "",
		"button": "colorPicker-s--button " + __webpack_require__(56).locals["button"] + " " + __webpack_require__(59).locals["button-s"] + "",
		"clear": "colorPicker-s--clear " + __webpack_require__(56).locals["clear"] + " " + __webpack_require__(59).locals["clear-s"] + "",
		"control": "colorPicker-s--control " + __webpack_require__(56).locals["control"] + " " + __webpack_require__(59).locals["control-s"] + "",
		"menu": "colorPicker-s--menu " + __webpack_require__(56).locals["menu"] + "",
		"menuItem": "colorPicker-s--menuItem " + __webpack_require__(56).locals["menuItem"] + "",
		"isClosedMenu": "colorPicker-s--isClosedMenu " + __webpack_require__(56).locals["isClosedMenu"] + ""
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    isControlled = _require2.isControlled,
	    genericName = _require2.genericName;

	var _require3 = __webpack_require__(4),
	    isUndefined = _require3.isUndefined,
	    noop = _require3.noop;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);
	var warn = __webpack_require__(70);

	var cssModules = {
	  l: __webpack_require__(71),
	  m: __webpack_require__(72),
	  s: __webpack_require__(73)
	};

	var didWarnForInputDefaultValue = false;

	var Input = function (_Component) {
	  _inherits(Input, _Component);

	  function Input(props) {
	    _classCallCheck(this, Input);

	    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	    _initialiseProps.call(_this);

	    _this._controlled = isControlled(props);

	    if (process.env.NODE_ENV !== 'production') {
	      if (_this._controlled && !isUndefined(props.defaultValue) && !didWarnForInputDefaultValue) {
	        didWarnForInputDefaultValue = true;
	        warn(true, 'defaultValue', 'Input', props.type);
	      }
	    }

	    var value = _this._controlled ? props.value : props.defaultValue;

	    _this.state = {
	      value: isUndefined(value) ? '' : value
	    };
	    return _this;
	  }

	  _createClass(Input, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._controlled = isControlled(nextProps);

	      this.setState({
	        value: this._controlled ? nextProps.value : this.state.value
	      });
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this._input) return;
	      this._input.focus();
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (!this._input) return;
	      this._input.select();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = this.props.className;
	      var css = this.css;


	      return React.createElement(
	        'span',
	        _extends({}, filterProps(this.props), {
	          className: cc(css('wrapper'), className),
	          onChange: void 0 }),
	        this.renderClear(),
	        this.renderInput()
	      );
	    }
	  }, {
	    key: 'renderClear',
	    value: function renderClear() {
	      var disabled = this.props.disabled;
	      var value = this.state.value;


	      if (disabled || !value) return null;

	      var css = this.css;


	      return React.createElement('span', {
	        className: css('clear'),
	        onClick: this._onClear });
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput() {
	      var _this2 = this;

	      var _props = this.props,
	          autoComplete = _props.autoComplete,
	          autoFocus = _props.autoFocus,
	          disabled = _props.disabled,
	          id = _props.id,
	          maxLength = _props.maxLength,
	          name = _props.name,
	          placeholder = _props.placeholder,
	          readOnly = _props.readOnly,
	          type = _props.type;
	      var value = this.state.value;
	      var css = this.css;


	      return React.createElement('input', {
	        autoComplete: autoComplete,
	        autoFocus: autoFocus,
	        className: css('control'),
	        disabled: disabled,
	        id: id,
	        maxLength: maxLength,
	        name: name,
	        onChange: this._onChange,
	        placeholder: placeholder,
	        readOnly: readOnly,
	        ref: function ref(r) {
	          return _this2._input = r;
	        },
	        type: type,
	        value: value });
	    }
	  }]);

	  return Input;
	}(Component);

	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;

	  this.css = function (tokenName) {
	    return genericName(_this3.props, tokenName);
	  };

	  this._onChange = function (e) {
	    var value = e.target.value;
	    if (!_this3._controlled) _this3.setState({ value: value });
	    _this3.props.onChange(e, { value: value });
	  };

	  this._onClear = function (e) {
	    var value = '';
	    if (!_this3._controlled) _this3.setState({ value: value });
	    _this3.props.onChange(e, { value: value });
	    _this3.focus();
	  };
	};

	Input.defaultProps = {
	  onChange: noop,
	  size: 'm',
	  styles: cssModules,
	  type: 'text'
	};

	Input.propTypes = {
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object,
	  type: PropTypes.string
	};

	module.exports = Input;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ },
/* 69 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	/* eslint-disable max-len, no-inner-declarations */

	var _require = __webpack_require__(4),
	    noop = _require.noop;

	var warn = noop;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {

	    // serializeMsgCodes :: object -> string
	    var serializeMsgCodes = function serializeMsgCodes(messages) {
	      return Object.keys(messages).map(function (msgCode) {
	        return '`' + msgCode + '`';
	      }).join(', ');
	    };

	    var MESSAGE = {
	      defaultValue: '%s contains an input of type `%s` with both `value` and `defaultValue` props. Input elements must by either controlled or uncontrolled (specify either the `value` prop, or the `defaultValue` prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://facebook.github.io/react/docs/forms.html#controlled-components'
	    };

	    var existingCodes = serializeMsgCodes(MESSAGE);
	    var shownWarnings = {};

	    // http://staxmanade.com/2016/01/developer-friendly-react-component-errors/
	    // https://github.com/facebook/react/issues/2461
	    warn = function printWarning(condition, msgCode) {
	      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	      }

	      if (typeof msgCode === 'undefined') {
	        throw new Error('`warn(condition, msgCode, ...args)` requires a warning message code');
	      }

	      if (!MESSAGE[msgCode]) {
	        if (shownWarnings[msgCode]) return;
	        shownWarnings[msgCode] = true;

	        var errMsg = 'Unknown `msgCode` was provided. Consider adding message text for `' + msgCode + '` or use the existing one: ' + existingCodes + '.';
	        return void console.error('Error: ' + errMsg); // eslint-disable-line no-console
	      }

	      if (condition) {
	        var rawmsg = MESSAGE[msgCode];

	        var argIndex = 0;
	        var message = 'Warning: ' + rawmsg.replace(/%s/g, function () {
	          return args[argIndex++];
	        });

	        console.error(message); // eslint-disable-line no-console
	      }
	    };
	  })();
	}

	module.exports = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./input-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./input-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./input-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./input-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./input-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./input-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    genericName = _require2.genericName;

	var _require3 = __webpack_require__(4),
	    noop = _require3.noop;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);

	var cssModules = {
	  'action-l': __webpack_require__(75),
	  'action-m': __webpack_require__(77),
	  'action-s': __webpack_require__(79),
	  'link-l': __webpack_require__(81),
	  'link-m': __webpack_require__(83),
	  'link-s': __webpack_require__(85),
	  'normal-l': __webpack_require__(87),
	  'normal-m': __webpack_require__(89),
	  'normal-s': __webpack_require__(91)
	};

	var Link = function (_Component) {
	  _inherits(Link, _Component);

	  function Link() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Link);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    }, _this.focus = noop, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Link, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          download = _props.download,
	          href = _props.href,
	          id = _props.id,
	          target = _props.target,
	          type = _props.type;
	      var css = this.css;


	      return React.createElement(
	        'a',
	        _extends({}, filterProps(this.props), {
	          className: cc(css('control'), className),
	          download: download,
	          href: href,
	          id: id,
	          target: target,
	          type: type }),
	        children
	      );
	    }
	  }]);

	  return Link;
	}(Component);

	Link.defaultProps = {
	  size: 'm',
	  styles: cssModules,
	  theme: 'link'
	};

	Link.propTypes = {
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object,
	  theme: PropTypes.oneOf(['action', 'link', 'normal'])
	};

	module.exports = Link;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-action-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-action-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".link-action-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-action-l--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(9).locals["action"] + " " + __webpack_require__(10).locals["l"] + ""
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-action-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-action-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".link-action-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-action-m--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(9).locals["action"] + " " + __webpack_require__(10).locals["m"] + ""
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-action-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-action-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".link-action-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-action-s--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(9).locals["action"] + " " + __webpack_require__(10).locals["s"] + ""
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(20), undefined);

	// module
	exports.push([module.id, ".link-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-l--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(18).locals["control"] + " " + __webpack_require__(20).locals["l"] + ""
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(20), undefined);

	// module
	exports.push([module.id, ".link-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-m--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(18).locals["control"] + " " + __webpack_require__(20).locals["m"] + ""
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(20), undefined);

	// module
	exports.push([module.id, ".link-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-s--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(18).locals["control"] + " " + __webpack_require__(20).locals["s"] + ""
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-normal-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-normal-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".link-normal-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-normal-l--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(9).locals["normal"] + " " + __webpack_require__(10).locals["l"] + ""
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-normal-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-normal-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".link-normal-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-normal-m--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(9).locals["normal"] + " " + __webpack_require__(10).locals["m"] + ""
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-normal-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./link-normal-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(18), undefined);
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".link-normal-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "link-normal-s--control " + __webpack_require__(18).locals["selector"] + " " + __webpack_require__(9).locals["normal"] + " " + __webpack_require__(10).locals["s"] + ""
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    genericName = _require2.genericName,
	    isControlled = _require2.isControlled;

	var _require3 = __webpack_require__(32),
	    genericId = _require3.genericId;

	var _require4 = __webpack_require__(4),
	    isUndefined = _require4.isUndefined,
	    map = _require4.map,
	    noop = _require4.noop;

	var Box = __webpack_require__(40);
	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);
	var warn = __webpack_require__(70);

	var cssModules = {
	  'button-l': __webpack_require__(94),
	  'button-m': __webpack_require__(97),
	  'button-s': __webpack_require__(99),
	  'common-l': __webpack_require__(101),
	  'common-m': __webpack_require__(103),
	  'common-s': __webpack_require__(105)
	};

	var didWarnForRadioDefaultValue = false;

	var Radio = function (_Component) {
	  _inherits(Radio, _Component);

	  function Radio(props) {
	    _classCallCheck(this, Radio);

	    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

	    _initialiseProps.call(_this);

	    _this._controlled = isControlled(props);

	    if (process.env.NODE_ENV !== 'production') {
	      if (_this._controlled && !isUndefined(props.defaultValue) && !didWarnForRadioDefaultValue) {
	        didWarnForRadioDefaultValue = true;
	        warn(true, 'defaultValue', 'Radio', 'radio');
	      }
	    }

	    var value = _this._controlled ? props.value : props.defaultValue;

	    _this.state = {
	      prefix: genericId(),
	      value: isUndefined(value) ? null : value
	    };
	    return _this;
	  }

	  _createClass(Radio, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._controlled = isControlled(nextProps);

	      this.setState({
	        value: this._controlled ? nextProps.value : this.state.value
	      });
	    }
	  }, {
	    key: 'computeOptions',
	    value: function computeOptions(options) {
	      var _this2 = this;

	      var _props = this.props,
	          disabled = _props.disabled,
	          name = _props.name,
	          theme = _props.theme;
	      var _state = this.state,
	          prefix = _state.prefix,
	          value = _state.value;
	      var css = this.css;

	      var styles = css();

	      var hasLabel = theme === 'common';

	      return map(function (option) {
	        return _this2.renderOption(option, {
	          checked: option.value === value,
	          disabled: option.disabled || disabled,
	          hasLabel: hasLabel,
	          key: '' + prefix + option.value,
	          name: name,
	          onChange: _this2._onChange,
	          styles: styles,
	          type: 'radio'
	        });
	      }, options);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          className = _props2.className,
	          id = _props2.id,
	          options = _props2.options;
	      var css = this.css;


	      return React.createElement(
	        'div',
	        _extends({}, filterProps(this.props), {
	          className: cc(css('container'), className),
	          id: id,
	          onChange: void 0 }),
	        this.computeOptions(options)
	      );
	    }
	  }, {
	    key: 'renderOption',
	    value: function renderOption(optionProps, genericProps) {
	      return React.createElement(Box, _extends({}, optionProps, genericProps));
	    }
	  }]);

	  return Radio;
	}(Component);

	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;

	  this.css = function (tokenName) {
	    return genericName(_this3.props, tokenName);
	  };

	  this.focus = noop;

	  this._onChange = function (e, _ref) {
	    var value = _ref.value;

	    if (!_this3._controlled) _this3.setState({ value: value });
	    _this3.props.onChange(e, { value: value });
	  };
	};

	Radio.defaultProps = {
	  onChange: noop,
	  size: 'm',
	  styles: cssModules,
	  theme: 'common'
	};

	Radio.propTypes = {
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  options: PropTypes.arrayOf(PropTypes.object).isRequired,
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object,
	  theme: PropTypes.oneOf(['button', 'common'])
	};

	module.exports = Radio;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-button-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-button-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(96), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".radio-button-l--container\n{\n\n  font: 15px/1.2 arial,sans-serif;\n}\n\n.radio-button-l--wrapper\n{\n}\n\n.radio-button-l--control\n{\n}\n\n.radio-button-l--native\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "radio-button-l--container " + __webpack_require__(96).locals["selector"] + " " + __webpack_require__(96).locals["container"] + "",
		"wrapper": "radio-button-l--wrapper " + __webpack_require__(96).locals["button-wrapper"] + "",
		"control": "radio-button-l--control " + __webpack_require__(96).locals["button-control"] + " " + __webpack_require__(10).locals["l"] + "",
		"native": "radio-button-l--native " + __webpack_require__(96).locals["button-native"] + ""
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".radio--selector\n{\n  /* the common selector */\n}\n\n.radio--container\n{\n  display: inline-block;\n}\n\n.radio--wrapper\n{\n  position: relative;\n\n  color: black;\n\n  font: inherit;\n}\n\n.radio--control\n{\n  position: relative;\n\n  display: inline-block;\n\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n\n  border: 1px solid #ccc;\n  outline: none;\n  background: white;\n\n  -webkit-tap-highlight-color: transparent;\n}\n\n.radio--control::-moz-focus-inner\n{\n  margin: 0;\n  padding: 0;\n\n  border: 0;\n}\n\n.radio--control:hover\n{\n  border: 1px solid #b3b3b3;\n}\n\n.radio--native\n{\n  position: absolute;\n\n  margin: 0;\n\n  opacity: 0;\n  border: 0;\n  outline: 0;\n}\n\n.radio--native:focus + .radio--control\n{\n  border: 1px solid #ffdb4d;\n  box-shadow: inset 0 0 0 1px #ffdb4d;\n}\n\n.radio--native:disabled + .radio--control\n{\n  cursor: default;\n\n  border: 1px solid #ebebeb;\n  background: #ebebeb;\n}\n\n/* theme: `common` */\n\n.radio--common-wrapper\n{\n\n  display: block;\n\n  line-height: 1.2;\n}\n\n.radio--common-control\n{\n\n  top: 1px;\n\n  box-sizing: border-box;\n\n  -webkit-transition: background .1s ease-out,border .1s ease-out,box-shadow .1s ease-out;\n\n  transition: background .1s ease-out,border .1s ease-out,box-shadow .1s ease-out;\n\n  border-radius: 50%;\n}\n\n.radio--common-control:before\n{\n  visibility: hidden;\n\n  content: '\\A0';\n}\n\n.radio--common-control:after\n{\n  position: absolute;\n\n  visibility: hidden;\n\n  content: '';\n\n  opacity: 0;\n  border-radius: 50%;\n  background: black;\n}\n\n.radio--common-control:active\n{\n  background: #f6f5f3;\n}\n\n.radio--common-native\n{\n}\n\n.radio--common-native:checked + .radio--control\n{\n  background: #ffeba0;\n}\n\n.radio--common-native:checked + .radio--control:after\n{\n  visibility: visible;\n\n  opacity: 1;\n}\n\n/* theme: `button` */\n\n.radio--button-wrapper\n{\n\n  display: inline;\n}\n\n.radio--button-control\n{\n\n  z-index: 0;\n\n  box-sizing: border-box;\n  margin-right: -1px;\n\n  text-align: center;\n\n  color: black;\n}\n\n.radio--button-control:hover\n{\n  z-index: 1;\n}\n\n.radio--button-wrapper:first-child .radio--button-control\n{\n  border-radius: 3px 0 0 3px;\n}\n\n.radio--button-wrapper:last-child .radio--button-control\n{\n  margin-right: 0;\n\n  border-radius: 0 3px 3px 0;\n}\n\n.radio--button-native\n{\n}\n\n.radio--button-native:focus + .radio--button-control\n{\n  z-index: 1;\n}\n\n.radio--button-native + .radio--button-control:active\n{\n  background: #f6f5f3;\n}\n\n.radio--button-native:checked + .radio--button-control\n{\n  position: relative;\n\n  background: #ffeca6;\n}\n\n.radio--button-native:checked + .radio--button-control:active\n{\n  background: #fee481;\n}\n\n.radio--button-native:disabled + .radio--button-control\n{\n  z-index: 0;\n\n  border: 1px solid transparent;\n  background: #ebebeb;\n}\n\n.radio--button-native:disabled:checked + .radio--button-control\n{\n  background: #d9d9d9;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "radio--selector",
		"container": "radio--container",
		"wrapper": "radio--wrapper",
		"control": "radio--control",
		"native": "radio--native",
		"common-wrapper": "radio--common-wrapper radio--wrapper",
		"common-control": "radio--common-control radio--control",
		"common-native": "radio--common-native radio--native",
		"button-wrapper": "radio--button-wrapper radio--wrapper",
		"button-control": "radio--button-control radio--control",
		"button-native": "radio--button-native radio--native"
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-button-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-button-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(96), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".radio-button-m--container\n{\n\n  font: 13px/1.2 arial,sans-serif;\n}\n\n.radio-button-m--wrapper\n{\n}\n\n.radio-button-m--control\n{\n}\n\n.radio-button-m--native\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "radio-button-m--container " + __webpack_require__(96).locals["selector"] + " " + __webpack_require__(96).locals["container"] + "",
		"wrapper": "radio-button-m--wrapper " + __webpack_require__(96).locals["button-wrapper"] + "",
		"control": "radio-button-m--control " + __webpack_require__(96).locals["button-control"] + " " + __webpack_require__(10).locals["m"] + "",
		"native": "radio-button-m--native " + __webpack_require__(96).locals["button-native"] + ""
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-button-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-button-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(96), undefined);
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, ".radio-button-s--container\n{\n\n  font: 13px/1.2 arial,sans-serif;\n}\n\n.radio-button-s--wrapper\n{\n}\n\n.radio-button-s--control\n{\n}\n\n.radio-button-s--native\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "radio-button-s--container " + __webpack_require__(96).locals["selector"] + " " + __webpack_require__(96).locals["container"] + "",
		"wrapper": "radio-button-s--wrapper " + __webpack_require__(96).locals["button-wrapper"] + "",
		"control": "radio-button-s--control " + __webpack_require__(96).locals["button-control"] + " " + __webpack_require__(10).locals["s"] + "",
		"native": "radio-button-s--native " + __webpack_require__(96).locals["button-native"] + ""
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-common-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-common-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(96), undefined);

	// module
	exports.push([module.id, ".radio-common-l--container\n{\n\n  font: 15px/1.2 arial,sans-serif;\n}\n\n.radio-common-l--wrapper\n{\n\n  margin: 0 0 15px;\n}\n\n.radio-common-l--wrapper:last-child\n{\n  margin: 0;\n}\n\n.radio-common-l--control\n{\n\n  width: 17px;\n  height: 17px;\n}\n\n.radio-common-l--control:after\n{\n  top: 4px;\n  left: 4px;\n\n  width: 7px;\n  height: 7px;\n}\n\n.radio-common-l--label\n{\n  margin: 0 0 0 7px;\n}\n\n.radio-common-l--native\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "radio-common-l--container " + __webpack_require__(96).locals["selector"] + " " + __webpack_require__(96).locals["container"] + "",
		"wrapper": "radio-common-l--wrapper " + __webpack_require__(96).locals["common-wrapper"] + "",
		"control": "radio-common-l--control " + __webpack_require__(96).locals["common-control"] + "",
		"label": "radio-common-l--label",
		"native": "radio-common-l--native " + __webpack_require__(96).locals["common-native"] + ""
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-common-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-common-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(96), undefined);

	// module
	exports.push([module.id, ".radio-common-m--container\n{\n\n  font: 13px/1.2 arial,sans-serif;\n}\n\n.radio-common-m--wrapper\n{\n\n  margin: 0 0 14px;\n}\n\n.radio-common-m--wrapper:last-child\n{\n  margin: 0;\n}\n\n.radio-common-m--control\n{\n\n  width: 14px;\n  height: 14px;\n}\n\n.radio-common-m--control:after\n{\n  top: 3px;\n  left: 3px;\n\n  width: 6px;\n  height: 6px;\n}\n\n.radio-common-m--label\n{\n  margin: 0 0 0 5px;\n}\n\n.radio-common-m--native\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "radio-common-m--container " + __webpack_require__(96).locals["selector"] + " " + __webpack_require__(96).locals["container"] + "",
		"wrapper": "radio-common-m--wrapper " + __webpack_require__(96).locals["common-wrapper"] + "",
		"control": "radio-common-m--control " + __webpack_require__(96).locals["common-control"] + "",
		"label": "radio-common-m--label",
		"native": "radio-common-m--native " + __webpack_require__(96).locals["common-native"] + ""
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-common-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./radio-common-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(96), undefined);

	// module
	exports.push([module.id, ".radio-common-s--container\n{\n\n  font: 13px/1.2 arial,sans-serif;\n}\n\n.radio-common-s--wrapper\n{\n\n  margin: 0 0 14px;\n}\n\n.radio-common-s--wrapper:last-child\n{\n  margin: 0;\n}\n\n.radio-common-s--control\n{\n\n  width: 14px;\n  height: 14px;\n}\n\n.radio-common-s--control:after\n{\n  top: 3px;\n  left: 3px;\n\n  width: 6px;\n  height: 6px;\n}\n\n.radio-common-s--label\n{\n  margin: 0 0 0 5px;\n}\n\n.radio-common-s--native\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "radio-common-s--container " + __webpack_require__(96).locals["selector"] + " " + __webpack_require__(96).locals["container"] + "",
		"wrapper": "radio-common-s--wrapper " + __webpack_require__(96).locals["common-wrapper"] + "",
		"control": "radio-common-s--control " + __webpack_require__(96).locals["common-control"] + "",
		"label": "radio-common-s--label",
		"native": "radio-common-s--native " + __webpack_require__(96).locals["common-native"] + ""
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(48),
	    ARROR_DOWN = _require.ARROR_DOWN,
	    ARROR_UP = _require.ARROR_UP,
	    ENTER = _require.ENTER,
	    ESC = _require.ESC,
	    SPACE = _require.SPACE,
	    TAB = _require.TAB;

	var _require2 = __webpack_require__(2),
	    Component = _require2.Component,
	    PropTypes = _require2.PropTypes;

	var _require3 = __webpack_require__(4),
	    assign = _require3.assign,
	    constant = _require3.constant,
	    isFunction = _require3.isFunction,
	    isString = _require3.isString,
	    isUndefined = _require3.isUndefined,
	    mapN = _require3.mapN,
	    noop = _require3.noop,
	    prop = _require3.prop;

	var _require4 = __webpack_require__(52),
	    findDOMNode = _require4.findDOMNode;

	var _require5 = __webpack_require__(3),
	    filterProps = _require5.filterProps,
	    isControlled = _require5.isControlled,
	    genericName = _require5.genericName;

	var Option = __webpack_require__(108);
	var Overlay = __webpack_require__(50);
	var React = __webpack_require__(2);
	var findIndex = __webpack_require__(109);
	var searchEngine = __webpack_require__(111);
	var cc = __webpack_require__(5);
	var warn = __webpack_require__(70);

	var cssModules = {
	  l: __webpack_require__(113),
	  m: __webpack_require__(117),
	  s: __webpack_require__(119)
	};

	var byLabel = prop('label');

	var didWarnForSelectDefaultValue = false;

	var Select = function (_Component) {
	  _inherits(Select, _Component);

	  function Select(props) {
	    _classCallCheck(this, Select);

	    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	    _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    };

	    _this._onFocusItem = function (e, focusedIndex) {
	      _this.setState({
	        focusedIndex: focusedIndex
	      });
	    };

	    _this._onItemSelect = function (e, focusedIndex) {
	      var menuItem = _this._menuItems[focusedIndex];
	      var nextState = {
	        isOpened: false,
	        isPseudoFocused: true,
	        searchValue: ''
	      };

	      if (!_this._controlled) {
	        nextState.selectedIndex = focusedIndex;
	        nextState.selectedPosition = menuItem._position;
	      }

	      _this.setState(nextState);
	      _this.props.onChange(e, { value: menuItem.value });

	      _this.focus();
	    };

	    _this._onKeyDown = function (e) {
	      if (_this.props.disabled) return;

	      var isOpened = _this.state.isOpened;
	      var searchable = _this.props.searchable;


	      switch (e.keyCode) {
	        case ESC:
	          if (!isOpened) return; // pass event to the native element

	          // capture event and close menu
	          _this._closeMenu();
	          _this.focus();
	          break;

	        case TAB:
	          if (isOpened) _this._closeMenu();
	          return; // pass event to the native element

	        case ARROR_DOWN:
	          _this._focusAdjacentItem();
	          break; // capture event

	        case ARROR_UP:
	          _this._focusAdjacentItem(-1);
	          break; // capture event

	        case ENTER:
	          if (isOpened) {
	            _this._onItemSelect(null, _this.state.focusedIndex);
	          } else {
	            _this._openMenu();
	          }

	          e.stopPropagation();
	          break;

	        case SPACE:
	          if (!searchable && isOpened) _this._onItemSelect(null, _this.state.focusedIndex);
	          break;

	        default:
	          if (searchable && isOpened) _this.setState({ focusedIndex: 0, selectedIndex: -1 });
	          return; // pass event to the native element
	      }

	      e.preventDefault();
	    };

	    _this._onOutsideClick = function () {
	      if (_this.state.isOpened) _this._closeMenu();
	    };

	    _this._onSearchValueClick = function () {
	      _this.setState({
	        isOpened: true,
	        isPseudoFocused: false
	      });
	    };

	    _this._onSearchValueChange = function (e) {
	      _this.setState({
	        isPseudoFocused: false,
	        searchValue: e.target.value
	      });

	      if (!_this.state.isOpened) _this._openMenu();
	    };

	    _this._onToggleMenu = function () {
	      if (_this.props.disabled) return;

	      _this.state.isOpened ? _this._closeMenu() : _this._openMenu();

	      _this.focus();
	    };

	    _this._parentNode = function () {
	      return _this._parentRef;
	    };

	    _this._controlled = isControlled(props);

	    if (process.env.NODE_ENV !== 'production') {
	      if (_this._controlled && !isUndefined(props.defaultValue) && !didWarnForSelectDefaultValue) {
	        didWarnForSelectDefaultValue = true;
	        warn(true, 'defaultValue', 'Select', 'hidden');
	      }
	    }

	    var searchableValue = !isUndefined(props.searchableValue) ? props.searchableValue : byLabel;

	    var searchEngine = _this._searchEngine = getSearchEngine(props.searchEngine);
	    var searchValue = '';
	    var value = _this._controlled ? props.value : props.defaultValue;

	    var menuItems = _this._menuItems = calculateMenuItems(searchEngine, searchableValue, props.options, searchValue);

	    var selectedIndex = !isUndefined(value) ? findIndex(menuItems, function (item) {
	      return item.value === value;
	    }) : -1;

	    _this.state = {
	      focusedIndex: -1,
	      isOpened: false,
	      isPseudoFocused: true,
	      searchValue: searchValue,
	      selectedIndex: selectedIndex,
	      selectedPosition: selectedIndex
	    };
	    return _this;
	  }

	  _createClass(Select, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var isOpened = this.state.isOpened;

	      var focusedItemRef = this._focusedItemRef;
	      var menuRef = this._menuRef;

	      if (menuRef && focusedItemRef && isOpened && !this._wasMenuShown) {
	        this._wasMenuShown = true;

	        var menuElem = findDOMNode(menuRef);
	        var focusedElem = findDOMNode(focusedItemRef);

	        menuElem.scrollTop = focusedElem.offsetTop;
	      } else if (!isOpened) {
	        this._wasMenuShown = false;
	      }

	      if (menuRef && focusedItemRef && this._wasKeyPressed) {
	        this._wasKeyPressed = false;

	        var _menuElem = findDOMNode(menuRef);
	        var _focusedElem = findDOMNode(focusedItemRef);

	        var menuRect = _menuElem.getBoundingClientRect();
	        var focusedRect = _focusedElem.getBoundingClientRect();

	        if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
	          _menuElem.scrollTop = _focusedElem.offsetTop + _menuElem.clientHeight - _menuElem.offsetHeight;
	        }
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._controlled = isControlled(nextProps);

	      var value = nextProps.value;
	      var selectedPosition = this._controlled ? findIndex(this._menuItems, function (item) {
	        return item.value === value;
	      }) : this.state.selectedPosition;

	      this.setState({
	        selectedIndex: selectedPosition,
	        selectedPosition: selectedPosition
	      });
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextProps.searchEngine !== this.props.searchEngine) {
	        this._searchEngine = getSearchEngine(nextProps.searchEngine);
	      }

	      var _props = this.props,
	          options = _props.options,
	          _props$searchableValu = _props.searchableValue,
	          searchableValue = _props$searchableValu === undefined ? byLabel : _props$searchableValu;
	      var searchValue = this.state.searchValue;


	      if (nextProps.options !== options || nextState.searchValue !== searchValue) {
	        this._menuItems = calculateMenuItems(this._searchEngine, searchableValue, nextProps.options, nextState.searchValue);
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this._controlRef) return;
	      this._controlRef.focus();
	    }
	  }, {
	    key: '_closeMenu',
	    value: function _closeMenu() {

	      this.setState({
	        focusedIndex: -1,
	        isOpened: false,
	        isPseudoFocused: true,
	        searchValue: ''
	      });
	    }
	  }, {
	    key: '_openMenu',
	    value: function _openMenu() {
	      var selectedIndex = this.state.selectedIndex;


	      this.setState({
	        focusedIndex: Math.max(selectedIndex, 0),
	        isOpened: true
	      });
	    }
	  }, {
	    key: '_focusAdjacentItem',
	    value: function _focusAdjacentItem() {
	      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var optionsLimit = this.props.optionsLimit;
	      var _state = this.state,
	          focusedIndex = _state.focusedIndex,
	          isOpened = _state.isOpened,
	          selectedIndex = _state.selectedIndex;

	      var length = this._menuItems.length;
	      var nextFocusedIndex = focusedIndex + offset;

	      if (isOpened) {
	        this._wasKeyPressed = true;

	        nextFocusedIndex = offset > 0 ? Math.min(nextFocusedIndex, length - 1, optionsLimit - 1) : Math.max(nextFocusedIndex, 0);
	      } else {
	        nextFocusedIndex = selectedIndex > -1 ? selectedIndex : offset > 0 ? 0 : Math.min(length - 1, optionsLimit - 1);
	      }

	      this.setState({
	        focusedIndex: nextFocusedIndex,
	        isOpened: true
	      });
	    }
	  }, {
	    key: 'computeMenuItems',
	    value: function computeMenuItems(menuItems) {
	      var _this2 = this;

	      if (!this.state.isOpened) return null;

	      var css = this.css;


	      if (menuItems.length === 0) {
	        return this.renderEmptyItem({
	          children: this.props.searchEmptyText,
	          className: css('emptyItem')
	        });
	      }

	      var _state2 = this.state,
	          focusedIndex = _state2.focusedIndex,
	          selectedPosition = _state2.selectedPosition;
	      var _props2 = this.props,
	          optionsLimit = _props2.optionsLimit,
	          _props2$renderOption = _props2.renderOption,
	          renderOption = _props2$renderOption === undefined ? this.renderItemLabel : _props2$renderOption;


	      var isFocusedMenuItem = css('isFocusedMenuItem');
	      var isSelectedMenuItem = css('isSelectedMenuItem');
	      var menuItem = css('menuItem');

	      return mapN(function (option) {
	        var _cc;

	        return _this2.renderMenuItem({
	          children: renderOption(option),
	          className: cc(menuItem, (_cc = {}, _defineProperty(_cc, isFocusedMenuItem, focusedIndex === option._index), _defineProperty(_cc, isSelectedMenuItem, selectedPosition === option._position), _cc)),
	          key: option.value,
	          onClick: _this2._onItemSelect,
	          onFocus: _this2._onFocusItem,
	          position: option._index,
	          ref: focusedIndex === option._index ? function (r) {
	            return _this2._focusedItemRef = r;
	          } : null
	        });
	      }, menuItems, optionsLimit);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var className = this.props.className;
	      var css = this.css;


	      return React.createElement(
	        'span',
	        _extends({}, filterProps(this.props), {
	          className: cc(css('wrapper'), className),
	          onChange: void 0,
	          ref: function ref(r) {
	            return _this3._parentRef = r;
	          } }),
	        this.renderValue(),
	        React.createElement(
	          'span',
	          { className: css('baseline') },
	          this.renderSearch(),
	          this.renderLabel(),
	          this.renderArrow()
	        ),
	        this.renderMenu()
	      );
	    }
	  }, {
	    key: 'renderValue',
	    value: function renderValue() {
	      var _props3 = this.props,
	          disabled = _props3.disabled,
	          id = _props3.id,
	          name = _props3.name,
	          options = _props3.options;
	      var selectedPosition = this.state.selectedPosition;


	      return React.createElement('input', {
	        disabled: disabled,
	        id: id,
	        name: name,
	        type: 'hidden',
	        value: selectedPosition > -1 ? options[selectedPosition].value : '' });
	    }
	  }, {
	    key: 'renderSearch',
	    value: function renderSearch() {
	      var _this4 = this;

	      if (!this.props.searchable) return null;

	      var _props4 = this.props,
	          disabled = _props4.disabled,
	          searchable = _props4.searchable;
	      var _state3 = this.state,
	          isPseudoFocused = _state3.isPseudoFocused,
	          searchValue = _state3.searchValue;
	      var css = this.css;


	      return React.createElement('input', {
	        className: cc(css('search'), _defineProperty({}, css('isPseudoFocusedSearch'), isPseudoFocused)),
	        disabled: disabled,
	        onClick: this._onSearchValueClick,
	        onChange: this._onSearchValueChange,
	        onKeyDown: this._onKeyDown,
	        ref: searchable ? function (r) {
	          return _this4._controlRef = r;
	        } : null,
	        role: 'combobox',
	        value: searchValue });
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      var _this5 = this;

	      var _props5 = this.props,
	          disabled = _props5.disabled,
	          options = _props5.options,
	          placeholder = _props5.placeholder,
	          searchable = _props5.searchable;
	      var _state4 = this.state,
	          isPseudoFocused = _state4.isPseudoFocused,
	          selectedPosition = _state4.selectedPosition;
	      var css = this.css;


	      var hasValue = selectedPosition > -1;
	      var label = hasValue ? options[selectedPosition].label : placeholder;

	      var labelProps = {
	        children: isPseudoFocused ? label : '',
	        className: cc(css('control'), _defineProperty({}, css('hasPlaceholder'), !hasValue)),
	        disabled: disabled,
	        onClick: this._onToggleMenu,
	        onKeyDown: this._onKeyDown,
	        ref: searchable ? null : function (r) {
	          return _this5._controlRef = r;
	        }
	      };

	      if (searchable) {
	        return React.createElement('span', labelProps);
	      }

	      return React.createElement('button', labelProps);
	    }
	  }, {
	    key: 'renderArrow',
	    value: function renderArrow() {
	      var isOpened = this.state.isOpened;
	      var css = this.css;


	      return React.createElement('i', {
	        className: cc(css('arrow'), _defineProperty({}, css('isOpenedMenu'), isOpened)),
	        onClick: this._onToggleMenu });
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      var _cc5,
	          _this6 = this;

	      var hasFixedWidth = this.props.hasFixedWidth;
	      var isOpened = this.state.isOpened;
	      var css = this.css;


	      return React.createElement(
	        Overlay,
	        {
	          className: cc(css('menu'), (_cc5 = {}, _defineProperty(_cc5, css('isClosedMenu'), !isOpened), _defineProperty(_cc5, css('isFixedMenu'), hasFixedWidth), _cc5)),
	          onOutsideClick: this._onOutsideClick,
	          parentNode: this._parentNode,
	          ref: function ref(r) {
	            return _this6._menuRef = r;
	          },
	          role: 'listbox' },
	        this.computeMenuItems(this._menuItems)
	      );
	    }
	  }, {
	    key: 'renderMenuItem',
	    value: function renderMenuItem(itemProps) {
	      return React.createElement(Option, itemProps);
	    }
	  }, {
	    key: 'renderEmptyItem',
	    value: function renderEmptyItem(itemProps) {
	      return React.createElement('span', itemProps);
	    }
	  }, {
	    key: 'renderItemLabel',
	    value: function renderItemLabel(option) {
	      return option.label;
	    }
	  }]);

	  return Select;
	}(Component);

	Select.defaultProps = {
	  hasFixedWidth: false,
	  onChange: noop,
	  optionsLimit: Infinity,
	  placeholder: '—',
	  searchable: false,
	  searchEmptyText: 'No results found',
	  searchEngine: 'fuzzy',
	  size: 'm',
	  styles: cssModules
	};

	Select.propTypes = {
	  hasFixedWidth: PropTypes.bool,
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  options: PropTypes.array.isRequired,
	  optionsLimit: PropTypes.number,
	  placeholder: PropTypes.string,
	  renderOption: PropTypes.func,
	  searchable: PropTypes.bool,
	  searchableValue: PropTypes.func,
	  searchEmptyText: PropTypes.string,
	  searchEngine: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf(['fuzzy', 'includes', 'startsWith'])]),
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object
	};

	module.exports = Select;

	// todo use understandable names for index and position
	// calculateMenuItems :: (a -> q -> bool) -> ({a} -> a) -> [a] -> q -> [b]
	function calculateMenuItems(searchEngine, searchableValue, items) {
	  var needle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

	  var length = items.length;
	  var availableItems = [];
	  var nextLength = 0;

	  for (var i = 0; i < length; ++i) {
	    var item = items[i];

	    if (!searchEngine(needle, searchableValue(item))) continue;
	    availableItems.push(assign(item, {
	      _index: nextLength++,
	      _position: i
	    }));
	  }

	  return availableItems;
	}

	// getSearchEngine :: a -> func
	function getSearchEngine() {
	  var engine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : constant(true);

	  if (isFunction(engine)) return engine;
	  if (isString(engine)) return searchEngine[engine]; // check existance
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(4),
	    noop = _require2.noop;

	var React = __webpack_require__(2);

	var Option = function (_Component) {
	  _inherits(Option, _Component);

	  function Option() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Option);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), _this), _this._onClick = function (e) {
	      _this.props.onClick(e, _this.props.position);
	    }, _this._onFocus = function (e) {
	      _this.props.onFocus(e, _this.props.position);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Option, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          value = _props.value;


	      return React.createElement(
	        'span',
	        {
	          className: className,
	          'data-value': value,
	          onClick: this._onClick,
	          onMouseEnter: this._onFocus,
	          role: 'option' },
	        children
	      );
	    }
	  }]);

	  return Option;
	}(Component);

	Option.defaultProps = {
	  onClick: noop,
	  onFocus: noop
	};

	Option.propTypes = {
	  onClick: PropTypes.func,
	  onFocus: PropTypes.func,
	  position: PropTypes.number,
	  value: PropTypes.string
	};

	module.exports = Option;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = findIndex;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(110)(module)))

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fuzzysearch = __webpack_require__(112);

	exports.fuzzy = fuzzy;
	exports.includes = includes;
	exports.startsWith = startsWith;

	// includes :: a -> b -> bool
	function fuzzy(needle, haystack) {
	  return fuzzysearch(needle.toLowerCase(), haystack.toLowerCase());
	}

	// includes :: a -> b -> bool
	function includes(needle, haystack) {
	  return haystack.toLowerCase().includes(needle.toLowerCase());
	}

	// startsWith :: a -> b -> bool
	function startsWith(needle, haystack) {
	  return haystack.toLowerCase().startsWith(needle.toLowerCase());
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';

	function fuzzysearch (needle, haystack) {
	  var tlen = haystack.length;
	  var qlen = needle.length;
	  if (qlen > tlen) {
	    return false;
	  }
	  if (qlen === tlen) {
	    return needle === haystack;
	  }
	  outer: for (var i = 0, j = 0; i < qlen; i++) {
	    var nch = needle.charCodeAt(i);
	    while (j < tlen) {
	      if (haystack.charCodeAt(j++) === nch) {
	        continue outer;
	      }
	    }
	    return false;
	  }
	  return true;
	}

	module.exports = fuzzysearch;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(114);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./select-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./select-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(115), undefined);
	exports.i(__webpack_require__(116), undefined);

	// module
	exports.push([module.id, ".select-l--wrapper\n{\n}\n\n.select-l--baseline\n{\n}\n\n.select-l--search\n{\n}\n\n.select-l--control\n{\n}\n\n.select-l--arrow\n{\n}\n\n.select-l--menu\n{\n}\n\n.select-l--menuItem\n{\n}\n\n.select-l--emptyItem\n{\n}\n\n/* mixin */\n\n.select-l--hasPlaceholder\n{\n}\n\n.select-l--isClosedMenu\n{\n}\n\n.select-l--isFixedMenu\n{\n}\n\n.select-l--isFocusedMenuItem\n{\n}\n\n.select-l--isOpenedMenu\n{\n}\n\n.select-l--isPseudoFocusedSearch\n{\n}\n\n.select-l--isSelectedMenuItem\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "select-l--wrapper " + __webpack_require__(115).locals["selector"] + " " + __webpack_require__(115).locals["wrapper"] + " " + __webpack_require__(116).locals["wrapper-l"] + "",
		"baseline": "select-l--baseline " + __webpack_require__(115).locals["baseline"] + "",
		"search": "select-l--search " + __webpack_require__(115).locals["search"] + " " + __webpack_require__(116).locals["search-l"] + "",
		"control": "select-l--control " + __webpack_require__(115).locals["control"] + " " + __webpack_require__(116).locals["control-l"] + "",
		"arrow": "select-l--arrow " + __webpack_require__(115).locals["arrow"] + " " + __webpack_require__(116).locals["arrow-l"] + "",
		"menu": "select-l--menu " + __webpack_require__(115).locals["menu"] + " " + __webpack_require__(116).locals["menu-l"] + "",
		"menuItem": "select-l--menuItem " + __webpack_require__(115).locals["menuItem"] + " " + __webpack_require__(116).locals["menuItem-l"] + "",
		"emptyItem": "select-l--emptyItem " + __webpack_require__(115).locals["emptyItem"] + " " + __webpack_require__(116).locals["emptyItem-l"] + "",
		"hasPlaceholder": "select-l--hasPlaceholder " + __webpack_require__(115).locals["hasPlaceholder"] + "",
		"isClosedMenu": "select-l--isClosedMenu " + __webpack_require__(115).locals["isClosedMenu"] + "",
		"isFixedMenu": "select-l--isFixedMenu " + __webpack_require__(115).locals["isFixedMenu"] + "",
		"isFocusedMenuItem": "select-l--isFocusedMenuItem " + __webpack_require__(115).locals["isFocusedMenuItem"] + "",
		"isOpenedMenu": "select-l--isOpenedMenu " + __webpack_require__(115).locals["isOpenedMenu"] + "",
		"isPseudoFocusedSearch": "select-l--isPseudoFocusedSearch " + __webpack_require__(115).locals["isPseudoFocusedSearch"] + "",
		"isSelectedMenuItem": "select-l--isSelectedMenuItem " + __webpack_require__(115).locals["isSelectedMenuItem"] + " " + __webpack_require__(116).locals["isSelectedMenuItem-l"] + ""
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(9), undefined);
	exports.i(__webpack_require__(58), undefined);

	// module
	exports.push([module.id, ".select--selector\n{\n  /* the common selector */\n}\n\n.select--wrapper\n{\n  position: relative;\n\n  display: inline-block;\n}\n\n.select--baseline\n{\n  display: inline-block;\n  overflow: visible;\n\n  width: 100%;\n\n  vertical-align: top;\n\n  font: inherit;\n}\n\n.select--search\n{\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  display: inline-block;\n\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n\n  border: 0;\n  outline: 0;\n  background: transparent;\n  box-shadow: none;\n\n  font: inherit;\n\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.select--control\n{\n\n  display: block;\n  overflow: hidden;\n\n  width: 100%;\n\n  text-align: left;\n  text-overflow: ellipsis;\n}\n\n.select--control:after\n{\n  content: '\\A0';\n\n  font: inherit;\n}\n\n.select--arrow\n{\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  display: block;\n\n  height: 100%;\n\n  cursor: pointer;\n  -webkit-transition: -webkit-transform .1s ease-out;\n  transition: -webkit-transform .1s ease-out;\n  transition: transform .1s ease-out;\n  transition: transform .1s ease-out, -webkit-transform .1s ease-out;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n\n.select--menu\n{\n\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n\n  overflow-y: auto;\n\n  min-width: 100%;\n\n  background: white;\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1),0 9px 20px -5px rgba(0,0,0,.4);\n\n  font: inherit;\n}\n\n.select--menuItem\n{\n  display: block;\n  overflow-x: hidden;\n\n  cursor: pointer;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  font: inherit;\n}\n\n.select--emptyItem\n{\n\n  color: rgba(0,0,0,.4);\n}\n\n/* states */\n\n.select--search:focus + .select--control\n{\n  border: 1px solid #ffdb4d;\n  box-shadow: inset 0 0 0 1px #ffdb4d;\n}\n\n.select--search:disabled + .select--control\n{\n  cursor: default;\n\n  color: rgba(0,0,0,.5);\n  border: 1px solid #ebebeb;\n  background: #ebebeb;\n}\n\n.select--control:disabled ~ .select--arrow,\n.select--search:disabled ~ .select--arrow\n{\n  cursor: default;\n\n  opacity: .4;\n}\n\n/* mixin */\n\n.select--hasPlaceholder\n{\n  color: rgba(0,0,0,.5);\n}\n\n.select--isClosedMenu\n{\n  display: none;\n}\n\n.select--isFixedMenu\n{\n  width: 100%;\n}\n\n.select--isFocusedMenuItem\n{\n  background-color: #ffeba0;\n}\n\n.select--isOpenedMenu\n{\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n\n.select--isPseudoFocusedSearch\n{\n  opacity: 0;\n}\n\n.select--isSelectedMenuItem\n{\n  background-repeat: no-repeat;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "select--selector",
		"wrapper": "select--wrapper",
		"baseline": "select--baseline",
		"search": "select--search",
		"control": "select--control " + __webpack_require__(9).locals["control"] + " " + __webpack_require__(9).locals["normal"] + "",
		"arrow": "select--arrow",
		"menu": "select--menu " + __webpack_require__(58).locals["menu"] + "",
		"menuItem": "select--menuItem",
		"emptyItem": "select--emptyItem select--menuItem",
		"hasPlaceholder": "select--hasPlaceholder",
		"isClosedMenu": "select--isClosedMenu",
		"isFixedMenu": "select--isFixedMenu",
		"isFocusedMenuItem": "select--isFocusedMenuItem",
		"isOpenedMenu": "select--isOpenedMenu",
		"isPseudoFocusedSearch": "select--isPseudoFocusedSearch",
		"isSelectedMenuItem": "select--isSelectedMenuItem"
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(10), undefined);

	// module
	exports.push([module.id, "/* size s */\n\n.select-size--wrapper-s\n{\n  width: 180px;\n\n  font: 13px/24px arial,sans-serif;\n}\n\n.select-size--search-s\n{\n  padding: 0 25px 0 11px;\n}\n\n.select-size--control-s\n{\n\n  padding-right: 25px;\n}\n\n.select-size--arrow-s\n{\n  width: 26px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%225%22%3E%3Cpath%20d%3D%22M8.251%200L4.5%203.572.75%200%200%20.715l3.75%203.571L4.5%205%209%20.715z%22%2F%3E%3C%2Fsvg%3E) center center no-repeat;\n}\n\n.select-size--menu-s\n{\n  max-height: 200px;\n  padding: 3px 0;\n}\n\n.select-size--menuItem-s\n{\n  padding: 0 10px 0 30px;\n}\n\n.select-size--emptyItem-s\n{\n  padding: 0 10px;\n}\n\n.select-size--isSelectedMenuItem-s\n{\n  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2214%22%20viewBox%3D%220%200%2013%2014%22%3E%3Cpath%20d%3D%22M11.45.418L4.493%2010.825l-3.26-3.633L.332%208.34l4.272%204.719%207.893-11.637z%22%2F%3E%3C%2Fsvg%3E);\n  background-position: 11px center;\n  background-size: auto;\n}\n\n/* size m */\n\n.select-size--wrapper-m\n{\n  width: 183px;\n\n  font: 13px/28px arial,sans-serif;\n}\n\n.select-size--search-m\n{\n  padding: 0 29px 0 13px;\n}\n\n.select-size--control-m\n{\n\n  padding-right: 30px;\n}\n\n.select-size--arrow-m\n{\n  width: 31px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%226%22%3E%3Cpath%20d%3D%22M10.08%200L5.5%204.36.91%200%200%20.86l5.5%205.25L11%20.86z%22%2F%3E%3C%2Fsvg%3E) center center no-repeat;\n}\n\n.select-size--menu-m\n{\n  max-height: 198px;\n  padding: 4px 0;\n\n  line-height: 24px;\n}\n\n.select-size--menuItem-m\n{\n  padding: 0 13px 0 30px;\n}\n\n.select-size--emptyItem-m\n{\n  padding: 0 13px;\n}\n\n.select-size--isSelectedMenuItem-m\n{\n  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2214%22%20viewBox%3D%220%200%2013%2014%22%3E%3Cpath%20d%3D%22M11.45.418L4.493%2010.825l-3.26-3.633L.332%208.34l4.272%204.719%207.893-11.637z%22%2F%3E%3C%2Fsvg%3E);\n  background-position: 13px center;\n  background-size: auto;\n}\n\n/* size l */\n\n.select-size--wrapper-l\n{\n  width: 210px;\n\n  font: 15px/32px arial,sans-serif;\n}\n\n.select-size--search-l\n{\n  padding: 0 25px 0 8px;\n}\n\n.select-size--control-l\n{\n\n  padding-right: 34px;\n}\n\n.select-size--arrow-l\n{\n  width: 35px;\n\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%226%22%3E%3Cpath%20d%3D%22M10.08%200L5.5%204.36.91%200%200%20.86l5.5%205.25L11%20.86z%22%2F%3E%3C%2Fsvg%3E) center center no-repeat;\n}\n\n.select-size--menu-l\n{\n  max-height: 236px;\n  padding: 5px 0;\n\n  line-height: 28px;\n}\n\n.select-size--menuItem-l\n{\n  padding: 0 15px 0 34px;\n}\n\n.select-size--emptyItem-l\n{\n  padding: 0 15px;\n}\n\n.select-size--isSelectedMenuItem-l\n{\n  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2215%22%20viewBox%3D%220%200%2014%2015%22%3E%3Cpath%20d%3D%22M12.035.373L4.504%2011.641.975%207.707l-.976%201.242%204.625%205.109L13.17%201.46z%22%2F%3E%3C%2Fsvg%3E);\n  background-position: 16px center;\n  background-size: auto;\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper-s": "select-size--wrapper-s",
		"search-s": "select-size--search-s",
		"control-s": "select-size--control-s " + __webpack_require__(10).locals["s"] + "",
		"arrow-s": "select-size--arrow-s",
		"menu-s": "select-size--menu-s",
		"menuItem-s": "select-size--menuItem-s",
		"emptyItem-s": "select-size--emptyItem-s",
		"isSelectedMenuItem-s": "select-size--isSelectedMenuItem-s",
		"wrapper-m": "select-size--wrapper-m",
		"search-m": "select-size--search-m",
		"control-m": "select-size--control-m " + __webpack_require__(10).locals["m"] + "",
		"arrow-m": "select-size--arrow-m",
		"menu-m": "select-size--menu-m",
		"menuItem-m": "select-size--menuItem-m",
		"emptyItem-m": "select-size--emptyItem-m",
		"isSelectedMenuItem-m": "select-size--isSelectedMenuItem-m",
		"wrapper-l": "select-size--wrapper-l",
		"search-l": "select-size--search-l",
		"control-l": "select-size--control-l " + __webpack_require__(10).locals["l"] + "",
		"arrow-l": "select-size--arrow-l",
		"menu-l": "select-size--menu-l",
		"menuItem-l": "select-size--menuItem-l",
		"emptyItem-l": "select-size--emptyItem-l",
		"isSelectedMenuItem-l": "select-size--isSelectedMenuItem-l"
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./select-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./select-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(115), undefined);
	exports.i(__webpack_require__(116), undefined);

	// module
	exports.push([module.id, ".select-m--wrapper\n{\n}\n\n.select-m--baseline\n{\n}\n\n.select-m--search\n{\n}\n\n.select-m--control\n{\n}\n\n.select-m--arrow\n{\n}\n\n.select-m--menu\n{\n}\n\n.select-m--menuItem\n{\n}\n\n.select-m--emptyItem\n{\n}\n\n/* mixin */\n\n.select-m--hasPlaceholder\n{\n}\n\n.select-m--isClosedMenu\n{\n}\n\n.select-m--isFixedMenu\n{\n}\n\n.select-m--isFocusedMenuItem\n{\n}\n\n.select-m--isOpenedMenu\n{\n}\n\n.select-m--isPseudoFocusedSearch\n{\n}\n\n.select-m--isSelectedMenuItem\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "select-m--wrapper " + __webpack_require__(115).locals["selector"] + " " + __webpack_require__(115).locals["wrapper"] + " " + __webpack_require__(116).locals["wrapper-m"] + "",
		"baseline": "select-m--baseline " + __webpack_require__(115).locals["baseline"] + "",
		"search": "select-m--search " + __webpack_require__(115).locals["search"] + " " + __webpack_require__(116).locals["search-m"] + "",
		"control": "select-m--control " + __webpack_require__(115).locals["control"] + " " + __webpack_require__(116).locals["control-m"] + "",
		"arrow": "select-m--arrow " + __webpack_require__(115).locals["arrow"] + " " + __webpack_require__(116).locals["arrow-m"] + "",
		"menu": "select-m--menu " + __webpack_require__(115).locals["menu"] + " " + __webpack_require__(116).locals["menu-m"] + "",
		"menuItem": "select-m--menuItem " + __webpack_require__(115).locals["menuItem"] + " " + __webpack_require__(116).locals["menuItem-m"] + "",
		"emptyItem": "select-m--emptyItem " + __webpack_require__(115).locals["emptyItem"] + " " + __webpack_require__(116).locals["emptyItem-m"] + "",
		"hasPlaceholder": "select-m--hasPlaceholder " + __webpack_require__(115).locals["hasPlaceholder"] + "",
		"isClosedMenu": "select-m--isClosedMenu " + __webpack_require__(115).locals["isClosedMenu"] + "",
		"isFixedMenu": "select-m--isFixedMenu " + __webpack_require__(115).locals["isFixedMenu"] + "",
		"isFocusedMenuItem": "select-m--isFocusedMenuItem " + __webpack_require__(115).locals["isFocusedMenuItem"] + "",
		"isOpenedMenu": "select-m--isOpenedMenu " + __webpack_require__(115).locals["isOpenedMenu"] + "",
		"isPseudoFocusedSearch": "select-m--isPseudoFocusedSearch " + __webpack_require__(115).locals["isPseudoFocusedSearch"] + "",
		"isSelectedMenuItem": "select-m--isSelectedMenuItem " + __webpack_require__(115).locals["isSelectedMenuItem"] + " " + __webpack_require__(116).locals["isSelectedMenuItem-m"] + ""
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./select-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./select-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(115), undefined);
	exports.i(__webpack_require__(116), undefined);

	// module
	exports.push([module.id, ".select-s--wrapper\n{\n}\n\n.select-s--baseline\n{\n}\n\n.select-s--search\n{\n}\n\n.select-s--control\n{\n}\n\n.select-s--arrow\n{\n}\n\n.select-s--menu\n{\n}\n\n.select-s--menuItem\n{\n}\n\n.select-s--emptyItem\n{\n}\n\n/* mixin */\n\n.select-s--hasPlaceholder\n{\n}\n\n.select-s--isClosedMenu\n{\n}\n\n.select-s--isFixedMenu\n{\n}\n\n.select-s--isFocusedMenuItem\n{\n}\n\n.select-s--isOpenedMenu\n{\n}\n\n.select-s--isPseudoFocusedSearch\n{\n}\n\n.select-s--isSelectedMenuItem\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "select-s--wrapper " + __webpack_require__(115).locals["selector"] + " " + __webpack_require__(115).locals["wrapper"] + " " + __webpack_require__(116).locals["wrapper-s"] + "",
		"baseline": "select-s--baseline " + __webpack_require__(115).locals["baseline"] + "",
		"search": "select-s--search " + __webpack_require__(115).locals["search"] + " " + __webpack_require__(116).locals["search-s"] + "",
		"control": "select-s--control " + __webpack_require__(115).locals["control"] + " " + __webpack_require__(116).locals["control-s"] + "",
		"arrow": "select-s--arrow " + __webpack_require__(115).locals["arrow"] + " " + __webpack_require__(116).locals["arrow-s"] + "",
		"menu": "select-s--menu " + __webpack_require__(115).locals["menu"] + " " + __webpack_require__(116).locals["menu-s"] + "",
		"menuItem": "select-s--menuItem " + __webpack_require__(115).locals["menuItem"] + " " + __webpack_require__(116).locals["menuItem-s"] + "",
		"emptyItem": "select-s--emptyItem " + __webpack_require__(115).locals["emptyItem"] + " " + __webpack_require__(116).locals["emptyItem-s"] + "",
		"hasPlaceholder": "select-s--hasPlaceholder " + __webpack_require__(115).locals["hasPlaceholder"] + "",
		"isClosedMenu": "select-s--isClosedMenu " + __webpack_require__(115).locals["isClosedMenu"] + "",
		"isFixedMenu": "select-s--isFixedMenu " + __webpack_require__(115).locals["isFixedMenu"] + "",
		"isFocusedMenuItem": "select-s--isFocusedMenuItem " + __webpack_require__(115).locals["isFocusedMenuItem"] + "",
		"isOpenedMenu": "select-s--isOpenedMenu " + __webpack_require__(115).locals["isOpenedMenu"] + "",
		"isPseudoFocusedSearch": "select-s--isPseudoFocusedSearch " + __webpack_require__(115).locals["isPseudoFocusedSearch"] + "",
		"isSelectedMenuItem": "select-s--isSelectedMenuItem " + __webpack_require__(115).locals["isSelectedMenuItem"] + " " + __webpack_require__(116).locals["isSelectedMenuItem-s"] + ""
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    genericName = _require2.genericName;

	var _require3 = __webpack_require__(4),
	    noop = _require3.noop;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);

	var cssModules = {
	  l: __webpack_require__(122),
	  m: __webpack_require__(126),
	  s: __webpack_require__(128),
	  xs: __webpack_require__(130)
	};

	var Spin = function (_Component) {
	  _inherits(Spin, _Component);

	  function Spin() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Spin);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Spin.__proto__ || Object.getPrototypeOf(Spin)).call.apply(_ref, [this].concat(args))), _this), _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    }, _this.focus = noop, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Spin, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          id = _props.id;
	      var css = this.css;


	      return React.createElement('span', _extends({}, filterProps(this.props), {
	        className: cc(css('control'), className),
	        id: id }));
	    }
	  }]);

	  return Spin;
	}(Component);

	Spin.defaultProps = {
	  size: 'm',
	  styles: cssModules
	};

	Spin.propTypes = {
	  size: PropTypes.oneOf(['l', 'm', 's', 'xs']),
	  styles: PropTypes.object
	};

	module.exports = Spin;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(124), undefined);
	exports.i(__webpack_require__(125), undefined);

	// module
	exports.push([module.id, ".spin-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "spin-l--control " + __webpack_require__(124).locals["selector"] + " " + __webpack_require__(124).locals["control"] + " " + __webpack_require__(125).locals["l"] + ""
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes spin--spin\n{\n  from\n  {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to\n  {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin--spin\n{\n  from\n  {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to\n  {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.spin--selector\n{\n  /* the common selector */\n}\n\n.spin--control\n{\n  display: inline-block;\n\n  margin: 0;\n\n  -webkit-animation: spin--spin 1s infinite linear;\n\n          animation: spin--spin 1s infinite linear;\n\n  border: 2px solid #fc0;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-radius: 50%;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "spin--selector",
		"control": "spin--control",
		"spin": "spin--spin"
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".spin-size--xs\n{\n  width: 16px;\n  height: 16px;\n\n  line-height: 16px;\n}\n\n.spin-size--s\n{\n  width: 24px;\n  height: 24px;\n\n  line-height: 24px;\n}\n\n.spin-size--m\n{\n  width: 28px;\n  height: 28px;\n\n  line-height: 28px;\n}\n\n.spin-size--l\n{\n  width: 32px;\n  height: 32px;\n\n  line-height: 32px;\n}\n", ""]);

	// exports
	exports.locals = {
		"xs": "spin-size--xs",
		"s": "spin-size--s",
		"m": "spin-size--m",
		"l": "spin-size--l"
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(127);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(124), undefined);
	exports.i(__webpack_require__(125), undefined);

	// module
	exports.push([module.id, ".spin-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "spin-m--control " + __webpack_require__(124).locals["selector"] + " " + __webpack_require__(124).locals["control"] + " " + __webpack_require__(125).locals["m"] + ""
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(129);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(124), undefined);
	exports.i(__webpack_require__(125), undefined);

	// module
	exports.push([module.id, ".spin-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "spin-s--control " + __webpack_require__(124).locals["selector"] + " " + __webpack_require__(124).locals["control"] + " " + __webpack_require__(125).locals["s"] + ""
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-xs.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./spin-xs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(124), undefined);
	exports.i(__webpack_require__(125), undefined);

	// module
	exports.push([module.id, ".spin-xs--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "spin-xs--control " + __webpack_require__(124).locals["selector"] + " " + __webpack_require__(124).locals["control"] + " " + __webpack_require__(125).locals["xs"] + ""
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    genericName = _require2.genericName;

	var _require3 = __webpack_require__(4),
	    noop = _require3.noop;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);

	var cssModules = {
	  l: __webpack_require__(133),
	  m: __webpack_require__(137),
	  s: __webpack_require__(139)
	};

	var Textarea = function (_Component) {
	  _inherits(Textarea, _Component);

	  function Textarea() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Textarea);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call.apply(_ref, [this].concat(args))), _this), _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    }, _this._onChange = function (e) {
	      var value = e.target.value;
	      _this.props.onChange(e, { value: value });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Textarea, [{
	    key: 'focus',
	    value: function focus() {
	      if (!this._textarea) return;
	      this._textarea.focus();
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (!this._textarea) return;
	      this._textarea.select();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          autoComplete = _props.autoComplete,
	          autoFocus = _props.autoFocus,
	          className = _props.className,
	          children = _props.children,
	          cols = _props.cols,
	          defaultValue = _props.defaultValue,
	          disabled = _props.disabled,
	          id = _props.id,
	          maxLength = _props.maxLength,
	          name = _props.name,
	          placeholder = _props.placeholder,
	          readOnly = _props.readOnly,
	          rows = _props.rows,
	          value = _props.value;
	      var css = this.css;


	      return React.createElement(
	        'textarea',
	        _extends({}, filterProps(this.props), {
	          autoComplete: autoComplete,
	          autoFocus: autoFocus,
	          className: cc(css('control'), className),
	          cols: cols,
	          defaultValue: defaultValue,
	          disabled: disabled,
	          id: id,
	          maxLength: maxLength,
	          name: name,
	          onChange: this._onChange,
	          placeholder: placeholder,
	          readOnly: readOnly,
	          rows: rows,
	          ref: function ref(r) {
	            return _this2._textarea = r;
	          },
	          value: value }),
	        children
	      );
	    }
	  }]);

	  return Textarea;
	}(Component);

	Textarea.defaultProps = {
	  onChange: noop,
	  size: 'm',
	  styles: cssModules,
	  rows: 3
	};

	Textarea.propTypes = {
	  cols: PropTypes.number,
	  rows: PropTypes.number,
	  name: PropTypes.string.isRequired,
	  onChange: PropTypes.func,
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object
	};

	module.exports = Textarea;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./textarea-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./textarea-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(135), undefined);
	exports.i(__webpack_require__(136), undefined);

	// module
	exports.push([module.id, ".textarea-l--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "textarea-l--control " + __webpack_require__(135).locals["selector"] + " " + __webpack_require__(135).locals["control"] + " " + __webpack_require__(136).locals["l"] + ""
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(57), undefined);

	// module
	exports.push([module.id, ".textarea--selector\n{\n  /* the common selector */\n}\n\n.textarea--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "textarea--selector",
		"control": "textarea--control " + __webpack_require__(57).locals["control"] + ""
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".textarea-size--s\n{\n  padding: 3px 6px;\n\n  font: 13px/1.2 arial,sans-serif;\n}\n\n.textarea-size--m\n{\n  padding: 5px 7px;\n\n  font: 13px/1.2 arial,sans-serif;\n}\n\n.textarea-size--l\n{\n  padding: 6px 9px;\n\n  font: 15px/1.2 arial,sans-serif;\n}\n", ""]);

	// exports
	exports.locals = {
		"s": "textarea-size--s",
		"m": "textarea-size--m",
		"l": "textarea-size--l"
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./textarea-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./textarea-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(135), undefined);
	exports.i(__webpack_require__(136), undefined);

	// module
	exports.push([module.id, ".textarea-m--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "textarea-m--control " + __webpack_require__(135).locals["selector"] + " " + __webpack_require__(135).locals["control"] + " " + __webpack_require__(136).locals["m"] + ""
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./textarea-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./textarea-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(135), undefined);
	exports.i(__webpack_require__(136), undefined);

	// module
	exports.push([module.id, ".textarea-s--control\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "textarea-s--control " + __webpack_require__(135).locals["selector"] + " " + __webpack_require__(135).locals["control"] + " " + __webpack_require__(136).locals["s"] + ""
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var Overlay = __webpack_require__(142);
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(5);

	var baseStyles = {
	  'normal-l': __webpack_require__(143),
	  'normal-m': __webpack_require__(148),
	  'normal-s': __webpack_require__(151),
	  'success-l': __webpack_require__(154),
	  'success-m': __webpack_require__(157),
	  'success-s': __webpack_require__(159),
	  'warning-l': __webpack_require__(161),
	  'warning-m': __webpack_require__(164),
	  'warning-s': __webpack_require__(166)
	};

	var height = {
	  xs: 24,
	  s: 28,
	  m: 32
	};

	var Tooltip = function (_Component) {
	  _inherits(Tooltip, _Component);

	  function Tooltip(props) {
	    _classCallCheck(this, Tooltip);

	    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

	    _this.calculatePosition = function (rect) {
	      if (_this.props.direction === 'bottom' || _this.props.direction === 'top') {
	        return rect.top + (rect.left - rect.width / 2) / 10000;
	      }

	      return rect.top - rect.height / 2 + rect.left / 10000;
	    };

	    _this.onPositionUpdate = function (rect) {
	      var maxWidth = _this.props.maxWidth;
	      var isMultiline = _this.state.isMultiline;


	      if (isMultiline !== _this.isMultiline(rect, maxWidth)) {
	        _this.setState({
	          isMultiline: !_this.state.isMultiline
	        });
	      }
	    };

	    _this.shouldComponentUpdatePosition = function (prevProps) {
	      return prevProps.direction !== _this.props.direction;
	    };

	    _this.state = {
	      isMultiline: false
	    };
	    return _this;
	  }

	  /**
	   * @param  {object} rect
	   * @param  {number} rect.height
	   * @param  {number} rect.left
	   * @param  {number} rect.top
	   * @param  {number} rect.width
	   * @return {number}
	   */


	  _createClass(Tooltip, [{
	    key: 'isMultiline',


	    /**
	     * @param  {object}  rect
	     * @param  {number}  rect.height
	     * @param  {number}  rect.width
	     * @param  {number}  maxWidth
	     * @return {boolean}
	     */
	    value: function isMultiline(rect, maxWidth) {
	      return rect.width * rect.height / maxWidth > height[this.props.size];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;

	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          direction = _props.direction,
	          size = _props.size,
	          type = _props.type;

	      var styles = baseStyles[type + '-' + size];

	      return React.createElement(
	        Overlay,
	        {
	          className: classNames(className, styles[direction], (_classNames = {}, _defineProperty(_classNames, styles.isClosed, !children), _defineProperty(_classNames, styles.isOpened, children), _defineProperty(_classNames, styles.isLine, !this.state.isMultiline), _classNames)),
	          onPositionUpdate: this.onPositionUpdate,
	          shouldComponentUpdatePosition: this.shouldComponentUpdatePosition },
	        children
	      );
	    }
	  }]);

	  return Tooltip;
	}(Component);

	Tooltip.defaultProps = {
	  direction: 'right',
	  maxWidth: 300,
	  size: 'm',
	  type: 'normal'
	};

	Tooltip.propTypes = {
	  direction: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
	  maxWidth: PropTypes.number,
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  type: PropTypes.oneOf(['normal', 'success', 'warning'])
	};

	module.exports = Tooltip;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(32),
	    genericId = _require2.genericId;

	var _require3 = __webpack_require__(4),
	    noop = _require3.noop;

	var React = __webpack_require__(2);

	var MOUNTED_OVERLAYS = {};

	var pendingUpdate;

	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);

	  function Overlay(props) {
	    _classCallCheck(this, Overlay);

	    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

	    _this.state = {
	      id: genericId()
	    };
	    return _this;
	  }

	  _createClass(Overlay, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      MOUNTED_OVERLAYS[this.state.id] = this;
	      debouncedUpdate();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.props.shouldComponentUpdatePosition(prevProps, prevState)) {
	        updateOverlays();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      delete MOUNTED_OVERLAYS[this.state.id];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className;


	      return React.createElement(
	        'div',
	        {
	          className: className,
	          ref: 'overlay' },
	        children
	      );
	    }
	  }]);

	  return Overlay;
	}(Component);

	Overlay.defaultProps = {
	  calculatePosition: calculatePosition,
	  onPositionUpdate: noop,
	  shouldComponentUpdatePosition: noop
	};

	Overlay.propTypes = {
	  calculatePosition: PropTypes.func,
	  onPositionUpdate: PropTypes.func,
	  shouldComponentUpdatePosition: PropTypes.func
	};

	module.exports = Overlay;

	/**
	 * @param  {object} rect
	 * @param  {number} rect.left
	 * @param  {number} rect.top
	 * @return {number}
	 */
	function calculatePosition(rect) {
	  return rect.top + rect.left / 10000;
	}

	function debouncedUpdate() {
	  clearTimeout(pendingUpdate);
	  pendingUpdate = setTimeout(updateOverlays);
	}

	function updateOverlays() {
	  clearTimeout(pendingUpdate);

	  var layers = [];

	  var component;
	  var rect;
	  var ref;

	  for (var id in MOUNTED_OVERLAYS) {
	    component = MOUNTED_OVERLAYS[id];

	    if (!component.refs.overlay) {
	      continue;
	    }

	    ref = component.refs.overlay;
	    rect = ref.getBoundingClientRect();

	    layers.push({
	      component: component,
	      pos: component.props.calculatePosition(rect),
	      rect: rect,
	      ref: ref
	    });
	  }

	  layers.sort(byPos);

	  var index = layers.length;
	  var target;

	  while (index--) {
	    target = layers[index];
	    target.ref.style.zIndex = 100 + index;
	    target.component.props.onPositionUpdate(target.rect, target.ref);
	  }
	}

	/**
	 * @param  {object} a
	 * @param  {number} a.pos
	 * @param  {object} b
	 * @param  {number} b.pos
	 * @return {number}
	 */
	function byPos(a, b) {
	  return b.pos - a.pos;
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(144);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-normal-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-normal-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(146), undefined);
	exports.i(__webpack_require__(147), undefined);

	// module
	exports.push([module.id, ".tooltip-normal-l--bottom\n{\n}\n\n.tooltip-normal-l--left\n{\n}\n\n.tooltip-normal-l--right\n{\n}\n\n.tooltip-normal-l--top\n{\n}\n\n/* mixins */\n\n.tooltip-normal-l--isClosed\n{\n}\n\n.tooltip-normal-l--isOpened\n{\n}\n\n.tooltip-normal-l--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-normal-l--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(146).locals["bottom"] + " " + __webpack_require__(147).locals["bottom"] + "",
		"left": "tooltip-normal-l--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(146).locals["left"] + " " + __webpack_require__(147).locals["left"] + "",
		"right": "tooltip-normal-l--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(146).locals["right"] + " " + __webpack_require__(147).locals["right"] + "",
		"top": "tooltip-normal-l--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(146).locals["top"] + " " + __webpack_require__(147).locals["top"] + "",
		"isClosed": "tooltip-normal-l--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-normal-l--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-normal-l--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".tooltip--control\n{\n  position: absolute;\n\n  width: 300px;\n\n  cursor: pointer;\n\n  color: #fff;\n\n  font-family: arial,sans-serif;\n}\n\n.tooltip--control:after\n{\n  position: absolute;\n\n  content: '';\n\n  border: 7px solid transparent;\n}\n\n.tooltip--center\n{\n  left: 50%;\n\n  -webkit-transform: translateX(-50%);\n\n          transform: translateX(-50%);\n}\n\n.tooltip--middle\n{\n  top: 50%;\n\n  -webkit-transform: translateY(-50%);\n\n          transform: translateY(-50%);\n}\n\n.tooltip--bottom\n{\n}\n\n.tooltip--left\n{\n}\n\n.tooltip--right\n{\n}\n\n.tooltip--top\n{\n}\n\n/* mixins */\n\n.tooltip--isClosed\n{\n  display: none;\n}\n\n.tooltip--isOpened\n{\n  display: block;\n}\n\n.tooltip--isLine\n{\n  width: auto;\n\n  white-space: nowrap;\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "tooltip--control",
		"center": "tooltip--center",
		"middle": "tooltip--middle",
		"bottom": "tooltip--bottom tooltip--control tooltip--center",
		"left": "tooltip--left tooltip--control tooltip--middle",
		"right": "tooltip--right tooltip--control tooltip--middle",
		"top": "tooltip--top tooltip--control tooltip--center",
		"isClosed": "tooltip--isClosed",
		"isOpened": "tooltip--isOpened",
		"isLine": "tooltip--isLine"
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".size-l--control\n{\n  padding: 7px 10px;\n\n  font-size: 15px;\n  line-height: 18px;\n}\n\n.size-l--bottom\n{\n\n  top: calc(100% + 7px);\n}\n\n.size-l--bottom:after\n{\n  top: -7px;\n  left: calc(50% - 7px);\n\n  border-width: 0 7px 7px 7px;\n}\n\n.size-l--left\n{\n\n  right: calc(100% + 7px);\n}\n\n.size-l--left:after\n{\n  top: calc(50% - 7px);\n  right: -7px;\n\n  border-width: 7px 0 7px 7px;\n}\n\n.size-l--right\n{\n\n  left: calc(100% + 7px);\n}\n\n.size-l--right:after\n{\n  top: calc(50% - 7px);\n  left: -7px;\n\n  border-width: 7px 7px 7px 0;\n}\n\n.size-l--top\n{\n\n  bottom: calc(100% + 7px);\n}\n\n.size-l--top:after\n{\n  bottom: -7px;\n  left: calc(50% - 7px);\n\n  border-width: 7px 7px 0 7px;\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "size-l--control",
		"bottom": "size-l--bottom size-l--control",
		"left": "size-l--left size-l--control",
		"right": "size-l--right size-l--control",
		"top": "size-l--top size-l--control"
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".color-normal--bottom,\n.color-normal--left,\n.color-normal--right,\n.color-normal--top\n{\n  background: #5b5b5b;\n}\n\n.color-normal--bottom:hover,\n.color-normal--left:hover,\n.color-normal--right:hover,\n.color-normal--top:hover\n{\n  background: #747474;\n}\n\n.color-normal--bottom:after\n{\n  border-bottom-color: #5b5b5b;\n}\n\n.color-normal--bottom:hover:after\n{\n  border-bottom-color: #747474;\n}\n\n.color-normal--left:after\n{\n  border-left-color: #5b5b5b;\n}\n\n.color-normal--left:hover:after\n{\n  border-left-color: #747474;\n}\n\n.color-normal--right:after\n{\n  border-right-color: #5b5b5b;\n}\n\n.color-normal--right:hover:after\n{\n  border-right-color: #747474;\n}\n\n.color-normal--top:after\n{\n  border-top-color: #5b5b5b;\n}\n\n.color-normal--top:hover:after\n{\n  border-top-color: #747474;\n}\n", ""]);

	// exports
	exports.locals = {
		"normal": "#5b5b5b",
		"normalHovered": "#747474",
		"bottom": "color-normal--bottom",
		"left": "color-normal--left",
		"right": "color-normal--right",
		"top": "color-normal--top"
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(149);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-normal-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-normal-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(150), undefined);
	exports.i(__webpack_require__(147), undefined);

	// module
	exports.push([module.id, ".tooltip-normal-m--bottom\n{\n}\n\n.tooltip-normal-m--left\n{\n}\n\n.tooltip-normal-m--right\n{\n}\n\n.tooltip-normal-m--top\n{\n}\n\n/* mixins */\n\n.tooltip-normal-m--isClosed\n{\n}\n\n.tooltip-normal-m--isOpened\n{\n}\n\n.tooltip-normal-m--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-normal-m--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(150).locals["bottom"] + " " + __webpack_require__(147).locals["bottom"] + "",
		"left": "tooltip-normal-m--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(150).locals["left"] + " " + __webpack_require__(147).locals["left"] + "",
		"right": "tooltip-normal-m--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(150).locals["right"] + " " + __webpack_require__(147).locals["right"] + "",
		"top": "tooltip-normal-m--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(150).locals["top"] + " " + __webpack_require__(147).locals["top"] + "",
		"isClosed": "tooltip-normal-m--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-normal-m--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-normal-m--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".size-m--control\n{\n  padding: 6px 8px;\n\n  font-size: 13px;\n  line-height: 16px;\n}\n\n.size-m--bottom\n{\n\n  top: calc(100% + 7px);\n}\n\n.size-m--bottom:after\n{\n  top: -7px;\n  left: calc(50% - 7px);\n\n  border-width: 0 7px 7px 7px;\n}\n\n.size-m--left\n{\n\n  right: calc(100% + 7px);\n}\n\n.size-m--left:after\n{\n  top: calc(50% - 7px);\n  right: -7px;\n\n  border-width: 7px 0 7px 7px;\n}\n\n.size-m--right\n{\n\n  left: calc(100% + 7px);\n}\n\n.size-m--right:after\n{\n  top: calc(50% - 7px);\n  left: -7px;\n\n  border-width: 7px 7px 7px 0;\n}\n\n.size-m--top\n{\n\n  bottom: calc(100% + 7px);\n}\n\n.size-m--top:after\n{\n  bottom: -7px;\n  left: calc(50% - 7px);\n\n  border-width: 7px 7px 0 7px;\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "size-m--control",
		"bottom": "size-m--bottom size-m--control",
		"left": "size-m--left size-m--control",
		"right": "size-m--right size-m--control",
		"top": "size-m--top size-m--control"
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-normal-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-normal-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(153), undefined);
	exports.i(__webpack_require__(147), undefined);

	// module
	exports.push([module.id, ".tooltip-normal-s--bottom\n{\n}\n\n.tooltip-normal-s--left\n{\n}\n\n.tooltip-normal-s--right\n{\n}\n\n.tooltip-normal-s--top\n{\n}\n\n/* mixins */\n\n.tooltip-normal-s--isClosed\n{\n}\n\n.tooltip-normal-s--isOpened\n{\n}\n\n.tooltip-normal-s--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-normal-s--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(153).locals["bottom"] + " " + __webpack_require__(147).locals["bottom"] + "",
		"left": "tooltip-normal-s--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(153).locals["left"] + " " + __webpack_require__(147).locals["left"] + "",
		"right": "tooltip-normal-s--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(153).locals["right"] + " " + __webpack_require__(147).locals["right"] + "",
		"top": "tooltip-normal-s--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(153).locals["top"] + " " + __webpack_require__(147).locals["top"] + "",
		"isClosed": "tooltip-normal-s--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-normal-s--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-normal-s--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".size-s--control\n{\n  padding: 4px 8px;\n\n  font-size: 13px;\n  line-height: 16px;\n}\n\n.size-s--bottom\n{\n\n  top: calc(100% + 7px);\n}\n\n.size-s--bottom:after\n{\n  top: -7px;\n  left: calc(50% - 7px);\n\n  border-width: 0 7px 7px 7px;\n}\n\n.size-s--left\n{\n\n  right: calc(100% + 7px);\n}\n\n.size-s--left:after\n{\n  top: calc(50% - 7px);\n  right: -7px;\n\n  border-width: 7px 0 7px 7px;\n}\n\n.size-s--right\n{\n\n  left: calc(100% + 7px);\n}\n\n.size-s--right:after\n{\n  top: calc(50% - 7px);\n  left: -7px;\n\n  border-width: 7px 7px 7px 0;\n}\n\n.size-s--top\n{\n\n  bottom: calc(100% + 7px);\n}\n\n.size-s--top:after\n{\n  bottom: -7px;\n  left: calc(50% - 7px);\n\n  border-width: 7px 7px 0 7px;\n}\n", ""]);

	// exports
	exports.locals = {
		"control": "size-s--control",
		"bottom": "size-s--bottom size-s--control",
		"left": "size-s--left size-s--control",
		"right": "size-s--right size-s--control",
		"top": "size-s--top size-s--control"
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(155);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-success-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-success-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(146), undefined);
	exports.i(__webpack_require__(156), undefined);

	// module
	exports.push([module.id, ".tooltip-success-l--bottom\n{\n}\n\n.tooltip-success-l--left\n{\n}\n\n.tooltip-success-l--right\n{\n}\n\n.tooltip-success-l--top\n{\n}\n\n/* mixins */\n\n.tooltip-success-l--isClosed\n{\n}\n\n.tooltip-success-l--isOpened\n{\n}\n\n.tooltip-success-l--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-success-l--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(146).locals["bottom"] + " " + __webpack_require__(156).locals["bottom"] + "",
		"left": "tooltip-success-l--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(146).locals["left"] + " " + __webpack_require__(156).locals["left"] + "",
		"right": "tooltip-success-l--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(146).locals["right"] + " " + __webpack_require__(156).locals["right"] + "",
		"top": "tooltip-success-l--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(146).locals["top"] + " " + __webpack_require__(156).locals["top"] + "",
		"isClosed": "tooltip-success-l--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-success-l--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-success-l--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".color-success--bottom,\n.color-success--left,\n.color-success--right,\n.color-success--top\n{\n  background: #7bc177;\n}\n\n.color-success--bottom:hover,\n.color-success--left:hover,\n.color-success--right:hover,\n.color-success--top:hover\n{\n  background: #8fca8b;\n}\n\n.color-success--bottom:after\n{\n  border-bottom-color: #7bc177;\n}\n\n.color-success--bottom:hover:after\n{\n  border-bottom-color: #8fca8b;\n}\n\n.color-success--left:after\n{\n  border-left-color: #7bc177;\n}\n\n.color-success--left:hover:after\n{\n  border-left-color: #8fca8b;\n}\n\n.color-success--right:after\n{\n  border-right-color: #7bc177;\n}\n\n.color-success--right:hover:after\n{\n  border-right-color: #8fca8b;\n}\n\n.color-success--top:after\n{\n  border-top-color: #7bc177;\n}\n\n.color-success--top:hover:after\n{\n  border-top-color: #8fca8b;\n}\n", ""]);

	// exports
	exports.locals = {
		"success": "#7bc177",
		"successHovered": "#8fca8b",
		"bottom": "color-success--bottom",
		"left": "color-success--left",
		"right": "color-success--right",
		"top": "color-success--top"
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-success-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-success-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(150), undefined);
	exports.i(__webpack_require__(156), undefined);

	// module
	exports.push([module.id, ".tooltip-success-m--bottom\n{\n}\n\n.tooltip-success-m--left\n{\n}\n\n.tooltip-success-m--right\n{\n}\n\n.tooltip-success-m--top\n{\n}\n\n/* mixins */\n\n.tooltip-success-m--isClosed\n{\n}\n\n.tooltip-success-m--isOpened\n{\n}\n\n.tooltip-success-m--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-success-m--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(150).locals["bottom"] + " " + __webpack_require__(156).locals["bottom"] + "",
		"left": "tooltip-success-m--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(150).locals["left"] + " " + __webpack_require__(156).locals["left"] + "",
		"right": "tooltip-success-m--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(150).locals["right"] + " " + __webpack_require__(156).locals["right"] + "",
		"top": "tooltip-success-m--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(150).locals["top"] + " " + __webpack_require__(156).locals["top"] + "",
		"isClosed": "tooltip-success-m--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-success-m--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-success-m--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(160);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-success-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-success-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(153), undefined);
	exports.i(__webpack_require__(156), undefined);

	// module
	exports.push([module.id, ".tooltip-success-s--bottom\n{\n}\n\n.tooltip-success-s--left\n{\n}\n\n.tooltip-success-s--right\n{\n}\n\n.tooltip-success-s--top\n{\n}\n\n/* mixins */\n\n.tooltip-success-s--isClosed\n{\n}\n\n.tooltip-success-s--isOpened\n{\n}\n\n.tooltip-success-s--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-success-s--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(153).locals["bottom"] + " " + __webpack_require__(156).locals["bottom"] + "",
		"left": "tooltip-success-s--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(153).locals["left"] + " " + __webpack_require__(156).locals["left"] + "",
		"right": "tooltip-success-s--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(153).locals["right"] + " " + __webpack_require__(156).locals["right"] + "",
		"top": "tooltip-success-s--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(153).locals["top"] + " " + __webpack_require__(156).locals["top"] + "",
		"isClosed": "tooltip-success-s--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-success-s--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-success-s--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-warning-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-warning-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(146), undefined);
	exports.i(__webpack_require__(163), undefined);

	// module
	exports.push([module.id, ".tooltip-warning-l--bottom\n{\n}\n\n.tooltip-warning-l--left\n{\n}\n\n.tooltip-warning-l--right\n{\n}\n\n.tooltip-warning-l--top\n{\n}\n\n/* mixins */\n\n.tooltip-warning-l--isClosed\n{\n}\n\n.tooltip-warning-l--isOpened\n{\n}\n\n.tooltip-warning-l--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-warning-l--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(146).locals["bottom"] + " " + __webpack_require__(163).locals["bottom"] + "",
		"left": "tooltip-warning-l--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(146).locals["left"] + " " + __webpack_require__(163).locals["left"] + "",
		"right": "tooltip-warning-l--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(146).locals["right"] + " " + __webpack_require__(163).locals["right"] + "",
		"top": "tooltip-warning-l--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(146).locals["top"] + " " + __webpack_require__(163).locals["top"] + "",
		"isClosed": "tooltip-warning-l--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-warning-l--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-warning-l--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".color-warning--bottom,\n.color-warning--left,\n.color-warning--right,\n.color-warning--top\n{\n  background: #ff7474;\n}\n\n.color-warning--bottom:hover,\n.color-warning--left:hover,\n.color-warning--right:hover,\n.color-warning--top:hover\n{\n  background: #ff8989;\n}\n\n.color-warning--bottom:after\n{\n  border-bottom-color: #ff7474;\n}\n\n.color-warning--bottom:hover:after\n{\n  border-bottom-color: #ff8989;\n}\n\n.color-warning--left:after\n{\n  border-left-color: #ff7474;\n}\n\n.color-warning--left:hover:after\n{\n  border-left-color: #ff8989;\n}\n\n.color-warning--right:after\n{\n  border-right-color: #ff7474;\n}\n\n.color-warning--right:hover:after\n{\n  border-right-color: #ff8989;\n}\n\n.color-warning--top:after\n{\n  border-top-color: #ff7474;\n}\n\n.color-warning--top:hover:after\n{\n  border-top-color: #ff8989;\n}\n", ""]);

	// exports
	exports.locals = {
		"warning": "#ff7474",
		"warningHovered": "#ff8989",
		"bottom": "color-warning--bottom",
		"left": "color-warning--left",
		"right": "color-warning--right",
		"top": "color-warning--top"
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(165);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-warning-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-warning-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(150), undefined);
	exports.i(__webpack_require__(163), undefined);

	// module
	exports.push([module.id, ".tooltip-warning-m--bottom\n{\n}\n\n.tooltip-warning-m--left\n{\n}\n\n.tooltip-warning-m--right\n{\n}\n\n.tooltip-warning-m--top\n{\n}\n\n/* mixins */\n\n.tooltip-warning-m--isClosed\n{\n}\n\n.tooltip-warning-m--isOpened\n{\n}\n\n.tooltip-warning-m--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-warning-m--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(150).locals["bottom"] + " " + __webpack_require__(163).locals["bottom"] + "",
		"left": "tooltip-warning-m--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(150).locals["left"] + " " + __webpack_require__(163).locals["left"] + "",
		"right": "tooltip-warning-m--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(150).locals["right"] + " " + __webpack_require__(163).locals["right"] + "",
		"top": "tooltip-warning-m--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(150).locals["top"] + " " + __webpack_require__(163).locals["top"] + "",
		"isClosed": "tooltip-warning-m--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-warning-m--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-warning-m--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-warning-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tooltip-warning-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(145), undefined);
	exports.i(__webpack_require__(153), undefined);
	exports.i(__webpack_require__(163), undefined);

	// module
	exports.push([module.id, ".tooltip-warning-s--bottom\n{\n}\n\n.tooltip-warning-s--left\n{\n}\n\n.tooltip-warning-s--right\n{\n}\n\n.tooltip-warning-s--top\n{\n}\n\n/* mixins */\n\n.tooltip-warning-s--isClosed\n{\n}\n\n.tooltip-warning-s--isOpened\n{\n}\n\n.tooltip-warning-s--isLine\n{\n}\n", ""]);

	// exports
	exports.locals = {
		"bottom": "tooltip-warning-s--bottom " + __webpack_require__(145).locals["bottom"] + " " + __webpack_require__(153).locals["bottom"] + " " + __webpack_require__(163).locals["bottom"] + "",
		"left": "tooltip-warning-s--left " + __webpack_require__(145).locals["left"] + " " + __webpack_require__(153).locals["left"] + " " + __webpack_require__(163).locals["left"] + "",
		"right": "tooltip-warning-s--right " + __webpack_require__(145).locals["right"] + " " + __webpack_require__(153).locals["right"] + " " + __webpack_require__(163).locals["right"] + "",
		"top": "tooltip-warning-s--top " + __webpack_require__(145).locals["top"] + " " + __webpack_require__(153).locals["top"] + " " + __webpack_require__(163).locals["top"] + "",
		"isClosed": "tooltip-warning-s--isClosed " + __webpack_require__(145).locals["isClosed"] + "",
		"isOpened": "tooltip-warning-s--isOpened " + __webpack_require__(145).locals["isOpened"] + "",
		"isLine": "tooltip-warning-s--isLine " + __webpack_require__(145).locals["isLine"] + ""
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(2),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;

	var _require2 = __webpack_require__(3),
	    filterProps = _require2.filterProps,
	    genericName = _require2.genericName;

	var _require3 = __webpack_require__(32),
	    genericId = _require3.genericId;

	var _require4 = __webpack_require__(4),
	    isUndefined = _require4.isUndefined,
	    noop = _require4.noop;

	var React = __webpack_require__(2);
	var cc = __webpack_require__(5);

	var cssModules = {
	  l: __webpack_require__(169),
	  m: __webpack_require__(172),
	  s: __webpack_require__(174)
	};

	var Tumbler = function (_Component) {
	  _inherits(Tumbler, _Component);

	  function Tumbler(props) {
	    _classCallCheck(this, Tumbler);

	    var _this = _possibleConstructorReturn(this, (Tumbler.__proto__ || Object.getPrototypeOf(Tumbler)).call(this, props));

	    _this.css = function (tokenName) {
	      return genericName(_this.props, tokenName);
	    };

	    _this._onChange = function (e) {
	      var _e$target = e.target,
	          checked = _e$target.checked,
	          value = _e$target.value;

	      _this.props.onChange(e, { checked: checked, value: value });
	    };

	    _this.state = {
	      id: props.id || genericId()
	    };
	    return _this;
	  }

	  _createClass(Tumbler, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        id: isUndefined(nextProps.id) ? this.state.id : nextProps.id
	      });
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this._input) return;
	      this._input.focus();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          offText = _props.offText,
	          onText = _props.onText,
	          props = _objectWithoutProperties(_props, ['className', 'offText', 'onText']);

	      var id = this.state.id;
	      var css = this.css;

	      // why this looks like a pie,
	      // see: http://stackoverflow.com/questions/9273016/why-is-this-inline-block-element-pushed-downward

	      return React.createElement(
	        'span',
	        _extends({}, filterProps(props), {
	          className: cc(css('wrapper'), className),
	          onChange: void 0 }),
	        React.createElement(
	          'span',
	          { className: css('baseline') },
	          React.createElement(
	            'div',
	            { className: css('shape') },
	            this.renderInput(),
	            React.createElement(
	              'label',
	              {
	                className: css('control'),
	                htmlFor: id },
	              React.createElement(
	                'span',
	                { className: css('label') },
	                onText
	              ),
	              React.createElement(
	                'span',
	                { className: css('label') },
	                offText
	              ),
	              React.createElement(
	                'span',
	                { className: css('delimiter') },
	                '\xA0'
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput() {
	      var _this2 = this;

	      var _props2 = this.props,
	          checked = _props2.checked,
	          defaultChecked = _props2.defaultChecked,
	          disabled = _props2.disabled,
	          name = _props2.name,
	          value = _props2.value;
	      var id = this.state.id;
	      var css = this.css;


	      return React.createElement('input', {
	        checked: checked,
	        className: css('native'),
	        defaultChecked: defaultChecked,
	        disabled: disabled,
	        id: id,
	        name: name,
	        onChange: this._onChange,
	        ref: function ref(r) {
	          return _this2._input = r;
	        },
	        type: 'checkbox',
	        value: value });
	    }
	  }]);

	  return Tumbler;
	}(Component);

	Tumbler.defaultProps = {
	  offText: 'Off',
	  onText: 'On',
	  onChange: noop,
	  size: 'm',
	  styles: cssModules
	};

	Tumbler.propTypes = {
	  name: PropTypes.string.isRequired,
	  offText: PropTypes.string,
	  onText: PropTypes.string,
	  onChange: React.PropTypes.func,
	  size: PropTypes.oneOf(['l', 'm', 's']),
	  styles: PropTypes.object
	};

	module.exports = Tumbler;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(170);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tumbler-l.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tumbler-l.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(171), undefined);

	// module
	exports.push([module.id, ".tumbler-l--wrapper\n{\n\n  width: 82px;\n\n  font: 15px/32px arial,sans-serif;\n}\n\n.tumbler-l--baseline\n{\n}\n\n.tumbler-l--shape\n{;\n}\n\n.tumbler-l--control\n{\n\n  margin: 0 0 0 -50px;\n}\n\n.tumbler-l--label\n{\n\n  width: 82px;\n  padding: 0 0 0 32px;\n}\n\n.tumbler-l--label:first-child\n{\n  margin: 0 -32px 0 0;\n  padding: 0 32px 0 0;\n}\n\n.tumbler-l--delimiter\n{\n\n  width: 32px;\n  margin: 0 0 0 -82px;\n}\n\n.tumbler-l--native\n{;\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "tumbler-l--wrapper " + __webpack_require__(171).locals["selector"] + " " + __webpack_require__(171).locals["wrapper"] + "",
		"baseline": "tumbler-l--baseline " + __webpack_require__(171).locals["baseline"] + "",
		"shape": "tumbler-l--shape " + __webpack_require__(171).locals["shape"] + "",
		"control": "tumbler-l--control " + __webpack_require__(171).locals["control"] + "",
		"label": "tumbler-l--label " + __webpack_require__(171).locals["label"] + "",
		"delimiter": "tumbler-l--delimiter " + __webpack_require__(171).locals["delimiter"] + "",
		"native": "tumbler-l--native " + __webpack_require__(171).locals["native"] + ""
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".tumbler--selector\n{\n  /* the common selector */\n}\n\n.tumbler--wrapper\n{\n  display: inline-block;\n}\n\n.tumbler--baseline\n{\n  display: inline-block;\n  overflow: visible;\n\n  width: 100%;\n\n  vertical-align: top;\n\n  font: inherit;\n}\n\n.tumbler--shape\n{\n  position: relative;\n\n  display: block;\n  overflow: hidden;\n\n  width: 100%;\n\n  border-radius: 3px;\n\n  font: inherit;\n}\n\n.tumbler--control\n{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: margin .1s ease-out;\n  transition: margin .1s ease-out;\n  white-space: nowrap;\n\n  font: inherit;\n\n  -webkit-tap-highlight-color: transparent;\n}\n\n.tumbler--label\n{\n  display: inline-block;\n\n  box-sizing: border-box;\n\n  cursor: pointer;\n  text-align: center;\n\n  border-radius: 3px;\n  background: #f2f2f2;\n  box-shadow: inset 0 0 0 1px #c2c2c2;\n\n  font: inherit;\n}\n\n.tumbler--label:first-child\n{\n  background: #ffeba0;\n  box-shadow: inset 0 0 0 1px #ccbd80;\n}\n\n.tumbler--delimiter\n{\n  display: inline-block;\n\n  cursor: pointer;\n  -webkit-transition: box-shadow .1s ease-out;\n  transition: box-shadow .1s ease-out;\n\n  border-radius: 3px;\n  background: white;\n  box-shadow: inset 0 0 0 1px #ccc;\n\n  font: inherit;\n}\n\n.tumbler--native\n{\n  position: absolute;\n\n  opacity: 0;\n}\n\n.tumbler--native:checked + .tumbler--control\n{\n  margin-left: 0;\n}\n\n.tumbler--native:focus + .tumbler--control .tumbler--delimiter\n{\n  box-shadow: inset 0 0 0 2px #fc0;\n}\n\n.tumbler--native:disabled + .tumbler--control .tumbler--label\n{\n  cursor: default;\n\n  color: rgba(0,0,0,.5);\n  background: #ebebeb;\n  box-shadow: inset 0 0 0 1px #ebebeb;\n}\n\n.tumbler--native:disabled + .tumbler--control .tumbler--label:first-child\n{\n  background: #d9d9d9;\n  box-shadow: inset 0 0 0 1px #d9d9d9;\n}\n\n.tumbler--native:disabled + .tumbler--control .tumbler--delimiter\n{\n  cursor: default;\n\n  background: #d8d8d8;\n  box-shadow: none;\n}\n\n.tumbler--native:disabled:checked + .tumbler--control .tumbler--delimiter\n{\n  background: #c8c8c8;\n}\n", ""]);

	// exports
	exports.locals = {
		"selector": "tumbler--selector",
		"wrapper": "tumbler--wrapper",
		"baseline": "tumbler--baseline",
		"shape": "tumbler--shape",
		"control": "tumbler--control",
		"label": "tumbler--label",
		"delimiter": "tumbler--delimiter",
		"native": "tumbler--native"
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(173);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tumbler-m.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tumbler-m.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(171), undefined);

	// module
	exports.push([module.id, ".tumbler-m--wrapper\n{\n\n  width: 76px;\n\n  font: 13px/28px arial,sans-serif;\n}\n\n.tumbler-m--baseline\n{\n}\n\n.tumbler-m--shape\n{;\n}\n\n.tumbler-m--control\n{\n\n  margin: 0 0 0 -48px;\n}\n\n.tumbler-m--label\n{\n\n  width: 76px;\n  padding: 0 0 0 28px;\n}\n\n.tumbler-m--label:first-child\n{\n  margin: 0 -28px 0 0;\n  padding: 0 28px 0 0;\n}\n\n.tumbler-m--delimiter\n{\n\n  width: 28px;\n  margin: 0 0 0 -76px;\n}\n\n.tumbler-m--native\n{;\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "tumbler-m--wrapper " + __webpack_require__(171).locals["selector"] + " " + __webpack_require__(171).locals["wrapper"] + "",
		"baseline": "tumbler-m--baseline " + __webpack_require__(171).locals["baseline"] + "",
		"shape": "tumbler-m--shape " + __webpack_require__(171).locals["shape"] + "",
		"control": "tumbler-m--control " + __webpack_require__(171).locals["control"] + "",
		"label": "tumbler-m--label " + __webpack_require__(171).locals["label"] + "",
		"delimiter": "tumbler-m--delimiter " + __webpack_require__(171).locals["delimiter"] + "",
		"native": "tumbler-m--native " + __webpack_require__(171).locals["native"] + ""
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tumbler-s.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&localIdentName=[name]--[local]&importLoaders=1!./../../node_modules/postcss-loader/index.js!./tumbler-s.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.i(__webpack_require__(171), undefined);

	// module
	exports.push([module.id, ".tumbler-s--wrapper\n{\n\n  width: 66px;\n\n  font: 13px/24px arial,sans-serif;\n}\n\n.tumbler-s--baseline\n{\n}\n\n.tumbler-s--shape\n{;\n}\n\n.tumbler-s--control\n{\n\n  margin: 0 0 0 -42px;\n}\n\n.tumbler-s--label\n{\n\n  width: 66px;\n  padding: 0 0 0 24px;\n}\n\n.tumbler-s--label:first-child\n{\n  margin: 0 -24px 0 0;\n  padding: 0 24px 0 0;\n}\n\n.tumbler-s--delimiter\n{\n\n  width: 24px;\n  margin: 0 0 0 -66px;\n}\n\n.tumbler-s--native\n{;\n}\n", ""]);

	// exports
	exports.locals = {
		"wrapper": "tumbler-s--wrapper " + __webpack_require__(171).locals["selector"] + " " + __webpack_require__(171).locals["wrapper"] + "",
		"baseline": "tumbler-s--baseline " + __webpack_require__(171).locals["baseline"] + "",
		"shape": "tumbler-s--shape " + __webpack_require__(171).locals["shape"] + "",
		"control": "tumbler-s--control " + __webpack_require__(171).locals["control"] + "",
		"label": "tumbler-s--label " + __webpack_require__(171).locals["label"] + "",
		"delimiter": "tumbler-s--delimiter " + __webpack_require__(171).locals["delimiter"] + "",
		"native": "tumbler-s--native " + __webpack_require__(171).locals["native"] + ""
	};

/***/ }
/******/ ]);