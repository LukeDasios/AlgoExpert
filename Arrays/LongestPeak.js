// Time complexity: O(n log n)
// Space complexity: O(1)

function longestPeak(array) {
  let max = 0

  let i = 0
  while (i < array.length - 2) {
    if (array[i] < array[i + 1]) {
      let j = i

      while (array[j] < array[j+1]) {
        j++
      }

      if (array[j] > array[j+1]) {
        while (array[j] > array[j+1]) {
          j++
        }
        max = Math.max(max, 1 + j - i)
      } else {
       j++
      }

      i += j - i
    } else i++
  }

  return max
}