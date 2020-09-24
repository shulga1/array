const triangle = (n) => {
  let result = [1];

  for (let index = 1; index <= n; index += 1) {
    const temp = [];
    for (let index2 = 0; index2 <= index; index2 += 1) {
      const prevNum = result[index2 - 1] ? result[index2 - 1] : 0;
      const curNum = result[index2] ? result[index2] : 0;
      temp.push(prevNum + curNum);
    }

    result = [...temp];
  }

  return result;
};

export default triangle;
