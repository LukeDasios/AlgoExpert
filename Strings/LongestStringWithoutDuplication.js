function longestSubstringWithoutDuplication(string) {
  let lastSeen = new Map();
  let longest = [0, 1];
  let startIndex = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (lastSeen.has(char)) {
      startIndex = Math.max(startIndex, lastSeen.get(char) + 1);
    }
    if (longest[1] - longest[0] < i + 1 - startIndex) {
      longest = [startIndex, i + 1];
    }

    lastSeen.set(char, i);
  }

  return string.substring(longest[0], longest[1]);
}
