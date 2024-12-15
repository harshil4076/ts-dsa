function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;
  //Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    // Inner loop for comparision
    for (let j = 0; j < n - i - 1; j++) {
      //Swap if the element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
      // If no swaps occured, the array is already sorted
      if (!swapped) break;
    }
  }
  return arr;
}
// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", numbers);
console.log("Sorted Array:", bubbleSort(numbers));
