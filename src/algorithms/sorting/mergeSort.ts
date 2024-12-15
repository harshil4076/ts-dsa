function mergeSort(arr: number[]): number[] {
  //Base case: If the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  //split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  //Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let i = 0; // Pointer for the left array
  let j = 0; // Pointer for the right array

  // Compare elements from both arrays and merge in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  //Append any remaining arrays form both the elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
// const numbers = [38, 27, 43, 3, 9, 82, 10];
// console.log("Unsorted Array:", numbers);
// console.log("Sorted Array:", mergeSort(numbers));
