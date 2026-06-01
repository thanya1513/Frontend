function isPalindrome(str1) {
  let value1 = str1.split("").reverse().join("");

  return value1 == str1;
}

let op = isPalindrome("madam");
console.log(op);

// without using reverse method
function isPalin(str) {
  let first = 0;
  let last = str.length - 1;
  while (first < last) {
    if (str[first] != str[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
}
let op1 = isPalindrome("dad");
console.log(op1);

// 2 inputs
// one is arr - [1,2,3,4,5,6]
// second ip is 7
// output should be adding two number which gives 7
// op - [[0,5],[1,4],[2,5]] (indexx values)

function sum(nums, value) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {}
  }
  return Array;
}
let final = sum([1, 2, 3, 4, 5, 6], 7);
console.log("output is", final);
