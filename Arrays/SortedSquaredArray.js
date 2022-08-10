function sortedSquaredArray(array) {
  let newArray = [Math.pow(array[0], 2)];

  for (let i = 1; i < array.length; i++) {
    insert(Math.pow(array[i], 2), newArray);
  }

  return newArray;
}

// A properly created insert method should take O(log n) time

function insert(num, arr) {
  let i = 0;
  let len = arr.length;
  while (i < len) {
    if (num < arr[i]) {
      arr.splice(i, 0, num);
      i = len;
    } else {
      if (i + 1 === len) arr.push(num);
    }

    i++;
  }
}
