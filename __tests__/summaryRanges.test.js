import summaryRanges from '../src/summaryRanges';

test('summaryRanges', () => {
  expect(summaryRanges([0, 1, 2, 3, 4])).toEqual(['0->4']);
  expect(summaryRanges([0, 1, 2, 3])).toEqual(['0->3']);
  expect(summaryRanges([0, 1, 2, 4, 5])).toEqual(['0->2', '4->5']);
  expect(summaryRanges([-3, -2, -1, 4, 5])).toEqual(['-3->-1', '4->5']);
  expect(summaryRanges([-3, -2, -1, 0, 5])).toEqual(['-3->0']);
  expect(summaryRanges([9, 10, 11, 12, 13, 99, 100])).toEqual(['9->13', '99->100']);
});

test('the empty range', () => {
  expect(summaryRanges([])).toEqual([]);
  expect(summaryRanges([2])).toEqual([]);
  expect(summaryRanges([-1, -2, -3])).toEqual([]);
  expect(summaryRanges([-2, 0, 2, 4])).toEqual([]);
  expect(summaryRanges([1, 1, 1, 1])).toEqual([]);
  expect(summaryRanges([1, 3, 2, 4])).toEqual([]);
});
