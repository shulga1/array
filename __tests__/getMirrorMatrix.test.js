import getMirrorMatrix from '../src/getMirrorMatrix.js';

test('matrix 2', () => {
  const arr1 = [
    ['a', 'b'],
    ['c', 'd'],
  ];

  const expect1 = [
    ['a', 'a'],
    ['c', 'c'],
  ];

  expect(getMirrorMatrix(arr1)).toEqual(expect1);
});

test('matrix 4', () => {
  const arr2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7],
  ];

  const expect2 = [
    [1, 2, 2, 1],
    [5, 6, 6, 5],
    [9, 1, 1, 9],
    [4, 5, 5, 4],
  ];

  expect(getMirrorMatrix(arr2)).toEqual(expect2);
});

test('matrix 6', () => {
  const arr3 = [
    [11, 22, 33, 44, 55, 66],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    [11, 22, 33, 44, 55, 66],
    ['a', 'b', 'c', 'd', 'e', 'f'],
  ];

  const expect3 = [
    [11, 22, 33, 33, 22, 11],
    ['a', 'b', 'c', 'c', 'b', 'a'],
    [11, 22, 33, 33, 22, 11],
    ['a', 'b', 'c', 'c', 'b', 'a'],
  ];

  expect(getMirrorMatrix(arr3)).toEqual(expect3);
});
