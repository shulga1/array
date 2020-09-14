const rotate = (matrix) => {
  if (matrix.length < 1) {
    return [];
  }
  const newMatrix = [];

  for (let line = 0; line < matrix[0].length; line += 1) {
    const tempArr = [];

    for (let row = 0; row < matrix.length; row += 1) {
      tempArr.push(matrix[row][line]);
    }

    newMatrix.push(tempArr);
  }

  return newMatrix.reverse();
};

const buildSnailPath = (matrix) => {
  let newMatrix = [...matrix];
  const result = [];

  if (newMatrix.length === 0) {
    return '';
  }

  while (newMatrix.length !== 0) {
    result.push(newMatrix.slice(0, 1));
    newMatrix = rotate(newMatrix.slice(1));
  }

  return result.flat(Infinity);
};

export default buildSnailPath;
