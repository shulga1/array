export const rotate = (matrix, direction = 'left') => {
  if (matrix.length < 1) {
    return [];
  }

  const result = [];

  for (let column = 0; column < matrix[0].length; column += 1) {
    const temp = [];
    for (let row = 0; row < matrix.length; row += 1) {
      if (direction === 'right') {
        temp.push(matrix[matrix.length - 1 - row][column]);
      }
      if (direction === 'left') {
        temp.push(matrix[row][matrix[0].length - 1 - column]);
      }
    }

    result.push(temp);
  }

  return result;
};

export const rotateRight = (matrix) => rotate(matrix, 'right');

export const rotateLeft = (matrix) => rotate(matrix);
