// Type conversion:
// Two types - implicit and explicit

// implicit conversion
console.log("5" + 1);
console.log(5 + 3 + "abcd" + 5 + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log(1 + true);
console.log("1" + true);

if ("hello") {
  console.log("true statement");
} else {
  console.log("false statement");
}

if ("") {
  console.log("true statement");
} else {
  console.log("false statement");
}

// explicit conversion - string, boolean, number

console.log(String(true));
console.log(String(123));
console.log(Number("123"));
console.log(Boolean(""));
console.log(Boolean("123"));

// JS program to count number of vowels
let data = "Hello Web";
let value = data.split("");
let vow = ["a", "e", "i", "o", "u"];
let count = 0;

for (let i = 0; i < value.length; i++) {
  if (vow.includes(value[i])) {
    count++;
  }
}
console.log("number of vowels", count);

// Removing duplicates
let arr = [1, 1, 2, 3, 4, 5, 5, 6, 7];
let result = [];

for (i = 0; i < arr.length; i++) {
  if (result.indexOf(arr[i]) == -1) {
    result.push(arr[i]);
  }
}
console.log("unique elements", result);

// finding largest number
let arr1 = [100, 200, 350, 120, 140];
let largest = [];

for (i = 0; i < arr.length; i++) {
  if (arr1[i] > largest) {
    largest.push(arr1[i]);
  }
}
console.log("largest number", largest);

// Bangalore number of occurence of each letters
let str = "Bangalore";

function findFreq(value) {
  let op = {};
  let char = value.split("");

  for (let i = 0; i < char.length; i++) {
    let alpha = char[i];
    op[alpha] = (op[alpha] || 0) + 1;
  }
  return op;
}

let final = findFreq(str);
console.log(final);
