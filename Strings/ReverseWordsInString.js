// Time Complexity: O(n) - where n is the length of the input string
// Space Complexity: O(n)

function reverseWordsInString(string) {
  let new_string = "";

  let i = string.length - 1;
  while (i > -1) {
    if (string[i] === " ") {
      new_string += " ";
      i--;
    } else {
      let j = i;
      let temp = "";
      while (j > -1 && string[j] !== " ") {
        temp += string[j];
        j--;
      }

      new_string += reverse(temp);
      i = j;
    }
  }

  return new_string;
}

function reverse(string) {
  let new_string = "";

  for (let i = string.length - 1; i > -1; i--) {
    new_string += string[i];
  }

  return new_string;
}

let result = reverseWordsInString("AlgoExpert is the best!");
console.log(result);
