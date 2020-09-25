/* eslint-disable no-param-reassign */
const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = 0; j < numbers.length - i; j += 1) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
};

export default bubbleSort;
