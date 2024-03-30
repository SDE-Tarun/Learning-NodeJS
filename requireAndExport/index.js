const Addition  = require('./file1');

// Object we exported in our file that we are using in index.js
console.log(Addition);

// [Function: add] - Defination of function/value of the key.
console.log(Addition.Add);

// NaN because we are not passing any parameters/arguments
// console.log(Addition.Add());

// Function calling here so that it is giving output.
console.log(Addition.Add(1,2));

// NOTE - We can access file in the same folder without adding (dot) / . extention.

const Multiplication = require('./file2');

console.log(Multiplication);

console.log(Multiplication.Multiply);

console.log(Multiplication.Multiply());

console.log(Multiplication.Multiply(3,4));














