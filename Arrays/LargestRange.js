function largestRange(array) {
  if (array.length === 1) return [1, 1]
  array.sort((a, b) => a - b)
  let hashMap = {}
  let max = -Infinity

  array.push(9000)
  let last = array[0]
  let range = 0
  let x = 0

  for (let i = 1; i < array.length; i++) {
    let temp = array[i]

    if (temp === last + 1 || temp === last) {
      range++
    } else {
      if (array[i - range - 1] !== array[i - 1]) {
        max = Math.max(max, range)
        hashMap[range] = [array[i - range - 1], array[i - 1]]
      }
      range = 0
    }

    x = i
    last = temp
  }

  return hashMap[max]
}