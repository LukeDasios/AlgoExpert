function minRewards(scores) {
  let result = new Array(scores.length)
  result.fill(1)

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      result[i] = result[i - 1] + 1
    }
  }

  for (let i = scores.length - 2; i > -1; i--) {
    if (scores[i] > scores[i+1]) {
      result[i] = Math.max(result[i], result[i+1] + 1)
    }
  }

  let sum = 0

  for (let i = 0; i < result.length; i++) {
    sum += result[i]
  }

  return sum
}