// Time Complexity: O(n + m) - Where n is the length of the characters string, and m is the length of the documents string
// Space Complexity: O(c) - where c is the number of unique characters in the characters string

function generateDocument(characters, document) {
  let map = new Map()
  for (let i = 0; i < characters.length; i++) {
    let char = characters[i]

    if(map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let i = 0; i < document.length; i++) {
    let char = document[i]

    if (map.has(char)) {
      if (map.get(char) > 0) {
        map.set(char, map.get(char) - 1)
      } else {
        return false
      }
    } else {
      return false
    }
  }

  return true;
}