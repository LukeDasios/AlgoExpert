// Time Complexity: O(n^2)
// Space Complextiy: O(1)

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let p = i;
    while (array[p] < array[j]) {
      swap(j--, p--, array);
    }
  }

  return array;
}

function swap(index1, index2, array) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
