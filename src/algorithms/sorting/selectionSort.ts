function selectionSort(arr: number[]): number[] {
  let n = arr.length;

  //Outer loop to iterate over the array
  for (let i = 0; i < n - 1; i++) {
    // Assume the current index `i` has the smallest value
    let minIndex = i;

    // Inner loop to find smallest element in the remaining unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; //Update the index of the smallest element
      }
    }
    // Swap he smallest element with the element at index `i`
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Example usage
// const numbers = [64, 25, 12, 22, 11];
// console.log("Unsorted Array:", numbers);
// console.log("Sorted Array:", selectionSort(numbers));
