// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let p = i;
    let j = i + 1;

    while (j < array.length) {
      if (array[j] < array[p]) {
        break;
      } else {
        j++;
        p++;
      }
    }
    while (array[j] < array[p]) {
      swap(p, j, array);
      p--;
      j--;
    }
  }

  return array;
}

function swap(index1, index2, array) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
