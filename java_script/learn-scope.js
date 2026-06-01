// learning concept : Lexical scoping

// global scope
// local scope
// nested scope
// block scope

let ad = "Five star Ad";

function ramesh() {
  let one = "Ramesh is on the set"; // local scope

  function suresh() {
    let two = "Suresh is on the set"; // nested scope
    console.log(ad);
    console.log(one);
    console.log(two);

    if (true) {
      let final = "Ad is done";
      console.log(final);
    }
  }
  // console.log(two); it is not accessable bcoz its outside the block
  suresh();
}
// console.log(one); it is not accessable bcoz its outside the block
ramesh();

let rohitstratergy = "Play aggressive";

function viratPlan() {
  let viratStratergy = "Anchor innings";

  function dhoniFinish() {
    let dhonistratergy = "Finish match";

    console.log(rohitstratergy);
    console.log(viratStratergy);
    console.log(dhonistratergy);
  }
  dhoniFinish();

  console.log(rohitstratergy);
  console.log(viratStratergy);
}
viratPlan();
