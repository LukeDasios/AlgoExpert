function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0])
  let final = [array[0]]

  for (let i = 1; i < array.length; i++) {
    let temp = final[final.length-1][1]
    if (temp >= array[i][0]) {
      final[final.length-1][1] = Math.max(temp, array[i][1])
    } else {
      final.push(array[i])
    }
  }

  return final
}