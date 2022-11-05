// Time Complexity: O(n)
// Space Complextiy: O(1)

function validStartingCity(distances, fuel, mpg) {
  let gas = 0,
    min = 0,
    startCity = 0;

  for (let i = 1; i < fuel.length; i++) {
    gas += fuel[i - 1] * mpg - distances[i - 1];
    if (gas < min) {
      startCity = i;
      min = gas;
    }
  }

  return startCity;
}
