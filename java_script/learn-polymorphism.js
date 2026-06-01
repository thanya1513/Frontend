class College {
  constructor(name) {
    this.name = name;
  }
  famousFor() {
    console.log(`${this.name} is famous for placements`);
  }
}

class KIT extends College {
  famousFor() {
    console.log(`${this.name} is famous for`);
  }
}

class AIT extends College {
  famousFor() {
    console.log(`${this.name} is famous for`);
  }
}
