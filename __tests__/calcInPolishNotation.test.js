import calcInPolishNotation, { calculator } from '../src/calcInPolishNotation.js';

test('calculator', () => {
  expect(calculator(-1, -1, '+')).toBe(-2);
  expect(calculator(2, -2, '-')).toBe(4);
  expect(calculator(3, 0, '*')).toBe(0);
  expect(calculator(4, 2, '/')).toBe(2);
});

test('polish notation', () => {
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '/', 2, 2, '*', '-'])).toBe(0);
  expect(calcInPolishNotation([7, 2, 3, '*', '-'])).toBe(1);
  expect(calcInPolishNotation([1, 2, '+', 2, 2, '*', '-'])).toBe(-1);
  expect(calcInPolishNotation([4, 3, '+'])).toBe(7);
  expect(calcInPolishNotation([4, 3, 3, '*', '-'])).toBe(-5);
});
