export const rotate = (matrix, direction = 'left') => {
  const result = [];

  for (let field = 0; field < matrix.length; field += 1) {
    const temp = [];
    for (let row = 0; row < matrix.length; row += 1) {
      direction === 'right'
        ? temp.push(matrix[matrix.length - 1 - row][field])
        : temp.push(matrix[row][matrix.length - 1 - field]);
    }

    result.push(temp);
  }
  return result;
};

export const rotateRight = (matrix) => rotate(matrix, 'right');

export const rotateLeft = (matrix) => rotate(matrix);
