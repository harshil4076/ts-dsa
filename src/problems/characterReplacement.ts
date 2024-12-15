function characterReplacement(s: string, k: number): number {
  const frequencyMap: { [key: string]: number } = {};
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, frequencyMap[char]);

    const windowSize = right - left + 1;
    if (windowSize - maxFreq > k) {
      //Shrink the window by moving the left pointer
      const leftChar = s[left];
      frequencyMap[left] -= 1;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
