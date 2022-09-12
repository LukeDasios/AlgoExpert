// Time Complexity: O(n * m) - where n is the length of the array of words and m is the length of the longest word
// Space Complexity: O(c) - where c is the number of unique characters across all the words

function minimumCharactersForWords(words) {
  let map = new Map();

  for (const word of words) {
    let tempMap = new Map();

    for (const character of word) {
      if (tempMap.has(character)) {
        tempMap.set(character, tempMap.get(character) + 1);
      } else {
        tempMap.set(character, 1);
      }
    }

    tempMap.forEach((value, key) => {
      if (map.has(key)) {
        if (map.get(key) < value) {
          map.set(key, value);
        }
      } else {
        map.set(key, value);
      }
    });
  }

  let final = [];
  map.forEach((value, key) => {
    for (let i = 0; i < value; i++) {
      final.push(key);
    }
  });

  return final;
}
