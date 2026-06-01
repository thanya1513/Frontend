// example 1
class Parent {
  constructor(name) {
    this.name = name;
  }

  parentMethod() {
    console.log(`my name is ${this.name}`);
  }
}

class Child extends Parent {}

let child = new Child("David");
child.parentMethod();

// example 2
// Parent Class
class IPLTicket {
  constructor(name) {
    this.name = name;
  }
  enterStadium() {
    console.log(this.name + "entered IPL stadium ");
  }
  watchMatch() {
    console.log(this.name + "is watching the match");
  }
}

// VIP Ticket
class VIPTicket extends IPLTicket {
  betterView() {
    console.log(this.name + "has better seating near boundary");
  }
}

// premium ticket
class PremiumTicket extends IPLTicket {
  betterView() {
    console.log(this.name + "has VIP seating");
  }

  lougeAccess() {
    console.log(this.name + "is enjoying lounge access");
  }

  meetPlayers() {
    console.log(this.name + "meets players after match");
  }
}

const vip = new VIPTicket("Dhanush");
vip.enterStadium();
vip.watchMatch();
vip.betterView();

console.log("---------------");

const premium = new PremiumTicket("Rahul");
premium.enterStadium();
premium.watchMatch();
premium.betterView();
premium.lougeAccess();
premium.meetPlayers();

// parent class
class IPLTicket {
  constructor(name) {
    this.name = name;
  }
  watchMatch() {
    console.log(this.name + "is watching match from normal stand");
  }
}
