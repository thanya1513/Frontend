// object - it is a collection of data that holds key value pairs

let obj = {
  name: "David",
  age: 20,
};

console.log(obj);

// access object properties
console.log(obj.name);
console.log(obj["name"]);

// add new properties
obj.salary = 10000;
console.log(obj);

obj["city"] = "Bangalore";
console.log(obj);

// delete an object properties
delete obj.city;
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// nested objects
let obj1 = {
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};
console.log(obj1.address.city);

// array of objects
let mobile = [
  { name: "Iphone 17", Brand: "Apple", Country: "USA" },
  { name: "Galaxy", Brand: "Samsung", Country: "Korean" },
  { name: "Nord Series", Brand: "One Plus", Country: "China" },
  { name: "Iphone 16", Brand: "Apple", Country: "USA" },
];

// program to filter and give the output only for apple phones
let finalop = [];
for (let i = 0; i < mobile.length; i++) {
  if (mobile[i].Brand == "Apple") {
    finalop.push(mobile[i]);
  }
  console.log(finalop);
}

let target = {
  name: "David",
  age: 20,
};

let source = {
  name: "Johnson",
  city: "Bangalore",
};
console.log(Object.assign(target, source)); // assign is assigning from one obj to another if the property exits it overrides it

let str1 = "Bangalore";
let str2 = "Mangalore";
console.log(str1.concat(str2));
console.log(str1.concat(" ", str2));
console.log(str1 + str2);

// template literals - instead of using + to add too many strings we use template literal

console.log("I am in " + str1 + "moving to" + str2);
console.log(`template literal: I am in ${str1} moving to ${str2}`);

let arr = [1];
console.log(arr.indexOf(1));
