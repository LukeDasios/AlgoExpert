function tournamentWinner(competitions, results) {
  let map = new Map();
  let max = 0;
  let name = "";

  for (let i = 0; i < results.length; i++) {
    if (results[i] != 0) {
      let temp = competitions[i][0];

      if (!map.has(temp)) {
        map.set(temp, 3);

        if (map.get(temp) > max) {
          max = map.get(temp);
          name = temp;
        }
      } else {
        map.set(temp, map.get(temp) + 3);

        if (map.get(temp) > max) {
          max = map.get(temp);
          name = temp;
        }
      }
    } else {
      let temp = competitions[i][1];

      if (!map.has(temp)) {
        map.set(temp, 3);

        if (map.get(temp) > max) {
          max = map.get(temp);
          name = temp;
        }
      } else {
        map.set(temp, map.get(temp) + 3);

        if (map.get(temp) > max) {
          max = map.get(temp);
          name = temp;
        }
      }
    }
  }

  return name;
}
