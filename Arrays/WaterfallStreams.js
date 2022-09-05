function waterfallStreams(array, source) {
  const result = new Array(array[0].length).fill(0)

  const sourceStream = new Stream(array, 0, source, 100)
  const streams = [ sourceStream ]

  while (streams.length) {
    const stream = streams.pop()

    while (stream.canFlowDown()) {
      stream.flowDown()
    }

    if (stream.reachedBottom()) {
      result[stream.getColumn()] += stream.getWaterPercentage()
      continue
    }

    const [leftStream, rightStream] = stream.split()

    while (!leftStream.canFlowDown() && leftStream.canFlowLeft()) {
      leftStream.flowLeft()
    }

    while (!rightStream.canFlowDown() && rightStream.canFlowRight()) {
      rightStream.flowRight()
    }

    if (leftStream.canFlowDown()) {
      streams.push(leftStream)
    }

    if (rightStream.canFlowDown()) {
      streams.push(rightStream)
    }
  }

  return result
}

class Stream {
  constructor(array, row, col, waterPercentage) {
    this.array = array
    this.row = row
    this.col = col
    this.waterPercentage = waterPercentage

    this.height = array.length
    this.width = array[0].length
  }

  split() {
    const leftStream = new Stream(this.array, this.row, this.col, this.waterPercentage / 2)
    const rightStream = new Stream(this.array, this.row, this.col, this.waterPercentage / 2)

    return [leftStream, rightStream]
  }

  getColumn() {
    return this.col
  }

  getWaterPercentage() {
    return this.waterPercentage
  }

  canFlowDown() {
    return this._canFlowToPoint(this.row+1, this.col)
  }

  canFlowLeft() {
    return this._canFlowToPoint(this.row, this.col-1)
  }

  canFlowRight() {
    return this._canFlowToPoint(this.row, this.col+1)
  }

  flowDown() {
    this.row += 1
  }

  flowLeft() {
    this.col -= 1
  }

  flowRight() {
    this.col += 1
  }

  reachedBottom() {
    return this.row === this.height - 1
  }

  _canFlowToPoint(row, col) {
    return(
      row >= 0 && col >= 0 &&
      row < this.height && col < this.width &&
      this.array[row][col] === 0
    )
  }
}

// function waterfallStreams(array, source) {
//   if (array[0].length === 1) {
//     if (
//       array.some((el) => {
//         el[0] === 1;
//       })
//     ) {
//       return [0];
//     } else {
//       return [100];
//     }
//   }
//   let row = 0;
//   let col = source;
//   let isFirst = true;
//   let directions = true;
//   let startingPoints1 = [];
//   let startingPoints2 = [];

//   while (row < array.length) {
//     if (directions) {
//       if (isFirst) {
//         array[row][col] = 100;
//         let last = 100;
//         row++;

//         while (row < array.length && array[row][col] === 0) {
//           array[row][col] = 100;
//           row++;
//         }

//         if (row === array.length) {
//           return array[array.length - 1];
//         } else {
//           startingPoints2.push([row - 1, col]);
//         }

//         isFirst = false;
//       } else {
//         let bottom = 0;

//         for (let i = 0; i < startingPoints1.length; i++) {
//           let point = startingPoints1[i];
//           let tempRow = point[0] + 1;
//           let tempCol = point[1];
//           let last = point[2];

//           while (tempRow < array.length && array[tempRow][tempCol] !== 1) {
//             array[tempRow][tempCol] += last;
//             tempRow++;
//           }

//           if (tempRow === array.length) {
//             bottom++;
//           } else {
//             if (tempRow) startingPoints2.push([tempRow - 1, tempCol]);
//           }
//         }
//         if (bottom === startingPoints1.length) return array[array.length - 1];
//         startingPoints1 = [];
//       }
//     } else {
//       for (let i = 0; i < startingPoints2.length; i++) {
//         let point = startingPoints2[i];
//         let tempRow = point[0];
//         let tempCol = point[1] - 1;
//         let last = array[tempRow][point[1]] / 2;

//         while (
//           tempCol > -1 &&
//           array[tempRow][tempCol] !== 1 &&
//           array[tempRow + 1][tempCol] === 1
//         ) {
//           array[tempRow][tempCol] += last;
//           tempCol--;
//         }

//         if (
//           tempRow + 1 < array.length &&
//           array[tempRow + 1][tempCol] !== 1 &&
//           array[tempRow][tempCol] !== 1 &&
//           array[tempRow][tempCol + 1] !== 1
//         ) {
//           array[tempRow][tempCol] += last;
//           startingPoints1.push([tempRow, tempCol, last]);
//         }

//         tempCol = point[1] + 1;
//         while (
//           tempCol < array[0].length &&
//           array[tempRow][tempCol] !== 1 &&
//           array[tempRow + 1][tempCol] === 1
//         ) {
//           array[tempRow][tempCol] += last;
//           tempCol++;
//         }

//         if (
//           tempRow + 1 < array.length &&
//           array[tempRow + 1][tempCol] !== 1 &&
//           array[tempRow][tempCol] !== 1 &&
//           array[tempRow][tempCol - 1] !== 1
//         ) {
//           array[tempRow][tempCol] += last;
//           startingPoints1.push([tempRow, tempCol, last]);
//         }
//       }

//       startingPoints2 = [];
//     }
//     directions = !directions;
//   }

//   return array[array.length - 1];
// }

let result = waterfallStreams(
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  8
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
