// Time Complexity: O(n) - where n is the length of the buildings array
// Space Complexity: O(n)

function sunsetViews(buildings, direction) {
  if (buildings.length === 0) return [];
  let arr = [];
  let biggest = 0;

  if (direction === "EAST") {
    arr.push(buildings.length - 1);
    biggest = buildings[buildings.length - 1];
    for (let i = buildings.length - 2; i > -1; i--) {
      if (biggest < buildings[i]) {
        biggest = buildings[i];
        arr.push(i);
      }
    }
  } else {
    arr.push(0);
    biggest = buildings[0];

    for (let i = 0; i < buildings.length; i++) {
      if (biggest < buildings[i]) {
        biggest = buildings[i];
        arr.push(i);
      }
    }
  }

  return arr.sort((a, b) => a - b);
}
