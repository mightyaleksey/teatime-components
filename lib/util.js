/* @flow */
export function buildValueHash(items: Array<Object>, values: Array<string> = []): {[string]: boolean} {
  const hash = {};
  const length = items.length;

  for (var i = 0; i < length; ++i) hash[items[i].value] = false;
  for (var i = 0; i < values.length; ++i) hash[values[i]] = true;

  return hash;
}

export function chunk(c: Array<*>, s: number = 1): Array<Array<*>> {
  const length = Math.ceil(c.length / s);
  const nC = Array(length);

  for (var i = 0; i < length; ++i) nC[i] = mapN(identity, c, s, s * i);

  return nC;
}

export function constant<T>(a: T): () => T {
  return () => a;
}

export function filterItems(
  searchEngine: Function,
  propFn: Function,
  items: Array<Object>,
  needle: string = ''
) {
  const length = items.length;
  const result = [];

  for (let quantity = 0, i = 0; i < length; ++i) {
    const item = items[i];

    if (searchEngine(needle, propFn(item)))
      result.push(Object.assign({}, item, {
        _index: quantity++,
        _position: i,
      }));
  }

  return result;
}

export function identity<T>(a: T): T {
  return a;
}

export function isControlled(props: {value?: any}): boolean {
  return typeof props.value !== 'undefined';
}

export function map(fn: Function, c: *): * {
  if (Array.isArray(c)) {
    const length = c.length;
    const nC = Array(length);

    for (let i = 0; i < length; ++i) nC[i] = fn(c[i]);

    return nC;
  }

  const keys = Object.keys(c);
  const length = keys.length;
  const nC = Array(length);

  for (let j = 0; j < length; ++j) nC[j] = fn(c[keys[j]]);

  return nC;
}

export function mapN(fn: Function, c: Array<*>, n: number = Infinity, s: number = 0): Array<*> {
  const length = Math.min(c.length - s, n);
  const nC = Array(length);

  for (let i = 0; i < length; ++i) nC[i] = fn(c[i + s]);

  return nC;
}

export function noop(): void {}

export function valuesFromHash(hash: Object): Array<string> {
  const keys = Object.keys(hash);
  const length = keys.length;
  const values = [];

  for (var i = 0; i < length; ++i) {
    const value = keys[i];

    if (hash[value]) values.push(value);
  }

  return values;
}
