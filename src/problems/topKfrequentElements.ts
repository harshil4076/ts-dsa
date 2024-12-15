function topKfrequentElements(arr: number[], k: number): number[] {
  //count the frequency using Map
  const map = new Map<number, number>();
  //loop through map values and return a new array which comtains the k numbers which have the highest frequency
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let sortedFrequency = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  //
  return sortedFrequency.slice(0, k).map(([num]) => num);
}

console.log(topKfrequentElements([1, 2, 3, 4, 2, 2, 1, 1], 3));
