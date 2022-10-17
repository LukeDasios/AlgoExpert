// Time Complexity: O(n^2) - where n is the length of the input array
// Space Complextiy: O(1)

function bubbleSort(array) {
  let iterations = 1;
  while (sort(array, iterations++)) sort(array, iterations++);
  return array;
}

function sort(array, iterations) {
  let swapped = false;

  for (let i = 0; i < array.length - iterations; i++) {
    if (array[i + 1] < array[i]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      swapped = true;
    }
  }

  return swapped;
}
