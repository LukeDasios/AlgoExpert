// Time Complexity: O(n^2) - where n is the length of the array
// Space Complexity: O(n)

function nextGreaterElement(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    arr.push(getNextGreaterElement(i, array));
  }

  return arr;
}

function getNextGreaterElement(index, array) {
  let cur = array[index];
  let val = -1;
  let done = false;

  let i = index;
  while (i < array.length) {
    if (array[i] > cur) {
      val = array[i];
      done = true;
      i = array.length;
    } else i++;
  }

  if (!done) {
    i = 0;
    while (i < index) {
      if (array[i] > cur) {
        val = array[i];
        i = array.length;
      } else i++;
    }
  }

  return val;
}
