function twoSumSorted(arr: number[], target: number): [number, number] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [left, right]; //Return the indices of two numbers
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

// Example usage
// const arr = [1, 2, 3, 4, 6];
// const target = 6;
// console.log(twoSumSorted(arr, target)); // Output: [1, 3]
