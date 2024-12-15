// Find the maximum sum of any subarray of size k.

// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: 9
// Explanation: The subarray [5, 1, 3] has the maximum sum of 9.

function maxSubArraySum(arr: number[], k: number): number {
  if (arr.length < k) {
    throw new Error("Array length must be greater than or equal to k");
  }

  let maxSum = 0;
  let windowSum = 0;

  //Initialize the first window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Slide the window over the array
  for (let end = k; end < arr.length; end++) {
    // Substract the element going out of the window and add the new element
    windowSum += arr[end] - arr[end - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
// Example usage
// const arr = [2, 1, 5, 1, 3, 2];
// const k = 3;
// console.log(maxSubArraySum(arr, k)); // Output: 9
