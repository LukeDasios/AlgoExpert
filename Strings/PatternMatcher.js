// Time Complexity: O(n^2 + m) - where n is the length of the sring and m is the length of the pattern
// Space Complexity: O(n + m)

function patternMatcher(pattern, string) {
  if (pattern.length > string.length) return [];

  let newPattern = getNewPattern(pattern);
  let didSwitch = newPattern[0] != pattern[0];
  let counts = getCounts(newPattern);
  let firstYPos = getFirstYPos(newPattern);

  if (counts["y"]) {
    for (let lenOfX = 1; lenOfX < string.length; lenOfX++) {
      let lenOfY = (string.length - lenOfX * counts["x"]) / counts["y"];
      if (lenOfY <= 0 || lenOfY % 1 !== 0) continue;
      lenOfY = parseInt(lenOfY);
      let yIdx = firstYPos * lenOfX;
      let x = string.substring(0, lenOfX);
      let y = string.substring(yIdx, yIdx + lenOfY);

      let potentialMatch = "";
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "x") {
          if (didSwitch) {
            potentialMatch += y;
          } else {
            potentialMatch += x;
          }
        } else {
          if (didSwitch) {
            potentialMatch += x;
          } else {
            potentialMatch += y;
          }
        }
      }

      if (string === potentialMatch) {
        if (didSwitch) {
          return [y, x];
        } else {
          return [x, y];
        }
      }
    }
  } else {
    let lenOfX = string.length / counts["x"];
    if (lenOfX % 1 === 0) {
      lenOfX = parseInt(lenOfX);
      let x = string.substring(0, lenOfX);

      let potentialMatch = "";
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "x") {
          if (didSwitch) {
            potentialMatch += "";
          } else {
            potentialMatch += x;
          }
        } else {
          if (didSwitch) {
            potentialMatch += x;
          } else {
            potentialMatch += "";
          }
        }
      }

      if (string === potentialMatch) {
        if (didSwitch) {
          return ["", x];
        } else {
          return [x, ""];
        }
      }
    }
  }

  return [];
}

function getNewPattern(pattern) {
  if (pattern[0] === "y") {
    let new_pattern = "";

    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === "y") {
        new_pattern += "x";
      } else {
        new_pattern += "y";
      }
    }

    return new_pattern;
  } else {
    return pattern;
  }
}

function getCounts(pattern) {
  let counts = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];

    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

function getFirstYPos(pattern) {
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "y") return i;
  }
}
