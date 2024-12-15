function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let countLetters: { [key: string]: number } = {};
  for (let letter of s) {
    countLetters[letter] = (countLetters[letter] || 0) + 1;
  }
  for (let letter of t) {
    if (!countLetters[letter]) {
      return false;
    }
    countLetters[letter]--;
  }
  return true;
}

function isAnagramSorted(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return s.split("").sort().join() === t.split("").sort().join();
}
console.log(isAnagramSorted("racecar", "racerac"));
console.log(isAnagramSorted("racecar", "racrxac"));
console.log(isAnagramSorted("racecar", "racrac"));

console.log(validAnagram("racecar", "racerac"));
console.log(validAnagram("racecar", "racrxac"));
console.log(validAnagram("racecar", "racrac"));

function groupAnagram(arr: string[]): string[][] {
  //in a loop sort each word then save the sorted word as a key and push word as value in map
  let map = new Map<string, string[]>();
  for (let word of arr) {
    let key = word.split("").sort().join();
    if (!map.get(key)) {
      map.set(key, []);
    }
    map.get(key)?.push(word);
  }
  //check if the word exists before creating new key
  //In the end return an Array created from map values list
  return Array.from(map.values());
}
console.log(
  "Group Anagrams...",
  groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])
);
