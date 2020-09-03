const sumIntervals = (intervals) => {
  const numbersFromIntervals = [];

  intervals.forEach(([start, finish]) => {
    for (let number = start; number < finish; number += 1) {
      if (!numbersFromIntervals.includes(number)) {
        numbersFromIntervals.push(number);
      }
    }
  });

  return numbersFromIntervals.length;
};

export default sumIntervals;
