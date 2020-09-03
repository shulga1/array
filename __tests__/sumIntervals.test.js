import sumIntervals from '../src/sumIntervals.js';

test('should be empty', () => {
  expect(sumIntervals([[5, 5]])).toEqual(0);
  expect(sumIntervals([[0, 0]])).toEqual(0);
  expect(sumIntervals([[-1, -1]])).toEqual(0);

  expect(sumIntervals([
    [-1, -1],
    [2, 2],
    [40, 40],
  ])).toEqual(0);
});

test('intervals do not cross', () => {
  expect(sumIntervals([
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
  ])).toEqual(4);

  expect(sumIntervals([
    [0, 2],
    [3, 5],
    [6, 8],
    [9, 11],
    [12, 14],
  ])).toEqual(10);

  expect(sumIntervals([
    [-10, 1],
    [2, 3],
    [4, 5],
    [6, 7],
  ])).toEqual(14);

  expect(sumIntervals([
    [-10, -1],
    [4, 10],
  ])).toEqual(15);

  expect(sumIntervals([[0, 100]])).toEqual(100);
});

test('intervals cross', () => {
  expect(sumIntervals([
    [0, 10],
    [0, 5],
    [0, 6],
    [0, 7],
  ])).toEqual(10);

  expect(sumIntervals([
    [-10, 10],
    [5, 5],
    [0, 6],
    [0, 11],
  ])).toEqual(21);

  expect(sumIntervals([
    [0, 10],
    [5, 5],
    [10, 11],
    [32, 33],
    [31, 33],
    [-2, 3],
    [0, 6],
    [0, 11],
  ])).toEqual(15);
});
