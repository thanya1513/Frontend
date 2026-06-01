// if condition example //
let score = 120;
if (score > 100) {
  console.log("i have a century");
}

// if-else condition example //
let age = 12;
if (age > 18) {
  console.log("eligible to vote");
} else {
  console.log("wait to complete 18 years");
}

// if-else-if condition statement //
let team = "RCB";
if (team == "RCB") {
  console.log("ESCN");
} else if ((team = "CSK")) {
  console.log("Thala---");
} else if ((team = "MI")) {
  console.log("Mumbai");
} else {
  console.log("I am vijay malya");
}

//IMP= switch condition: it should have keywords as switch, case,break//
let orderStatus = "DISPATCHED";
switch (orderStatus) {
  case "ORDERED":
    console.log("i have ordered the item");
    break;
  case "DISPATCHED":
    console.log("item is dispatched and in transaction");
    break;
  case "OUT FOR DELIVERY":
    console.log("item is out for delivery");
    break;
  default:
    console.log("product not servicable");
}

// switch example-2 //
let amount = 6000;
switch (true) {
  case amount > 5000:
    console.log("VIP / Premimum Customer");
    break;
  case amount > 2000:
    console.log("Give 20% discount");
    break;
  default:
    console.log("Shop more for discount");
}
