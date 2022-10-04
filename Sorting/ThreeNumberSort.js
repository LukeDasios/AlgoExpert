// Time Complexity: O(n) - Where n is the length of the input array
// Space Complextiy: O(1)

function threeNumberSort(array, order) {
  let iteration = 0;
  let next = order[iteration];
  let i = 0;
  while (i < array.length) {
    let num = array[i];
    if (num !== next) {
      let j = i + 1;
      while (j < array.length && array[j] !== next) j++;
      if (j === array.length) {
        iteration++;
        next = order[iteration];
        i--;
      } else {
        swap(i, j, array);
      }
    }
    i++;
  }

  return array;
}

function swap(index1, index2, array) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
