// Naive Recursive Solution:
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// function getNthFib(n) {
//    if (n <= 2) return n - 1
//    return getNthFib(n - 1) + getNthFib(n - 2)
// }

// Optimal Solution using Memoization:
// Time Complextiy: O(n)
// Space Complexity: O(n)

// let map = new Map()

// function getNthFib(n) {
//    if (n <= 2) return n - 1
//    let num1, num2
//    if (map.has(n - 1)) {
//      num1 = map.get(n - 1)
//    } else {
//      num1 = getNthFib(n - 1)
//      map.set(n - 1, num1)
//    }

//   if (map.has(n - 2)) {
//     num2 = map.get(n - 2)
//   } else {
//     num2 = getNthFib(n - 2)
//     map.set(n - 2, num2)
//   }

//    return num1 + num2
// }

// Optimal Solution using an iterative approach
// Time Complextiy: O(n)
// Space Complexity: O(n)

function getNthFib(n) {
  if (n <= 2) return n - 1;
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.pop();
}
