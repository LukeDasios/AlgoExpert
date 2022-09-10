// Time Complexity: O(n) - where n is the length of the string
// Space Complexity: O(n)

// Explanation
// First we map letters to their indices
// Then we create a new_string variable
// Then we iterate over the string, hashing the index of the letter + the key, and appending that to new_string
// Return the new_string

function caesarCipherEncryptor(string, key) {
  while (key >= 26) key -= 26;

  function hashLetter(start, num) {
    if (start + num > 25) {
      return ALPHABET[start + num - 26];
    } else {
      return ALPHABET[start + num];
    }
  }

  const ALPHABET = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let mapLetterToIndex = new Map();
  for (let i = 0; i < ALPHABET.length; i++) {
    mapLetterToIndex.set(ALPHABET[i], i);
  }

  let new_string = "";

  for (let i = 0; i < string.length; i++) {
    new_string += hashLetter(mapLetterToIndex.get(string[i]), key);
  }

  return new_string;
}
