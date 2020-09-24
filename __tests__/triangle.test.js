import triangle from '../src/triangle.js';

test("Pascal's triangle", () => {
  expect(triangle(0)).toEqual([1]);
  expect(triangle(1)).toEqual([1, 1]);
  expect(triangle(2)).toEqual([1, 2, 1]);
  expect(triangle(4)).toEqual([1, 4, 6, 4, 1]);
  expect(triangle(5)).toEqual([1, 5, 10, 10, 5, 1]);
  expect(triangle(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
});
