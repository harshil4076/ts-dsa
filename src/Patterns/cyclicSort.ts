function cyclicSort(nums: number[]): number[] {
  let i = 0;

  while (i < nums.length) {
    const correctIndex = nums[i] - 1; // Target index for nums[i]

    if (nums[i] !== nums[correctIndex]) {
      // Swap nums[i] with the number at its correct index
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      // Move to the next index
      i++;
    }
  }
  return nums;
}
// Example usage
// const nums = [3, 1, 5, 4, 2];
// console.log(cyclicSort(nums));
// Output: [1, 2, 3, 4, 5]
