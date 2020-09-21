import getLongestLength from '../src/getLongestLength.js';

test('getLongestLength', () => {
  expect(getLongestLength('aa')).toBe(1);
  expect(getLongestLength('abcdefgh')).toBe(8);
  expect(getLongestLength('abbabcba')).toBe(3);
  expect(getLongestLength('abcdefag')).toBe(7);
  expect(getLongestLength('12345abca1')).toBe(8);
  expect(getLongestLength('')).toBe(0);
});
