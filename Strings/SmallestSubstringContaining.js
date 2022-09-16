// Naive Solution
// Time Complexity: O(n^2) - where n is the length of bigString and m is the length of smallString
// Space Complexity: O(n + m)

function smallestSubstringContaining(bigString, smallString) {
  let map = new Map();
  for (char of smallString) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let min = Infinity;
  let smallest_substring = "";

  for (let i = 0; i < bigString.length; i++) {
    if (map.has(bigString[i])) {
      let j = i;
      let str = "";
      const deepCopy = new Map(JSON.parse(JSON.stringify(Array.from(map))));

      while (deepCopy.size && j < bigString.length) {
        let char = bigString[j];
        str += char;
        if (deepCopy.has(char)) {
          deepCopy.set(char, deepCopy.get(char) - 1);
          if (deepCopy.get(char) === 0) deepCopy.delete(char);
        }
        j++;
      }

      if (min > j - i && deepCopy.size === 0) {
        min = j - i;
        smallest_substring = str;
      }
    }
  }

  return smallest_substring;
}

// Optimal Solution
// Time Complexity: O(n + m) - where n is the length of bigString and m is the length of smallString
// Space Complexity: O(n + m)

// Uses the sliding window technique

console.log(smallestSubstringContaining("abcd$ef$axb$c$", "$$abf"));
