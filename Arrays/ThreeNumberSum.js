function threeNumberSum(array, targetSum) {
  // Time complexity: O(n^2)
  // Space complexity: O(n)

  array.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];

      if (currentSum == targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}
