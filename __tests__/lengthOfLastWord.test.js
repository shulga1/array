import lengthOfLastWord from '../src/lengthOfLastWord.js';

test('should be work', () => {
  expect(lengthOfLastWord('')).toBe(0);
  expect(lengthOfLastWord('word')).toBe(4);
  expect(lengthOfLastWord('word word!')).toBe(5);
  expect(lengthOfLastWord('word  lastWord')).toBe(8);
  expect(lengthOfLastWord('  w')).toBe(1);
  expect(lengthOfLastWord('word word  word   ')).toBe(4);
});
