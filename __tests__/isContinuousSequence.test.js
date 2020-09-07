import isContinuousSequence from '../src/isContinuousSequence.js';

test("it isn't a sequence of numbers", () => {
  expect(isContinuousSequence([])).toBe(false);
  expect(isContinuousSequence([0])).toBe(false);
  expect(isContinuousSequence([0, 1, 3])).toBe(false);
  expect(isContinuousSequence([0, 1, 2, 4])).toBe(false);
  expect(isContinuousSequence([0, 1, 3, 3, 4, 5])).toBe(false);
  expect(isContinuousSequence([0, 1, 2, 2])).toBe(false);
  expect(isContinuousSequence([0, 2, 4, 6])).toBe(false);
  expect(isContinuousSequence([-2, -1, 0, 0])).toBe(false);
});

test("it's a sequence of numbers", () => {
  expect(isContinuousSequence([0, 1])).toBe(true);
  expect(isContinuousSequence([0, 1, 2])).toBe(true);
  expect(isContinuousSequence([-1, 0, 1, 2])).toBe(true);
  expect(isContinuousSequence([7, 8, 9, 10, 11])).toBe(true);
  expect(isContinuousSequence([47, 48, 49, 50])).toBe(true);
});