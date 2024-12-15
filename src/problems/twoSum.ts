function twoSum(arr: number[], target: number): number[] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

const arr = [6, 4, 3, 2, 1];
const target = 6;
console.log(twoSum(arr, target)); // Output: [1, 3]

function twoSumUnsorted(arr: number[], target: number): number[] | null {
  //to use Map and store the number and index as a keyvalue pair
  let map = new Map<number, number>();
  //Inside a loop calculate a complement which isthe difference of target - currentNumber
  for (let i = 0; i < arr.length - 1; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(arr[i], i);
  }
  //check if the complement exist in Map then return the value and currentNumber[i] else
  // Add currentNumber and i to map
  return null;
}
