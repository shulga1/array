import hammingWeight from '../src/hammingWeight.js';

test('Hamming weight', () => {
  expect(hammingWeight(0)).toBe(0);
  expect(hammingWeight(1)).toBe(1);
  expect(hammingWeight(7)).toBe(3);
  expect(hammingWeight(17)).toBe(2);
  expect(hammingWeight(21)).toBe(3);
  expect(hammingWeight(100)).toBe(3);
  expect(hammingWeight(1024)).toBe(1);
});
