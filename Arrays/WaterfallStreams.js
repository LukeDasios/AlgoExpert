function waterfallStreams(array, source) {
  if (array[0].length === 1) {
    if (
      array.some((el) => {
        el[0] === 1;
      })
    ) {
      return [0];
    } else {
      return [100];
    }
  }
  let row = 0;
  let col = source;
  let isFirst = true;
  let directions = true;
  let startingPoints1 = [];
  let startingPoints2 = [];

  while (row < array.length) {
    if (directions) {
      if (isFirst) {
        array[row][col] = 100;
        let last = 100;
        row++;

        while (row < array.length && array[row][col] === 0) {
          array[row][col] = 100;
          row++;
        }

        if (row === array.length) {
          return array[array.length - 1];
        } else {
          startingPoints2.push([row - 1, col]);
        }

        isFirst = false;
      } else {
        for (let i = 0; i < startingPoints1.length; i++) {
          let point = startingPoints1[i];
          let tempRow = point[0];
          let tempCol = point[1];
          let last = point[2];

          while (tempRow < array.length && array[tempRow][tempCol] === 0) {
            array[tempRow][tempCol] += last;
            tempRow++;
          }

          if (tempRow === array.length) {
            row = array.length;
          } else {
            startingPoints2.push([tempRow - 1, tempCol]);
          }
        }
        startingPoints1 = [];
      }
    } else {
      for (let i = 0; i < startingPoints2.length; i++) {
        let point = startingPoints2[i];
        let tempRow = point[0];
        let tempCol = point[1] - 1;
        let last = array[tempRow][point[1]] / 2;

        while (
          tempCol > -1 &&
          array[tempRow][tempCol] !== 1 &&
          array[tempRow + 1][tempCol] === 1
        ) {
          array[tempRow][tempCol] += last;
          tempCol--;
        }

        if (
          array[tempRow + 1][tempCol] === 0 &&
          array[tempRow][tempCol + 1] !== 1
        ) {
          startingPoints1.push([tempRow, tempCol, last]);
        }

        tempCol = point[1] + 1;
        while (
          tempCol < array.length &&
          array[tempRow][tempCol] !== 1 &&
          array[tempRow + 1][tempCol] === 1
        ) {
          array[tempRow][tempCol] += last;
          tempCol++;
        }

        if (
          array[tempRow + 1][tempCol] === 0 &&
          array[tempRow][tempCol--] !== 1
        ) {
          startingPoints1.push([tempRow, tempCol, last]);
        }
      }

      startingPoints2 = [];
    }
    directions = !directions;
  }

  return array[array.length - 1];
}

let result = waterfallStreams(
  [
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  3
);

console.log(result);

// Passed the first test
// function waterfallStreams(array, source) {
//   let row = 0;
//   let col = source
//   let isFirst = true
//   let directions = true
//   let startingPoints1 = []
//   let startingPoints2 = []

//   while (row < array.length) {
//     if (directions) { //move downwards
//       if (isFirst) {
//         array[row][col] = 100
//         let last = 100
//         row++

//         while (row < array.length && array[row][col] === 0) {
//           array[row][col] = 100
//           row++
//         }

//         if (row === array.length) { // reached the bottom
//           row = tempRow
//         } else {
//           startingPoints2.push([row-1, col])
//         }

//         isFirst = false
//       } else {
//         for (let i = 0; i < startingPoints1.length; i++) {
//           let point = startingPoints1[i]
//           let tempRow = point[0]
//           let tempCol = point[1]
//           let last = point[2]

//           while (tempRow < array.length && array[tempRow][tempCol] === 0) {
//             array[tempRow][tempCol] = last
//             tempRow++
//           }

//           if (tempRow === array.length) {
//             row = tempRow
//           } else {
//             startingPoints2.push([tempRow-1, tempCol])
//           }
//         }
//         startingPoints1 = []
//       }
//     } else {
//       for (let i = 0; i < startingPoints2.length; i++) {
//         let point = startingPoints2[i]
//         let tempRow = point[0]
//         let tempCol = point[1] - 1
//         let last = array[tempRow][point[1]] / 2

//         while (tempCol > -1 && array[tempRow+1][tempCol] === 1) {
//           array[tempRow][tempCol] = last
//           tempCol--
//         }

//         if (array[tempRow+1][tempCol] === 0) {
//             // array[tempRow][tempCol] = last
//             startingPoints1.push([tempRow, tempCol, last])
//         } else if (tempCol === 0) {

//         }

//         tempCol = point[1] + 1
//         while (tempCol < array.length && array[tempRow+1][tempCol] === 1) {
//           array[tempRow][tempCol] = last
//           tempCol++
//         }

//         if (array[tempRow+1][tempCol] === 0) { // can fall down
//             // array[tempRow][tempCol] = last
//             startingPoints1.push([tempRow, tempCol, last])
//         } else if (tempCol === array.length) { // Reached the right wall without being able to fall down

//         }
//       }

//       startingPoints2 = []
//     }
//     directions = !directions
//   }

//   return array[array.length - 1]
// }