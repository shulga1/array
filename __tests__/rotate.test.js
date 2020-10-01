import { rotate, rotateRight, rotateLeft } from '../src/rotate.js';

test('rotate default', () => {
  const arr1 = [];

  const arr2 = [
    [1, 2],
    [3, 4],
  ];

  const arr3 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ];
  const expected1 = [];

  const expected2 = [
    [2, 4],
    [1, 3],
  ];

  const expected3 = [
    ['c', 'f', 'i'],
    ['b', 'e', 'h'],
    ['a', 'd', 'g'],
  ];

  expect(rotate(arr1)).toEqual(expected1);
  expect(rotate(arr2)).toEqual(expected2);
  expect(rotate(arr3)).toEqual(expected3);
});

test('rotateRight', () => {
  const arr1 = [];

  const arr2 = [
    [1, 2],
    [3, 4],
  ];

  const arr3 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ];
  const expected1 = [];

  const expected2 = [
    [3, 1],
    [4, 2],
  ];

  const expected3 = [
    ['g', 'd', 'a'],
    ['h', 'e', 'b'],
    ['i', 'f', 'c'],
  ];

  expect(rotateRight(arr1)).toEqual(expected1);
  expect(rotateRight(arr2)).toEqual(expected2);
  expect(rotateRight(arr3)).toEqual(expected3);
});

test('rotateLeft', () => {
  const arr1 = [];

  const arr2 = [
    [1, 2],
    [3, 4],
  ];

  const arr3 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ];
  const expected1 = [];

  const expected2 = [
    [2, 4],
    [1, 3],
  ];

  const expected3 = [
    ['c', 'f', 'i'],
    ['b', 'e', 'h'],
    ['a', 'd', 'g'],
  ];

  expect(rotateLeft(arr1)).toEqual(expected1);
  expect(rotateLeft(arr2)).toEqual(expected2);
  expect(rotateLeft(arr3)).toEqual(expected3);
});
