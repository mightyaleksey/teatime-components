'use strict';

const {
  mapN,
  assign,
  castArray,
  compose,
  constant,
  curry,
  filter,
  findIndex,
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

const add = curry((a, b, c = 0) => a + b + c);
const inc = add(1);

test('mapN', () => {
  expect(mapN(inc, [1, 2, 3])).toEqual([2, 3, 4]);
  expect(mapN(inc, {a: 1, b: 2, c: 3})).toEqual([2, 3, 4]);
  expect(mapN(inc, [1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
});

test('assign', () => {
  const a = {a: 4, c: 7};
  const b = {a: 5, b: 6};
  const c = assign(a, b);

  expect(a).not.toBe(c);
  expect(b).not.toBe(c);
  expect(c).toEqual({a: 5, b: 6, c: 7});
});

test('castArray', () => {
  const a = [];

  expect(castArray(a)).toBe(a);
  expect(castArray([5])).not.toBe([5]);
  expect(castArray(void 0)).toEqual([void 0]);
  expect(castArray(null)).toEqual([null]);
  expect(castArray()).toEqual([]);
});

test('compose', () => {
  expect(compose()(5)).toBe(5);
  expect(compose(add)(5, 1)).toBe(6);
  expect(compose(identity)(5)).toBe(5);
  expect(compose(identity, add(1))(5)).toBe(6);
  expect(compose(add(1), identity)(5)).toBe(6);
});

test('constant', () => {
  expect(constant(5)()).toBe(5);
});

test('curry', () => {
  const add = curry((a, b, c = 0) => a + b + c);

  expect(add(1)(2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(1)()(2)).toBe(3);
  expect(add()(1)(2)).toBe(3);
  expect(add(1, 2, 3)).toBe(6);
  expect(add(1)(2, 3)).toBe(6);
});

test('filter', () => {
  const a = [0, 1, null, 2, 3];

  expect(filter(Boolean, a)).not.toBe(a);
  expect(filter(Boolean, a)).toEqual([1, 2, 3]);
});

test('findIndex', () => {
  expect(findIndex(a => a === null)([0, 1, null, 2, 3])).toBe(2);
  expect(findIndex(a => a === null)([0, 1, 2, 3])).toBe(-1);
});

test('first', () => {
  expect(first([5])).toBe(5);
});

test('groupBy', () => {
  expect(groupBy(Math.round, [1, 3.2, 1.5, 2, 3])).toEqual({
    1: [1],
    2: [1.5, 2],
    3: [3.2, 3],
  });
});

test('invert', () => {
  expect(invert(['a', 'b'])).toEqual({a: '0', b: '1'});
  expect(invert({a: 'b'})).toEqual({b: 'a'});
});

test('isArray', () => {
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
});

test('isFunction', () => {
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction(void 0)).toBe(false);
});

test('isString', () => {
  expect(isString('')).toBe(true);
  expect(isString(0)).toBe(false);
});

test('isUndefined', () => {
  expect(isUndefined(void 0)).toBe(true);
  expect(isUndefined('')).toBe(false);
});

test('map', () => {
  expect(map(inc, [1, 2, 3])).toEqual([2, 3, 4]);
  expect(map(inc, {a: 1, b: 2, c: 3})).toEqual([2, 3, 4]);
});

test('negate', () => {
  expect(negate(constant())()).toBe(true);
});

test('noop', () => {
  expect(noop()).toBe(void 0);
});

test('omit', () => {
  expect(omit(['a', 'b'], {b: 3, c: 0, d: false})).toEqual({c: 0, d: false});
  expect(omit(['a', 'b'])({b: 3, c: 0, d: false})).toEqual({c: 0, d: false});
});

test('prop', () => {
  expect(prop('a', {a: 5})).toBe(5);
  expect(prop('a')({a: 5})).toBe(5);
});

test('reduce', () => {
  expect(reduce(add, 0, [1, 2, 3])).toBe(6);
});
