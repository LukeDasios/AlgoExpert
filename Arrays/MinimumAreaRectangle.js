function minimumAreaRectangle(points) {
  let hashMap = new Map();

  for (let i = 0; i < points.length; i++) {
    let x = points[0];
    let y = points[1];

    if (hasMap.has(x)) {
      hashMap.set(x, hashMap.get(x).push(y));
    } else {
      hashMap.set(x, [y]);
    }
  }

  return 0;
}
