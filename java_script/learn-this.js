// this key is used to refer the onject related data
let obj = {
  name: "David",
  sayhello: function () {
    console.log(`say hello to ${this.name}`);
  },
};

obj.sayhello();
