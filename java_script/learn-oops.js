// class - blueprint of an object
class Demo {} // class
let demo = new Demo(); // instance of a class - object
console.log(demo); // output: Demo{} -> {} = object

// example - 2
class Car {
  constructor(name, model) {
    // constructor - initialise the input
    this.name = name;
    this.model = model;
  }
}

let bmw = new Car("BMW", "M5");
let audi = new Car("Audi", "audi");
console.log(bmw);
console.log(audi);

// 3 types of functions
// arrow function
const sum = (a, b) => {
  // => this is called fat arrow
  console.log(a + b);
};
sum(5, 10);

// function declaration
function sum() {}

// function expression
let abc = function sum() {};
