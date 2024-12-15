function lengthOfLongestSubstring(str: string): number {
  let left = 0;
  let maxLength = 0;
  let visited = new Set<string>();

  for (let right = 0; right < str.length; right++) {
    //if character at right pointer already in visited shrink the window
    while (visited.has(str[right])) {
      visited.delete(str[left]); //remove the leftmost character
      left++; //Move the left  pointer
    }

    // Add the current charater to the set
    visited.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
