function lineThroughPoints(points) {
  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }

    isEqual(point) {
      return this.x === point.x && this.y === point.y
    }
  }

  class Line {
    constructor(m, n, vAsym = undefined) {
      this.m = m
      this.n = n
      this.verticalAsymptote = vAsym
    }

    checkPoint(point) {
      //y = mx + n
      if (this.verticalAsymptote) {
        return point.x === this.verticalAsymptote
      }

      return point.y === ((this.m * point.x) + this.n)
    }
  }

  function makeLine(point1, point2) {
    let m, n
    let verticalAsymptote

    if (point2.x - point1.x !== 0) {
      m = (point2.y - point1.y) / (point2.x - point1.x)
    } else {
      verticalAsymptote = point2.x
    }

    n = point1.y - (m * point1.x)

    return new Line(m, n, verticalAsymptote)
  }

  let lines = []
  let myPoints = []
  for (let i of points) {
    myPoints.push(new Point(i[0], i[1]))
  }

  for (let point in myPoints) {
    for (let point2 = point; point2 < myPoints.length; point2++) {
      if (myPoints[point].isEqual(myPoints[point2])) continue
      lines.push(makeLine(myPoints[point], myPoints[point2]))
    }
  }

  let max_points = 1
  for (let line of lines) {
    let num_of_points = 0
    for (let point of myPoints) {
      if (line.checkPoint(point)) num_of_points++
    }
    max_points = Math.max(max_points, num_of_points)
  }

  return max_points
}