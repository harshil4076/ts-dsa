function isValidParentheses(str: string): boolean {
  //use stack to check the sequence of the paranthesis
  let stack: string[] = [];
  let pairs: Record<string, string> = { "[": "]", "{": "}", "(": ")" };

  for (const char of str) {
    if (char in pairs) {
      stack.push(char);
    } else {
      let lastString = stack.pop();
      if (lastString && pairs[lastString] !== char) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValidParentheses("{[()]}")); // Output: true
console.log(isValidParentheses("{[(])}")); // Output: false
