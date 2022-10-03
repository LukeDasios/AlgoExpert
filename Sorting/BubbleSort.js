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
