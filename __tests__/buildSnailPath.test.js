import buildSnailPath from '../src/buildSnailPath.js';

test('', () => {
  const arr1 = [
    [1, 2],
    [3, 4],
  ];

  const expected1 = [1, 2, 4, 3];

  expect(buildSnailPath(arr1)).toEqual(expected1);

  const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const expected2 = [1, 2, 3, 6, 9, 8, 7, 4, 5];

  expect(buildSnailPath(arr2)).toEqual(expected2);
});
