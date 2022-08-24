function largestRange(array) {
  if (array.length === 1) return [1, 1];
  array.sort((a, b) => a - b);
  let ranges = [];
  let indices = [];

  array.push(9000);
  let last = array[0];
  let range = 0;
  let x = 0;

  for (let i = 1; i < array.length; i++) {
    let temp = array[i];

    if (temp === last + 1 || temp === last) {
      range++;
    } else {
      if (array[i - range - 1] !== array[i - 1]) {
        ranges.push(range);
        indices.push([array[i - range - 1], array[i - 1]]);
      }
      range = 0;
    }

    x = i;
    last = temp;
  }

  return indices[ranges.indexOf(Math.max(...ranges))];
}
