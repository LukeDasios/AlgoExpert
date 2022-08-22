function subarraySort(array) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (isOutOfOrder(i, num, array)) {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }

  if (min === Infinity) return [-1, -1];

  let left = 0;
  while (min >= array[left]) left++;

  let right = array.length - 1;
  while (max <= array[right]) right--;

  return [left, right];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) {
    return num > array[i + 1];
  } else if (i === array.length - 1) {
    return num < array[i - 1];
  } else {
    return num > array[i + 1] || num < array[i - 1];
  }
}
