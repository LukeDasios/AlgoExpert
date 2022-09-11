// Time Complexity: O(n * m * log(n)) - where n is the length of the words array and m is the length of the longest word
// Space Complexity: O(nm)

function groupAnagrams(words) {
  let map = new Map();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let mappedWord = word.split("").sort().join("");

    if (map.has(mappedWord)) {
      map.set(mappedWord, [...map.get(mappedWord), word]);
    } else {
      map.set(mappedWord, [word]);
    }
  }

  let final = [];

  map.forEach((value, key) => {
    final.push(value);
  });

  return final;
}
