// Time Complexity: O(n) - where n is the total number of elements (if all the arrays counted as one element, and then were flattened and counted again)
// Time Complexity: O(d) - where d is the deepest recursive call on the call stack, the largest number multiplier equals

function productSum(array, multiplier = 1) {
  let sum = 0;

  for (el of array) {
    if (typeof el === "object") {
      sum += productSum(el, multiplier + 1);
    } else {
      sum += el;
    }
  }

  return sum * multiplier;
}
