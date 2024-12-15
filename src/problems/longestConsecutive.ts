function longestConsecutive(arr: number[]): number {
  // Use a Set to store the consecutive numbers.
  let set = new Set<number>(arr);
  //use a variable to store the maxCount.
  let maxCount = 0;
  // The idea is to check for n-1.
  // loop through the array
  for (const num of arr) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentMax = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentMax += 1;
      }
      maxCount = Math.max(maxCount, currentMax);
    }
  }
  //for numbers with no n-1 set the cumner to currentNumber
  //inside the loop add a condition to check while n+1 =true
  // until n+1 exist increment currrentNum and currentMax
  //return max(maxCount, currentMax)

  return maxCount;
}

console.log(longestConsecutive([1, 2, 5, 3, 6, 4]));
