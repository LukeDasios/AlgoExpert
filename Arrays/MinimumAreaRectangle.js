function minimumAreaRectangle(points) {
  const pointsSet = new Set()
  let minArea = Infinity

  for (const point of points) {
    pointsSet.add(point.toString())
  }

  for (const p1 of points) {
    for (const p2 of points) {
      if (p1[0] !== p2[0] && p1[1] !== p2[1]) {
        minArea = Math.min(minArea, getArea(p1, p2))
      }
    }
  }

  function getArea(p1, p2) {
    const p3 = [p1[0], p2[1]]
    const p4 = [p2[0], p1[1]]

    if (pointsSet.has(p3.toString()) && pointsSet.has(p4.toString())) {
      return Math.abs(p1[0] - p2[0]) * Math.abs(p1[1] - p2[1])
    } else return Infinity
  }

  return minArea === Infinity ? 0 : minArea
}
