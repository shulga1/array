import compareVersion from '../src/compareVersion.js';

test('equal', () => {
  expect(compareVersion('1.0', '1.0')).toBe(0);
  expect(compareVersion('22.0', '22.0')).toBe(0);
  expect(compareVersion('0.1', '0.1')).toBe(0);
});

test('first number > second number', () => {
  expect(compareVersion('1.1', '1.0')).toEqual(1);
  expect(compareVersion('1.24', '1.23')).toEqual(1);
  expect(compareVersion('1.13', '1.2')).toEqual(1);
  expect(compareVersion('2.0', '1.2')).toEqual(1);
});

test('first number < second number', () => {
  expect(compareVersion('0.1', '0.2')).toEqual(-1);
  expect(compareVersion('1.0', '1.1')).toEqual(-1);
  expect(compareVersion('1.20', '1.21')).toEqual(-1);
  expect(compareVersion('1.13', '1.20')).toEqual(-1);
  expect(compareVersion('2.0', '2.2')).toEqual(-1);
});
