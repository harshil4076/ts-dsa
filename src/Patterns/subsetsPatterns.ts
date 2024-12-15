function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  function backtrack(start: number, currentSubset: number[]): void {
    // Add the current subset to the result
    result.push([...currentSubset]);

    //Generate subsets including elements from the current position
    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]); // Include the current element
      backtrack(i + 1, currentSubset); // Recurse for the next elements
      currentSubset.pop(); // Backtrack: Remove the current element
    }
  }
  backtrack(0, []);
  return result;
}
