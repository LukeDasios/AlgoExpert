// Time Complexity: O(nlog(n))
// Space Complexity: O(log(n))

function quickSort(array) {
  if (!array.length) return array;
  let left = [],
    right = [];
  let pivot = array.pop();
  for (const num of array) {
    num <= pivot ? left.push(num) : right.push(num);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
