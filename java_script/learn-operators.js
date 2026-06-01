//operators//
/*
airthematic operator: +, -, *, /, %, **, ++, --
*/

console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(5 ** 3);

let value = 10;
value++;
console.log(value);

// assignment operators : +=, -=, *=, /=, %=, **= //
let result = 10;
result += 20; // result = result + 20; //
console.log(result);

result -= 10; // result = result - 20; //
console.log(result);

result *= 2; // result = result * 2; //
console.log(result);

result /= 2; // result = result / 2; //
console.log(result);

result **= 2; // result = result ** 2; //
console.log(result);

result %= 2; // result = result % 2; //
console.log(result);

// comparison operators: <, >, <=, >=, ==, ===, !=, !== //

let value1 = 1234;
let value2 = "1234";
console.log(value1 == value2); // comapares only the value //
console.log(value1 === value2); // comapare the value as well as datatypes //
console.log(value1 !== value2);
console.log(value1 != value2);
console.log(10 > 29);
console.log(10 >= 10);
console.log(10 < 20);
console.log(10 <= 200);

// logical operator: and, or, not //
console.log(10 > 2 && 10 > 5);
console.log(10 > 2 || 10 > 20);
console.log(!10 > 2);
