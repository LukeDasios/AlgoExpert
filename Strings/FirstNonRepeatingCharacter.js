// Time Complexity: O(n) - where n is the length of the input string
// Space Complexity: O(1) Because the max # of characters in our string is 26, we can simplify this and just say its O(1) space

function firstNonRepeatingCharacter(string) {
  let map = new Map();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (map.has(char)) {
      map.set(char, [2, 2]);
    } else {
      map.set(char, [1, i]);
    }
  }

  let val = -1;

  for (const [key, value] of map) {
    if (value[0] === 1) {
      val = value[1];
      break;
    }
  }

  return val;
}
