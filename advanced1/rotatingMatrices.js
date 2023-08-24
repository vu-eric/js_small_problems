function rotate90(matrix) {
  let rotated_matrix = [];

  for (column = 0; column < matrix[0].length; column += 1) {
    let rotated_row = [];
    for (row = matrix.length - 1; row >= 0; row -= 1) {
      rotated_row.push(matrix[row][column]);
    }
    rotated_matrix.push(rotated_row);
  }

  return rotated_matrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
