// Time Complexity: O(n * n)
// Space Complexity: O(n)
// Naive Solution

function validIPAddresses(string) {
  let final = [];
  let first_string = "";
  let len = string.length + 3;

  for (let i = 0; i < 3; i++) {
    first_string += string[i];

    if (parseInt(first_string) <= 255) {
      let temp = first_string + ".";
      let second_string = "";

      for (let j = i + 1; j < i + 4; j++) {
        second_string += string[j];

        if (parseInt(second_string) <= 255) {
          let temp2 = second_string + ".";
          let third_string = "";

          for (let x = j + 1; x < j + 4; x++) {
            third_string += string[x];

            if (parseInt(third_string) <= 255) {
              let temp3 = third_string + ".";
              let fourth_string = "";

              for (let z = x + 1; z < x + 4; z++) {
                fourth_string += string[z];
                let master_string = `${temp}${temp2}${temp3}${fourth_string}`;

                if ((temp[0] === "0" && temp.length === 2) || temp[0] !== "0") {
                  if (
                    (temp2[0] === "0" && temp2.length === 2) ||
                    temp2[0] !== "0"
                  ) {
                    if (
                      (temp3[0] === "0" && temp3.length === 2) ||
                      temp3[0] !== "0"
                    ) {
                      if (
                        (fourth_string[0] === "0" &&
                          fourth_string.length === 1) ||
                        fourth_string[0] !== "0"
                      ) {
                        if (
                          parseInt(fourth_string) <= 255 &&
                          master_string.length === len
                        ) {
                          final.push(master_string);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return final;
}
