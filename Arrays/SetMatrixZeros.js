var setZeroes = function (matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  let targetRow = new Set();
  let targetCol = new Set();

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] == 0) {
        targetRow.add(i);
        targetCol.add(j);
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (targetRow.has(i) || targetCol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix);
};
setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
