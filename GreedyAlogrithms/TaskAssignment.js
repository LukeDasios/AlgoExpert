// Time Complexity: O(nlong(n)) - where n is the length of the input array 'tasks'
// Space Complexity: O(n) - where m is the max number of duplicates in the 'tasks' array

function taskAssignment(k, tasks) {
  let map = new Map();
  for (let i = 0; i < tasks.length; i++) {
    let num = tasks[i];

    if (map.has(num)) {
      map.set(num, [...map.get(num), i]);
    } else {
      map.set(num, [i]);
    }
  }
  tasks.sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < tasks.length / 2; i++) {
    arr.push([
      map.get(tasks[i]).pop(),
      map.get(tasks[tasks.length - 1 - i]).pop(),
    ]);
  }

  return arr;
}
