import chunk from '../src/chunk.js';

test('chunk', () => {
  const arr1 = [1, 2, 3, 4];

  const expect1 = [[1], [2], [3], [4]];

  expect(chunk(arr1, 1)).toEqual(expect1);
});
