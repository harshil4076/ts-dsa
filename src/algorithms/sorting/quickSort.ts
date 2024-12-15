function quickSort(arr: number[]): number[] {
  //basecase
  if (arr.length <= 1) {
    return arr;
  }

  // define a pivot
  const pivot = arr[arr.length - 1];

  const left: number[] = [];
  const right: number[] = [];

  // run a loop to push elements based on pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
// Example Usage
const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 10];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 7, 8, 10]
