function transpose(matrix) {
  let transposed_matrix = [];

  for (i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    transposed_matrix.push(row);
  }

  return transposed_matrix;
}

console.log(transpose([[1, 2, 3, 4]])); // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
console.log(transpose([[1]])); // [[1]]
console.log(
  transpose([
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2],
  ])
);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
