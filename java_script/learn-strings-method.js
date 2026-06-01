/* JS program for below pattern
 *
 **
 ***
 ****
 *****
 */

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/* JS program foe below pattern
 *****
 ****
 ***
 **
 *
 */
let n1 = 5;
for (let i = n1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
