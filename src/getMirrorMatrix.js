const getMirrorMatrix = (matrix) => {
  const newMatrix = [];
  const lastIndexRow = matrix[0].length - 1;

  matrix.forEach((row) => {
    const firstHalfRow = row.slice(0, row.length / 2);
    const newRow = [];

    firstHalfRow.forEach((element, index) => {
      newRow[index] = element;
      newRow[lastIndexRow - index] = element;
    });

    newMatrix.push(newRow);
  });

  return newMatrix;
};

export default getMirrorMatrix;

/* const getMirrorMatrix = (matrix) => {
   const newMatrix = [];

   matrix.forEach((row) => {
     const partMatrix = row.slice(0, row.length / 2);
     const mirrorPart = [...partMatrix].reverse();
     const newRow = partMatrix.concat(mirrorPart);
     newMatrix.push(newRow);
   });

    return newMatrix;
   };
*/
