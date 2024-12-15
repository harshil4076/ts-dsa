function spiralOrder(matrix: [][]): number[] {
  const result: number[] = [];
  if (matrix.length === 0) return result; // Empty matrix

  // Initialize boundaries
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  //traverse the atrix in spiral order
  while (top <= bottom && left <= right) {
    // traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    //Traverse from top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    //Traverse from right to left along the bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    // traverse from bottom to top along the left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}

// Example usage
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
