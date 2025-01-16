/*
Lab 3 - simple TDD with math functions
*/

//add function
const add = (a, b) => {
  return a + b;
};

//subtract function
const subtract = (a, b) => {
  return a - b;
};

//multiply function
const multiply = (a, b) => {
  return a * b;
};

//divide function
const divide = (a, b) => {
  return a / b;
};

//modulas function
const modulas = (a, b) => {
  return a % b;
};

//power function
const power = (a, b) => {
  return a ** b;
};

//square function
const square = (a) => {
  return a ** 2;
};

//floor function
const floor = (a) => {
  return Math.floor(a);
};

//ceiling function
const ceiling = (a) => {
  return Math.ceil(a);
};

////////////////////////////////////////

//export functions
//Please do not change the following line.
export {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  square,
  floor,
  ceiling,
};

//NOTE: if export doesn't work, use module.exports = {add, subtract, multiply, divide, modulas, power, square, floor, ceiling};
