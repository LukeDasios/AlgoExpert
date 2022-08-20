function mergeOverlappingIntervals(array) {
  let i = 0
  while (i < array.length - 1) {
    if (array[i][1] >= array[i+1][0]) {
      array.splice(i, 2, [array[i][0], array[i+1][1]])
        i = 0
      } else i++
    }

  return array;
}