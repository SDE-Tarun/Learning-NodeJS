function multiply(a, b) {
  return a * b;
}

// module.exports = {
//     'Multiply': multiply
// }

// Fourth Way -
// We can direcly export a function with the same name.

function divide(a, b) {
  return a / b;
}
module.exports = divide;
