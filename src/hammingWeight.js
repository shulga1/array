const hammingWeight = (decimal) => {
  const binary = decimal.toString(2).split('');
  const arr = [];

  binary.forEach((element) => {
    if (element === '1') {
      arr.push(1);
    }
  });

  return arr.length;
};

export default hammingWeight;
