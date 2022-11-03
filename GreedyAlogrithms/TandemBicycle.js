// Time Complexity: O(n) - where n is the length of the input array
// Space Complexity: O(1)

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let max = 0,
    min = 0,
    len = blueShirtSpeeds.length;
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  if (fastest) {
    for (let i = 0; i < len; i++) {
      max += Math.max(redShirtSpeeds[len - 1 - i], blueShirtSpeeds[i]);
    }
    return max;
  } else {
    for (let i = 0; i < len; i++) {
      min += Math.max(
        redShirtSpeeds[len - 1 - i],
        blueShirtSpeeds[len - 1 - i]
      );
    }
    return min;
  }
}
