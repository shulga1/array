/* eslint-disable no-param-reassign */
const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] > numbers[j]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  return numbers;
};

export default bubbleSort;
