// Time Complexity: O(c1 + c2)
// Space Complexity: O(c1 + c2)
// Where c# represent the # of meetings in each individuals calendar

function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  let dailyBounds1InMinutes = [],
    dailyBounds2InMinutes = [];

  for (let i = 0; i < dailyBounds1.length; i++) {
    let temp1 = dailyBounds1[i],
      temp2 = dailyBounds2[i];
    let minutes = 0;

    if (temp1.length === 4) {
      minutes += parseInt(temp1[0]) * 60;

      if (temp1[2] === "0") {
        minutes += parseInt(temp1[3]);
      } else {
        minutes += parseInt(temp1[2] + temp1[3]);
      }
    } else {
      minutes += parseInt(temp1[0] + temp1[1]) * 60;

      if (temp1[3] === "0") {
        minutes += parseInt(temp1[4]);
      } else {
        minutes += parseInt(temp1[3] + temp1[4]);
      }
    }

    dailyBounds1InMinutes.push(minutes);
    minutes = 0;

    if (temp2.length === 4) {
      minutes += parseInt(temp2[0]) * 60;

      if (temp2[2] === "0") {
        minutes += parseInt(temp2[3]);
      } else {
        minutes += parseInt(temp2[2] + temp2[3]);
      }
    } else {
      minutes += parseInt(temp2[0] + temp2[1]) * 60;

      if (temp2[3] === "0") {
        minutes += parseInt(temp2[4]);
      } else {
        minutes += parseInt(temp2[3] + temp2[4]);
      }
    }

    dailyBounds2InMinutes.push(minutes);
  }

  let boundsInMinutes = [
    Math.max(dailyBounds1InMinutes[0], dailyBounds2InMinutes[0]),
    Math.min(dailyBounds1InMinutes[1], dailyBounds2InMinutes[1]),
  ];

  if (calendar1.length === 0 && calendar2.length === 0) {
    //convert boundsInMinutes to calendar times then return it
    let time1 = boundsInMinutes[0];
    let time2 = boundsInMinutes[1];

    let hours = 0;
    while (time1 >= 60) {
      hours++;
      time1 -= 60;
    }

    if (time1 <= 9) {
      boundsInMinutes[0] = `${hours}:0${time1}`;
    } else {
      boundsInMinutes[0] = `${hours}:${time1}`;
    }

    hours = 0;
    while (time2 >= 60) {
      hours++;
      time2 -= 60;
    }

    if (time2 <= 9) {
      boundsInMinutes[1] = `${hours}:0${time2}`;
    } else {
      boundsInMinutes[1] = `${hours}:${time2}`;
    }

    return [boundsInMinutes];
  }

  // convert the strings to numbers
  let calendar1InMinutes = [];

  for (let i = 0; i < calendar1.length; i++) {
    let temp = calendar1[i];
    let start = temp[0];
    let end = temp[1];
    let timeBracket = [];
    let minutes = 0;

    if (start.length === 4) {
      minutes += parseInt(start[0]) * 60;

      if (start[2] === "0") {
        minutes += parseInt(start[3]);
      } else {
        minutes += parseInt(start[2] + start[3]);
      }
    } else {
      minutes += parseInt(start[0] + start[1]) * 60;

      if (start[3] === "0") {
        minutes += parseInt(start[4]);
      } else {
        minutes += parseInt(start[3] + start[4]);
      }
    }

    timeBracket.push(minutes);
    minutes = 0;

    if (end.length === 4) {
      minutes += parseInt(end[0]) * 60;

      if (end[2] === "0") {
        minutes += parseInt(end[3]);
      } else {
        minutes += parseInt(end[2] + end[3]);
      }
    } else {
      minutes += parseInt(end[0] + end[1]) * 60;

      if (end[3] === "0") {
        minutes += parseInt(end[4]);
      } else {
        minutes += parseInt(end[3] + end[4]);
      }
    }

    timeBracket.push(minutes);
    calendar1InMinutes.push(timeBracket);
  }

  let calendar2InMinutes = [];

  for (let i = 0; i < calendar2.length; i++) {
    let temp = calendar2[i];
    let start = temp[0];
    let end = temp[1];
    let timeBracket = [];
    let minutes = 0;

    if (start.length === 4) {
      minutes += parseInt(start[0]) * 60;

      if (start[2] === "0") {
        minutes += parseInt(start[3]);
      } else {
        minutes += parseInt(start[2] + start[3]);
      }
    } else {
      minutes += parseInt(start[0] + start[1]) * 60;

      if (start[3] === "0") {
        minutes += parseInt(start[4]);
      } else {
        minutes += parseInt(start[3] + start[4]);
      }
    }

    timeBracket.push(minutes);
    minutes = 0;

    if (end.length === 4) {
      minutes += parseInt(end[0]) * 60;

      if (end[2] === "0") {
        minutes += parseInt(end[3]);
      } else {
        minutes += parseInt(end[2] + end[3]);
      }
    } else {
      minutes += parseInt(end[0] + end[1]) * 60;

      if (end[3] === "0") {
        minutes += parseInt(end[4]);
      } else {
        minutes += parseInt(end[3] + end[4]);
      }
    }

    timeBracket.push(minutes);
    calendar2InMinutes.push(timeBracket);
  }

  busyTimeSlots1 = mergeOverlappingIntervals(calendar1InMinutes);
  busyTimeSlots2 = mergeOverlappingIntervals(calendar2InMinutes);

  // Anything that is not busy time is free time
  let freeTimeSlots1 = [];

  if (boundsInMinutes[0] + meetingDuration <= busyTimeSlots1[0][0]) {
    freeTimeSlots1.push([boundsInMinutes[0], busyTimeSlots1[0][0]]);
  }

  for (let i = 1; i < busyTimeSlots1.length; i++) {
    if (busyTimeSlots1[i][0] >= busyTimeSlots1[i - 1][1] + meetingDuration) {
      freeTimeSlots1.push([busyTimeSlots1[i - 1][1], busyTimeSlots1[i][0]]);
    }
  }

  if (
    busyTimeSlots1[busyTimeSlots1.length - 1][1] + meetingDuration <=
    boundsInMinutes[1]
  ) {
    freeTimeSlots1.push([
      busyTimeSlots1[busyTimeSlots1.length - 1][1],
      boundsInMinutes[1],
    ]);
  }

  // Anything that is not busy time is free time
  let freeTimeSlots2 = [];

  if (boundsInMinutes[0] + meetingDuration <= busyTimeSlots2[0][0]) {
    freeTimeSlots2.push([boundsInMinutes[0], busyTimeSlots2[0][0]]);
  }

  for (let i = 1; i < busyTimeSlots2.length; i++) {
    if (busyTimeSlots2[i][0] >= busyTimeSlots2[i - 1][1] + meetingDuration) {
      freeTimeSlots2.push([busyTimeSlots2[i - 1][1], busyTimeSlots2[i][0]]);
    }
  }

  if (
    busyTimeSlots2[busyTimeSlots2.length - 1][1] + meetingDuration <=
    boundsInMinutes[1]
  ) {
    freeTimeSlots2.push([
      busyTimeSlots2[busyTimeSlots2.length - 1][1],
      boundsInMinutes[1],
    ]);
  }

  // See what free time slots are overlapping
  let interlappingTimeSlots = [];
  let i = 0;
  while (i < freeTimeSlots1.length) {
    let start1 = freeTimeSlots1[i][0];
    let end1 = freeTimeSlots1[i][1];

    let j = 0;
    while (j < freeTimeSlots2.length) {
      let start2 = freeTimeSlots2[j][0];
      let end2 = freeTimeSlots2[j][1];

      if (
        (start2 >= start1 && start2 <= end1) ||
        (end1 >= start2 && end2 <= end2)
      ) {
        let newStart = Math.max(start1, start2);
        let newEnd = Math.min(end1, end2);

        if (newEnd - newStart >= meetingDuration) {
          interlappingTimeSlots.push([newStart, newEnd]);
        }

        j++;
      } else {
        j = freeTimeSlots2.length;
      }
    }
    i++;
  }

  // revert the interlappingTimeSlots into strings
  for (let i = 0; i < interlappingTimeSlots.length; i++) {
    let slot = interlappingTimeSlots[i];
    let time1 = slot[0];
    let time2 = slot[1];

    let hours = 0;
    while (time1 >= 60) {
      hours++;
      time1 -= 60;
    }

    if (time1 <= 9) {
      interlappingTimeSlots[i][0] = `${hours}:0${time1}`;
    } else {
      interlappingTimeSlots[i][0] = `${hours}:${time1}`;
    }

    hours = 0;
    while (time2 >= 60) {
      hours++;
      time2 -= 60;
    }

    if (time2 <= 9) {
      interlappingTimeSlots[i][1] = `${hours}:0${time2}`;
    } else {
      interlappingTimeSlots[i][1] = `${hours}:${time2}`;
    }
  }

  return interlappingTimeSlots;
}

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  let final = [array[0]];

  for (let i = 1; i < array.length; i++) {
    let temp = final[final.length - 1][1];
    if (temp >= array[i][0]) {
      final[final.length - 1][1] = Math.max(temp, array[i][1]);
    } else {
      final.push(array[i]);
    }
  }

  return final;
}

let result = calendarMatching(
  [],
  ["9:00", "20:00"],
  [],
  ["10:00", "18:30"],
  30
);

console.log("Actual Output:");
console.log(result);
console.log("\n");
console.log("Expected Output:");
console.log([["11:30", "12:00"], ["15:00, 16:00"], ["18:00", "18:30"]]);
