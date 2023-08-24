function transpose(matrix) {
  let transposed_matrix = [];

  for (i = 0; i < matrix.length; i++) {
    let row = [];
    for (j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    transposed_matrix.push(row);
  }

  return transposed_matrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
