'use strict';

const isArray = Array.isArray;

exports.defaultTo = curry(defaultTo);
exports.invert = invert;
exports.isUndefined = isUndefined;
exports.negate = negate;
exports.noop = noop;

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
  for (var key in c) if (c.hasOwnProperty(key)) nC[c[key]] = key;
  return nC;
}

// isUndefined :: a -> bool
function isUndefined(a) {
  return a === undefined;
}

function negate(f) {
  return _negate;

  function _negate() {
    return !f.apply(this, arguments);
  }
}

function noop() {}

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

  const nC = [];
  for (var k in c) if (c.hasOwnProperty(k)) nC.push(f(c[k]));
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

  for (var k in c) nC = f(nC, c[k]);
  return nC;
}

// trace :: a -> a
function trace(a) {
  console.log(a);
  return a;
}
