'use strict';

const isArray = Array.isArray;

exports.defaultTo = curry(defaultTo);
exports.invert = invert;
exports.isUndefined = isUndefined;
exports.negate = negate;
exports.noop = noop;
exports.omit = curry(omit);

exports.compose = compose;
exports.constant = constant;
exports.curry = curry;
exports.groupBy = curry(groupBy);
exports.identity = identity;
exports.isArray = isArray;
exports.map = curry(map);
exports.prop = curry(prop);
exports.reduce = curry(reduce);
exports.trace = trace;

// defaultTo :: a -> b -> b|a
function defaultTo(a, b) {
  return isUndefined(b) ? a : b;
}

// invert :: {a: b} -> {b: a}
function invert(c) {
  const nC = {};
  const keys = Object.keys(c);

  for (var j = 0; j < keys.length; ++j) {
    const key = keys[j];
    nC[c[key]] = key;
  }

  return nC;
}

// isUndefined :: a -> bool
function isUndefined(a) {
  return a === undefined;
}

// negate :: (a -> b) -> !b
function negate(f) {
  return _negate;

  function _negate() {
    return !f.apply(this, arguments);
  }
}

function noop() {}

// omit :: [a] -> ({a} -> {});
function omit(props, c) {
  const nC = {};
  const keys = Object.keys(c);
  const list = invert(props);

  for (var j = 0; j < keys.length; ++j) {
    const key = keys[j];
    if (!list.hasOwnProperty(key)) nC[key] = c[key];
  }

  return nC;
}

function compose(...fn) {
  const quantity = fn.length;
  return composition;

  function composition() {
    var index = quantity - 1;
    var result = quantity
      ? fn[index].apply(this, arguments)
      : arguments[0];

    if (index < 1) return result;
    while (index--) result = fn[index].call(this, result);
    return result;
  }
}

// constant :: a -> (any -> a)
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
  console.log(a);
  return a;
}
