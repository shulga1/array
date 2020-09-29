const multiply = (matrix1, matrix2) => {
  const [firstLine2] = matrix2;
  const result = [];

  for (let line = 0; line < matrix1.length; line += 1) {
    result[line] = [];
    for (let column = 0; column < firstLine2.length; column += 1) {
      let sum = 0;
      for (let i = 0; i < matrix2.length; i += 1) {
        sum += matrix1[line][i] * matrix2[i][column];
      }
      result[line][column] = sum;
    }
  }

  return result;
};

export default multiply;
