function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let p1 = 0
  let p2 = 0

  let diff = Infinity
  let vals = []

  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let val1 = arrayOne[p1]
    let val2 = arrayTwo[p2]
    let temp = absoluteDifference(val1, val2)

    if (temp < diff) {
      diff = temp
      vals = [val1, val2]
    }

    if (val1 < val2) {
      p1++
    } else {
      p2++
    }
  }

  return vals
}

function absoluteDifference(num1, num2) {
  let diff = 0

  if (num1 < 0) {
    if (num2 < 0) {
      if (num1 < num2) {
        diff = Math.abs(num1) - Math.abs(num2)
      } else {
        diff = Math.abs(num2) - Math.abs(num1)
      }
    } else {
      diff = Math.abs(num1) + num2
    }
  } else {
    if (num2 < 0) {
      diff = num1 + Math.abs(num2)
    } else {
      if (num1 < num2) {
        diff = num2 - num1
      } else {
        diff = num1 - num2
      }
    }
  }

  return diff
}