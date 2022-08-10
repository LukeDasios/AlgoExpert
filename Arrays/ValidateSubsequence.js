function isValidSubsequence(array, sequence) {
  let pointer = sequence[0]
  let count = 0

  let i = 0
  while (i < array.length) {
    if (count === sequence.length) break
    if (pointer === array[i]) pointer = sequence[++count]
    i++
  }

  return count === sequence.length
}