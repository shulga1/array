const isContinuousSequence = (sequence) => {
  if (sequence.length <= 1) {
    return false;
  }
  const [firstNum] = sequence;

  return sequence.every((element, index) => firstNum + index === element);
};

export default isContinuousSequence;