// Time Complextiy: O(n)
// Space Complexity: O(n)

function maxSubsetSumNoAdjacent(array) {
  if (array.length <= 1) return array.length;
  let arr = new Array(array.length);
  arr[0] = array[0];
  arr[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    let temp1 = arr[i - 2] + array[i],
      temp2 = arr[i - 1];
    if (temp1 > temp2) {
      arr[i] = temp1;
    } else arr[i] = temp2;
  }

  return arr.pop();
}
