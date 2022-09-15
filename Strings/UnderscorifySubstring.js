// Time Complexity: O(n * m) - where n is the length of the string and m is the length of the substring
// Space Complexity: O(n)

function underscorifySubstring(string, substring) {
  let new_string = "";

  let i = 0;
  while (i < string.length) {
    if (string.substring(i, i + substring.length) === substring) {
      if (new_string[new_string.length - 1] === "_") {
        new_string = new_string.slice(0, new_string.length - 1);
      } else {
        new_string += "_";
      }
      let j = i;
      let len = i + substring.length;
      while (j < len) {
        new_string += string[j];
        if (string.substring(j, j + substring.length) === substring) {
          len = j + substring.length;
        }
        j++;
      }
      i = j;
      new_string += "_";
    } else {
      new_string += string[i];
      i++;
    }
  }

  return new_string;
}
