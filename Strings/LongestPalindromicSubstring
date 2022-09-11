// Time Complexity: O(n) - Where n is the length of the input string
// Space complexity: O(n)

function longestPalindromicSubstring(string) {
  if (string.length === 1) return string;
  let max = -Infinity;
  let palindrome = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === string[i + 1]) {
      if (max < 3) {
        max = 3;
        palindrome = `${string[i - 1]}${string[i]}${string[i + 1]}`;
      }
      let j = i - 2,
        x = i + 2;
      while (j > -1 && x < string.length && string[j] === string[x]) {
        if (x - j > max) {
          max = x - j;
          let str = "";
          for (let z = j; z <= x; z++) {
            str += string[z];
          }

          palindrome = str;
        }
        j--;
        x++;
      }
    }
    if (string[i - 1] === string[i]) {
      if (max < 2) {
        max = 2;
        palindrome = `${string[i - 1]}${string[i]}`;
      }
      let j = i - 2,
        x = i + 1;
      while (j > -1 && x < string.length && string[j] === string[x]) {
        if (x - j > max) {
          max = x - j;
          let str = "";
          for (let z = j; z <= x; z++) {
            str += string[z];
          }

          palindrome = str;
        }
        j--;
        x++;
      }
    }
  }

  return palindrome;
}
