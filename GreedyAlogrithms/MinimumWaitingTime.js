// Time Complextiy: O(n)
// Space Complexity: O(1)

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let wt = 0,
    duration = 0;

  for (let i = 0; i < queries.length; i++) {
    wt += duration;
    duration += queries[i];
  }

  return wt;
}
