function isPlaindrome(str: string): boolean {
  return removeSpaces(str) === reverse(removeSpaces(str));
}
function removeSpaces(input: string): string {
  return input.replace(/ /g, "");
}
function reverse(str: string): string {
  let left = 0;
  let right = str.length - 1;
  let strArray = Array.from(str);
  while (left < right) {
    [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
    left++;
    right--;
  }
  return strArray.join("");
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char: string): boolean {
  return /^[a-z0-9]$/i.test(char);
}
console.log(reverse("reverse"));
console.log(isPlaindrome("radar"));
console.log(isPlaindrome("race car"));
