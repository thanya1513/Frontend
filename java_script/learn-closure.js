// IMP closure - is a process/method of retaining the outer variable value even after outer function is closed

function outer() {
  let value = 0;

  function inner() {
    value++;
    console.log("my value is", value);
  }
  return inner;
}

let out = outer();
out();
out();
out();
out();

// example-1
function teashop() {
  let bill = 0; // private variable

  return function addBill(price) {
    bill += price;
    console.log("Total bill: " + bill);
  };
}

const myBill = teashop();
myBill(10); //tea
myBill(20); // snacks
myBill(15); // coffee

// example-2
function bankAccount() {
  let balance = 1000;

  return function (amount) {
    balance += amount;
    console.log("Balance: ", +balance);
  };
}
const account = bankAccount();

account(500);
account(-200);
