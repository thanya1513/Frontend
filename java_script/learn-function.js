// functions: it is used to perform a specific task //
// syntax: function function_name(){} //

// function declaration //
function achieve() {
  console.log("i need to achieve like elon mask");
}
achieve();

// sum of two numbers // function with arguments(num1 and num2)
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(2, 3);

// function with return statement //
// while using the return value we need to store that response in a variable and then need to print that variable //
function sumTwo(num1, num2) {
  return num1 + num2;
}
let sumOfTwoNumber = sumTwo(30, 40);
console.log("i have a sum", sumOfTwoNumber);

// Function expression //
/*
function goal(){
} 
instead of writing like this we write this in a below expression that is called function expression
*/
let goal = function () {
  console.log("i have a goal");
};
goal();

let multiply = function (num1, num2) {
  console.log(num1 * num2);
};
multiply(5, 2);

let multi = function (num1, num2) {
  return num1 * num2;
};
let final = multi(5, 5);
console.log("value of multiply is", final);
