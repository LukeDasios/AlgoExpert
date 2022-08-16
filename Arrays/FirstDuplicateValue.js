function firstDuplicateValue(array) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if (map.has(el)) {
      return el;
    } else {
      map.set(el, 1);
    }
  }

  return -1;
}

// This solution is O(n) time and O(n) space, there is a solution that is O(n) and O(1) space. find it
