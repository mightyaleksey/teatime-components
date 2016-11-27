'use strict';

const isArray = Array.isArray;

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
exports.negate = negate;
exports.noop = noop;
exports.omit = curry(omit);
exports.prop = curry(prop);
exports.reduce = curry(reduce);
exports.trace = trace;

// assign :: a -> b -> c
function assign(a, b) {
  const c = {};
  _copy(c, a);
  _copy(c, b);
  return c;
}

// _copy :: a -> b -> a
function _copy(a = {}, b = {}) {
  const keys = Object.keys(b);
  const length = keys.length;

  for (var j = 0; j < length; ++j) {
    const key = keys[j];
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

function compose(...fn) {
  const quantity = fn.length;
  return _compose;

  function _compose() {
    var index = quantity - 1;
    var result = quantity
      ? fn[index].apply(this, arguments)
      : arguments[0];

    if (index < 1) return result;
    while (index--) result = fn[index].call(this, result);
    return result;
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
  const arity = f.length;
  return curried;

  function curried(...args) {
    if (args.length >= arity) return f.apply(this, args);
    return curried.bind(this, ...args);
  }
}

// filter :: (a -> bool) -> [a] -> []
function filter(f, c) {
  return reduce((nC, a) => {
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
  return reduce((acc, a) => {
    const id = identity(a);

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
  const keys = Object.keys(c);
  const nC = {};

  for (var j = 0; j < keys.length; ++j) {
    const key = keys[j];
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
    const length = c.length;
    const nC = Array(length);
    for (var i = 0; i < length; ++i) nC[i] = f(c[i]);
    return nC;
  }

  const keys = Object.keys(c);
  const length = keys.length;
  const nC = Array(length);

  for (var j = 0; j < length; ++j) nC[j] = f(c[keys[j]]);
  return nC;
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
  const keys = Object.keys(c);
  const list = invert(props);
  const nC = {};

  for (var j = 0; j < keys.length; ++j) {
    const key = keys[j];
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
    const length = c.length;
    for (var i = 0; i < length; ++i) nC = f(nC, c[i]);
    return nC;
  }

  const keys = Object.keys(c);
  const length = keys.length;

  for (var j = 0; j < length; ++j) nC = f(nC, c[keys[j]]);
  return nC;
}

// trace :: a -> a
function trace(a) {
  console.log(a); // eslint-disable-line no-console
  return a;
}
