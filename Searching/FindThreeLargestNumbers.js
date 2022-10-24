// Time Complexity: O(n)
// Space Complexity: O(1)

function findThreeLargestNumbers(array) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if (el > max1) {
      max3 = max2;
      max2 = max1;
      max1 = el;
    } else if (el > max2) {
      max3 = max2;
      max2 = el;
    } else if (el > max3) {
      max3 = el;
    }
  }

  return [max3, max2, max1];
}
