function insertionSort(arr: number[]): number[] {
  let n = arr.length;

  //Outer loop to iterate through each element
  for (let i = 1; i < n; i++) {
    //Store the current element (key)
    let key = arr[i];
    let j = i - 1;

    // Inner loop to find the correct position for the key
    // Shift elements greater then key one positioned ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    //Palce the key in the correct position
    arr[j + 1] = key;
  }
  return arr;
}
// Example usage
// const numbers = [64, 34, 25, 12, 22, 11, 90];
// console.log("Unsorted Array:", numbers);
// console.log("Sorted Array:", insertionSort(numbers));
