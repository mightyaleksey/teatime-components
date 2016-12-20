'use strict';

const {
  mapN,
  assign,
  castArray,
  compose,
  constant,
  curry,
  filter,
  first,
  groupBy,
  identity,
  invert,
  isArray,
  isFunction,
  isString,
  isUndefined,
  map,
  negate,
  noop,
  omit,
  prop,
  reduce,
} = require('../../lib/dash');
const test = require('tape');

const add = curry((a, b, c = 0) => a + b + c);
const inc = add(1);

test('mapN', t => {
  t.deepEqual(mapN(inc, [1, 2, 3]), [2, 3, 4]);
  t.deepEqual(mapN(inc, {a: 1, b: 2, c: 3}), [2, 3, 4]);
  t.deepEqual(mapN(inc, [1, 2, 3, 4, 5], 3), [2, 3, 4]);
  t.end();
});

test('assign', t => {
  const a = {a: 4, c: 7};
  const b = {a: 5, b: 6};
  const c = assign(a, b);

  t.notEqual(a, c);
  t.notEqual(b, c);
  t.deepEqual(c, {a: 5, b: 6, c: 7});
  t.end();
});

test('castArray', t => {
  const a = [];
  t.equal(castArray(a), a);
  t.notEqual(castArray([5]), [5]);
  t.deepEqual(castArray(void 0), [void 0]);
  t.deepEqual(castArray(null), [null]);
  t.deepEqual(castArray(), []);
  t.end();
});

test('compose', t => {
  t.equal(compose()(5), 5);
  t.equal(compose(add)(5, 1), 6);
  t.equal(compose(identity)(5), 5);
  t.equal(compose(identity, add(1))(5), 6);
  t.equal(compose(add(1), identity)(5), 6);
  t.end();
});

test('constant', t => {
  t.equal(constant(5)(), 5);
  t.end();
});

test('curry', t => {
  const add = curry((a, b, c = 0) => a + b + c);

  t.equal(add(1)(2), 3);
  t.equal(add(1, 2), 3);
  t.equal(add(1)()(2), 3);
  t.equal(add()(1)(2), 3);
  t.equal(add(1, 2, 3), 6);
  t.equal(add(1)(2, 3), 6);
  t.end();
});

test('filter', t => {
  const a = [0, 1, null, 2, 3];
  t.notEqual(filter(Boolean, a), a);
  t.deepEqual(filter(Boolean, a), [1, 2, 3]);
  t.end();
});

test('first', t => {
  t.equal(first([5]), 5);
  t.end();
});

test('groupBy', t => {
  t.deepEqual(groupBy(Math.round, [1, 3.2, 1.5, 2, 3]), {
    1: [1],
    2: [1.5, 2],
    3: [3.2, 3],
  });
  t.end();
});

test('invert', t => {
  t.deepEqual(invert(['a', 'b']), {a: '0', b: '1'});
  t.deepEqual(invert({a: 'b'}), {b: 'a'});
  t.end();
});

test('isArray', t => {
  t.ok(isArray([]));
  t.notOk(isArray({}));
  t.end();
});

test('isFunction', t => {
  t.ok(isFunction(() => {}));
  t.notOk(isFunction(void 0));
  t.end();
});

test('isString', t => {
  t.ok(isString(''));
  t.notOk(isString(0));
  t.end();
});

test('isUndefined', t => {
  t.ok(isUndefined(void 0));
  t.notOk(isUndefined(''));
  t.end();
});

test('map', t => {
  t.deepEqual(map(inc, [1, 2, 3]), [2, 3, 4]);
  t.deepEqual(map(inc, {a: 1, b: 2, c: 3}), [2, 3, 4]);
  t.end();
});

test('negate', t => {
  t.ok(negate(constant())());
  t.end();
});

test('noop', t => {
  t.equal(noop(), void 0);
  t.end();
});

test('omit', t => {
  t.deepEqual(omit(['a', 'b'], {b: 3, c: 0, d: false}), {c: 0, d: false});
  t.deepEqual(omit(['a', 'b'])({b: 3, c: 0, d: false}), {c: 0, d: false});
  t.end();
});

test('prop', t => {
  t.equal(prop('a', {a: 5}), 5);
  t.equal(prop('a')({a: 5}), 5);
  t.end();
});

test('reduce', t => {
  t.deepEqual(reduce(add, 0, [1, 2, 3]), 6);
  t.end();
});
