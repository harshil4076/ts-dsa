// Find first non repeated character in a string

function firstNonRepeatedChar(str: string): string | null {
  let charCount: Record<string, number> = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  return null;
}

console.log(firstNonRepeatedChar("Iamgroot"));
