// Time Complexity: O(n) - where n is the length of the buildings array
// Space Complexity: O(n)

function largestRectangleUnderSkyline(buildings) {
  if (buildings.length === 0) return 0;
  let max =
    buildings[buildings.indexOf(Math.min(...buildings))] * buildings.length;

  let i = 0;
  while (i < buildings.length) {
    let temp = buildings[i];
    let j = i + 1;
    let unique = j;
    let first = true;

    while (buildings[j] >= temp) {
      if (first && buildings[j] !== temp) {
        unique = j;
        first = false;
      }
      j++;
    }

    max = Math.max(max, temp * (j - i));
    i = unique;
  }

  return max;
}
