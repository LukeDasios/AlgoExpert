// Optimal Solution
// Time Complexity: O(n + m) - where n is the length of the matrix's rowws and m is the length of the matrix's columns
// Space Complexity: O(1)

function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = 0;

  while (row < matrix.length) {
    if (target === matrix[row][col]) {
      return [row, col];
    } else if (target > matrix[row][col]) {
      while (target > matrix[row][col] && col < matrix[0].length - 1) col++;
    } else {
      while (target < matrix[row][col] && col > -1) col--;
    }

    if (target === matrix[row][col]) {
      return [row, col];
    } else row++;
  }

  return [-1, -1];
}
