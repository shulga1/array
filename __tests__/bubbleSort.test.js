import bubbleSort from '../src/bubbleSort.js';

test('bubbleSort', () => {
  const arr1 = [];

  const arr2 = [0, 1, 2, 3, 0];

  const arr3 = [11, 0, 10, 1, 111];

  expect(bubbleSort(arr1)).toEqual([]);
  expect(bubbleSort(arr2)).toEqual([0, 0, 1, 2, 3]);
  expect(bubbleSort(arr3)).toEqual([0, 1, 10, 11, 111]);
});
