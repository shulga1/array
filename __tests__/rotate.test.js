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

  const arr4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
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

  const expected4 = [
    [4, 8, 2],
    [3, 7, 1],
    [2, 6, 0],
    [1, 5, 9],
  ];

  expect(rotate(arr1)).toEqual(expected1);
  expect(rotate(arr2)).toEqual(expected2);
  expect(rotate(arr3)).toEqual(expected3);
  expect(rotate(arr4)).toEqual(expected4);
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

  const arr4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
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

  const expected4 = [
    [9, 5, 1],
    [0, 6, 2],
    [1, 7, 3],
    [2, 8, 4],
  ];

  expect(rotateRight(arr1)).toEqual(expected1);
  expect(rotateRight(arr2)).toEqual(expected2);
  expect(rotateRight(arr3)).toEqual(expected3);
  expect(rotateRight(arr4)).toEqual(expected4);
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

  const arr4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
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

  const expected4 = [
    [4, 8, 2],
    [3, 7, 1],
    [2, 6, 0],
    [1, 5, 9],
  ];

  expect(rotateLeft(arr1)).toEqual(expected1);
  expect(rotateLeft(arr2)).toEqual(expected2);
  expect(rotateLeft(arr3)).toEqual(expected3);
  expect(rotateLeft(arr4)).toEqual(expected4);
});
