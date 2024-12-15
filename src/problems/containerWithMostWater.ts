function containerWithMostwater(arr: number[]): number {
  //use two pointers to measure the width and height
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;
  //keep track of max area
  //loop until the pointers meet
  while (left < right) {
    let width = right - left;
    let height = Math.min(arr[left], arr[right]);
    let currentArea = width * height;

    maxArea = Math.max(maxArea, currentArea);
    //increment and decrement left and right so that the pointers move
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostwater(height));
