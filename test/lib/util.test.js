import {chunk, identity, mapN} from '../../lib/util';

test('chunk', () => {
  expect(chunk([])).toEqual([]);
  expect(chunk([1, 2])).toEqual([[1], [2]]);
  expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
});

test('mapN', () => {
  expect(mapN(identity, [1, 2, 3, 4], 2)).toEqual([1, 2]);
  expect(mapN(identity, [1, 2, 3, 4], 2, 1)).toEqual([2, 3]);
});
