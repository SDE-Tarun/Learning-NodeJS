const Addition = require('./file1');

// Object we exported in our file that we are using in index.js
console.log(Addition);

// First Way -
// [Function: add] - Defination of function/value of the key.
// console.log(Addition.Add);

// Second Way -
// console.log(Addition.add);

// Third Way -
console.log(Addition.add);

// First Way -
// NaN because we are not passing any parameters/arguments
// console.log(Addition.Add());

// Second Way -
// console.log(Addition.add());

// Third Way -
console.log(Addition.add());

// First Way -
// Function calling here so that it is giving output.
// console.log(Addition.Add(1,2));

// Second Way -
// console.log(Addition.add(1,2));

// Third Way -
console.log(Addition.add(1,2));

// NOTE - We can access file in the same folder without adding (dot) / . extention.

// const Multiplication = require('./file2');

// console.log(Multiplication);

// console.log(Multiplication.Multiply);

// console.log(Multiplication.Multiply());

// console.log(Multiplication.Multiply(3,4));

// Fourth Way -
const Division = require('./file2');

console.log(Division);

console.log(Division(4,2));

// Require Directory

const Folder = require('../requireDirectory');

console.log(Folder);























