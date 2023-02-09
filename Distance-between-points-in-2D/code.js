function distanceBetweenPoints(a, b) {
    const y= a.y - b.y;
    const x= a.x - b.x;
    return Math.sqrt(y**2 + x**2)
  }