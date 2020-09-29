import multiply from '../src/multiply.js';

test('test 1', () => {
  const matrix1 = [
    [4, 5],
    [6, 7],
  ];

  const matrix2 = [
    [1, 2],
    [3, 4],
  ];

  const expected = [
    [19, 28],
    [27, 40],
  ];

  expect(multiply(matrix1, matrix2)).toEqual(expected);
});

test('test 2', () => {
  const matrix1 = [
    [3, 2],
    [1, 1],
  ];
  const matrix2 = [
    [1, 2],
    [3, 2],
  ];
  const expected = [
    [9, 10],
    [4, 4],
  ];

  expect(multiply(matrix1, matrix2)).toEqual(expected);
});

test('test 3', () => {
  const matrix1 = [
    [1, 2, 1],
    [0, 1, 0],
    [2, 3, 4],
  ];
  const matrix2 = [
    [2, 5],
    [6, 7],
    [1, 8],
  ];
  const expected = [
    [15, 27],
    [6, 7],
    [26, 63],
  ];

  expect(multiply(matrix1, matrix2)).toEqual(expected);
});

test('test 4', () => {
  const matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const matrix2 = [
    [1, 2, 3],
    [4, 5, 0],
  ];
  const expected = [
    [9, 12, 3],
    [19, 26, 9],
    [29, 40, 15],
  ];

  expect(multiply(matrix1, matrix2)).toEqual(expected);
});

test('test 5', () => {
  const matrix1 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  const matrix2 = [
    [1, 2, 1],
    [0, 1, 0],
    [0, 1, 0],
  ];
  const expected = [
    [1, 4, 1],
    [1, 4, 1],
    [1, 4, 1],
  ];

  expect(multiply(matrix1, matrix2)).toEqual(expected);
});
