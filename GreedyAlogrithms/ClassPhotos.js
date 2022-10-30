// Time Complexity: O(n) - where n is the length of the input arrays
// Space Complexity: O(1)

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let bool = redShirtHeights[0] > blueShirtHeights[0];

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (bool !== redShirtHeights[i] >= blueShirtHeights[i]) return false;
  }

  return true;
}
