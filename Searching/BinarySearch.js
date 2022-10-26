// Time Complexity: O(log n) - where n is the length of the input array
// Space Complexity: O(1)

function binarySearch(array, target) {
  let low = 0,
    high = array.length - 1;
  while (low !== high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (target > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return array[low] === target ? low : -1;
}
