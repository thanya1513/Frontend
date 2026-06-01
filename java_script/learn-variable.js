/* variables
it can be re-declared
it can be re-initialized
*/

var name = "David";
var name = "Johnson";
console.log("my name is", name);

/* let keyword
it can not be re-declared
*/
let city = "Bangalore";
let city = "Hubli";
console.log("I reside in ", city); (this throws error which let cannot be re-declared)
it can be re-initialized


let city = "Bangalore";
city = "Hubli";
console.log("I reside in ", city);

/*constant
it can not be re-declared
it can not be re-initialized
*/

const state = "Karnataka";
state = "Maharastra";
console.log("state is", state);


// scope of variable //
{
  let score = 79;
  console.log("Rohit Sharma scored", score);
}


console.log("Rohit Sharma scored------", score);
// let keyword is a block scope //

{
  var score = 79;
  console.log("Rohit Sharma scored", score);
}
console.log("Rohit Sharma scored------", score);
// var is a function scope //

{
  const score = 79;
  console.log("Rohit Sharma scored", score);
}
console.log("Rohit Sharma scored------", score);
// constant is also a block scope //
