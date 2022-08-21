function fourNumberSum(array, targetSum) {
  const allPairs = {}
  const quadruplets = []

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j]
      const diff = targetSum - currentSum

      if (diff in allPairs) {
        for (const pair of allPairs[diff]) {
          quadruplets.push(pair.concat([array[i], array[j]]))
        }
      }
    }

    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k]
      if (!(currentSum in allPairs)) {
        allPairs[currentSum] = [[array[k], array[i]]]
      } else {
        allPairs[currentSum].push([array[k], array[i]])
      }
    }
  }


  return quadruplets
}

