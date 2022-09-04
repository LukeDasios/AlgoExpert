function waterfallStreams(array, source) {
  let row = 0;
  let col = source;
  let directions = true;
  array[row][col] = 100;
  let startingPoints = [[row + 1, col]];

  while (row < array.length) {
    if (directions) {
      //move downwards
      for (let i = 0; i < startingPoints.length; i++) {
        let point = startingPoints[i];
        let tempRow = point[0];
        let tempCol = point[1];
        let last = array[tempRow - 1][tempCol] / 2;

        while (
          tempRow < array.length &&
          [0, 100].includes(array[tempRow][tempCol])
        ) {
          array[tempRow][tempCol] = last;
          tempRow++;
        }

        if (tempRow === array.length) {
          // reached the bottom
          // return the last row
          return array[tempRow];
        } else if (array[tempRow][tempCol] === 1) {
          // reached a deadend
          startingPoints.push([tempRow, tempCol]);
        }

        row = 1000;
      }

      startingPoints.push([row, col]);
    } else {
      // Move left and right (if possible)
      for (let i = 0; i < startingPoints.length; i++) {
        let point = startingPoints[i];
        let tempRow = point[0];
        let tempCol = point[1] - 1;
        let last = startingPoints[tempRow][tempCol] / 2;

        // Move left from the point
        while (tempCol > -1 && array[tempRow + 1][tempCol] === 1) {
          array[tempRow][tempCol] = last;
          tempCol--;
        }

        if (array[tempRow + 1][tempCol] === 0) {
          // can fall down
          startingPoints.push([tempRow][tempCol]);
        } else if (tempCol === 0) {
          // Reached the left wall without being able to fall down
        }

        // Move right from the point
        tempCol = point[1] + 1;
        while (tempCol < array.length && array[tempRow + 1][tempCol] === 1) {
          array[tempRow][col] = last;
        }

        if (array[tempRow + 1][tempCol] === 0) {
          // can fall down
          startingPoints.push([tempRow][tempCol]);
        } else if (tempCol === array.length) {
          // Reached the right wall without being able to fall down
        }
      }
    }
    directions = !directions;
  }

  return array[array.length - 1];
}
