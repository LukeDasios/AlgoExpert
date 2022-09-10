// Time Complexity: O(n) - where n is the length of the input string
// Space Complexity: O(n)

function runLengthEncoding(string) {
  let new_string = "";

  let i = 0;
  while (i < string.length) {
    let count = 1;
    let temp = string[i];
    let j = i + 1;
    let last = j;
    while (j < string.length && count < 9) {
      if (string[j] === temp) {
        j++;
        count++;
        last = j;
      } else {
        last = j;
        j = string.length;
      }
    }

    new_string += `${count}${temp}`;
    i += last - i;
  }

  return new_string;
}
