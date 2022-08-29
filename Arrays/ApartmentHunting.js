// function apartmentHunting(blocks, reqs) {
//   let min = Infinity;
//   let final = [];

//   for (let i = 0; i < blocks.length; i++) {
//     let max = -Infinity;
//     for (let j = 0; j < reqs.length; j++) {
//       let min = Infinity;
//       let loc = reqs[j];

//       for (let z = 0; z < blocks.length; z++) {
//         if (blocks[z][loc] === true) min = Math.min(min, Math.abs(i - z));
//       }

//       max = Math.max(max, min);
//     }
//     final.push(max);
//   }

//   return final[Math.min(...final)];
// }

// Time Complexity: O(br)
// Space Complexity: O(br)

// Where b is the number of blocks and r is the number of requirements

function apartmentHunting(blocks, reqs) {
  for (const building of reqs) {
    let distance = Infinity

    // Left to right walk
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i][building]) {
        distance = 0
      } else distance++

      blocks[i][building] = distance
    }

    // Right to left walk
    for (let i = blocks.length - 2; i >= 0; i--) {
      blocks[i][building] = Math.min(blocks[i][building], blocks[i+1][building] + 1)
    }
  }

  let optimalblockIndex = 0
  let optimalBlockDistance = Infinity

  for (let i = 0; i < blocks.length; i++) {
    let maxDistance = 0

    for (const building of reqs) {
      maxDistance = Math.max(maxDistance, blocks[i][building])
    }

    if (maxDistance < optimalBlockDistance) {
      optimalBlockDistance = maxDistance
      optimalblockIndex = i
    }
  }

  return optimalblockIndex
}

