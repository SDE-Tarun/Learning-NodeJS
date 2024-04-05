function add(a, b) {
  return a + b;
}

// 1. First way to use this file in index.js file
// module.exports = {
//     'Add': add
// }

// 2. Second way to use this file in index.js file
// module.exports = {
//     add
// }

// CASE-1 : In this we need to have same names for function name, key name and value name.
// function AddPartTwo(a, b) {
//     return a + b;
// }

// module.exports = {
//    AddPartTwo
// }

// 3. Third way to use this file in index.html
// Here, we are adding a key directly to module.exports object
module.exports.add = add;

// module.exports is an object
// console.log(typeof module.exports);
