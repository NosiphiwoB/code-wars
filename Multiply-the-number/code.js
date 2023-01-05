function multiply (number) {
  return number * 5 ** (Math.abs(number).toString()).length

}

// let answer= multiply(200)
console.log(multiply(-3))