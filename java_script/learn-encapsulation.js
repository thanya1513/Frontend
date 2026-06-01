class Action {
  #balance = 0; // '#' is the symbol used for private field

  constructor(name) {
    this.name = name;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; // this.#balance = this.#balance + amount
      this.#viewbalance();
    } else {
      console.log("cannot add negative money");
    }
  }

  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      this.#viewbalance();
    } else {
      console.log("insufficient funds");
    }
  }

  #viewbalance() {
    console.log(`Account balance: ${this.#balance}`);
  }
}

let bank = new Action("Axis");
bank.deposit(10000);
bank.withdraw(3000);
// bank.#viewbalance();

// abstraction deals with method where a public field cannot be used outside the action

// Bubble sort [-3, -20, 20, 7, 1, 9, -1]
function bubbleSort(arr) {
  let interChange;
  do {
    interChange = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        interChange = true;
      }
    }
  } while (interChange);
  return arr;
}
let arr = [-3, -20, 20, 7, 1, 9, -1];
let sortedArray = bubbleSort(arr);
console.log(`sorted array is ${sortedArray}`);
