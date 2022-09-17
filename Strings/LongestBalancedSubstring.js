// Time Complexity: O(n)
// Space Complexity: O(1)

function longestBalancedSubstring(string) {
  let maxLength = 0,
    openingCount = 0,
    closingCount = 0;

  // Traverse from left to right
  for (const char of string) {
    if (char === "(") {
      openingCount++;
    } else {
      closingCount++;
    }

    if (openingCount === closingCount) {
      maxLength = Math.max(maxLength, closingCount * 2);
    } else if (closingCount > openingCount) {
      openingCount = 0;
      closingCount = 0;
    }
  }

  openingCount = 0;
  closingCount = 0;

  // Traverse from right to left
  for (let i = string.length - 1; i > -1; i--) {
    let char = string[i];

    if (char === "(") {
      openingCount++;
    } else {
      closingCount++;
    }

    if (openingCount === closingCount) {
      maxLength = Math.max(maxLength, openingCount * 2);
    } else if (openingCount > closingCount) {
      openingCount = 0;
      closingCount = 0;
    }
  }

  return maxLength;
}
