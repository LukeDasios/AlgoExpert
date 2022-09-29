// Time Complexity: O(n^2) - where n is the length of the stack
// Space Complexity: O(n)

// Time Complexity: O(n^2) - where n is the length of the stack
// Space Complexity: O(n)

function sortStack(stack) {
  if (stack.length === 0) return stack;

  let top = stack.pop();
  sortStack(stack);
  insertInSortedOrder(stack, top);
  return stack;
}

function insertInSortedOrder(stack, value) {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  let top = stack.pop();
  insertInSortedOrder(stack, value);
  stack.push(top);
}
