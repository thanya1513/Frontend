// slicing
let city = "Bangalore";
console.log(city.slice(3, 6)); // starts at 3 and end at 5

// array basics
let arr = ["Bangalore", "Mangalore", "Dharwad"];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
for (let i = 0; i < arr.length; i++) {
  console.log("i have value", arr[i]);
}

// include method (checks whether the word is present or not)
let str = "Bangalore is my town";
console.log(str.includes("my")); // it checks weather "my" is present inside the string

// indexOd method
let sentence = "Bangalore is my town";
console.log(str.indexOf("my"));
console.log(str.indexOf("mysss"));

// split method- slits the elements
// join methos is used to join the elements
let payment = "Pay on time";
console.log(payment.split("").join(""));

// replace method - replaces a word, if same word repeates only ond word is replaced
// to replace all the similar words we use replaceAll
let ipl = "We have daily match,match";
console.log(ipl.replaceAll("match", "cricket"));

// trim method
let town = "Bengalore   ";
console.log(town.trim().length);

// JS program example for counting the occurance of letter e
let data = "I am attending an interview";
console.log(data.split(""));
let value = data.split("").length;
let arrdata = data.split("");
let count = 0;
for (let i = 0; i < value; i++) {
  if (arrdata[i] == "e") {
    count++;
  }
}
console.log("letter 'e' occurance", count);

// JS program to find the largest word
let newdata = data.split(" ");
console.log(newdata);
let word = "";
for (let i = 0; i < newdata.length; i++) {
  if (newdata[i].length > word.length) {
    word = newdata[i];
  }
}
console.log(word);
