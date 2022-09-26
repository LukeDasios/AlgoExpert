// Time Complexity: O(n) - where n is the length of the input string
// Space Complexity: O(n)

function balancedBrackets(string) {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    let bracket = string[i];

    if (bracket === "(") {
      stack.push(bracket);
    } else if (bracket === "[") {
      stack.push(bracket);
    } else if (bracket === "{") {
      stack.push(bracket);
    } else if (bracket === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else return false;
    } else if (bracket === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else return false;
    } else if (bracket === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      } else return false;
    }
  }

  return stack.length === 0;
}
