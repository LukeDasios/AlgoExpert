function isMonotonic(array) {
  // Solution is O(n) in time complexity and O(1) in space complexity

  let increasing = array[array.length - 1] > array[0];
  let last = array[0];

  if (increasing) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < last) return false;
      last = array[i];
    }
  } else {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > last) return false;
      last = array[i];
    }
  }

  return true;
}
