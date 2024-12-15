function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    //Check if mid is the target
    if (nums[mid] === target) {
      return mid;
    }

    //Determine if left portion is sorted
    if (nums[left] <= nums[mid]) {
      //Target is within the sorted left portion
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    //otherwise the right portion is sorted
    else {
      //target is within the sorted right portion
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
