function twoNumberSum(array, targetSum) {
  let map = new Map();

  array.forEach((el) => map.set(el, 1));

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (el != targetSum - el && map.has(targetSum - el))
      return [el, targetSum - el];
  }

  return [];
}
