// dice roll shows how long it took to roll above 3
// aswell shows your rolls
function diceRoll() {
  let count = 0;
  let roll = 0;
  for (count = 0; roll <= 3; count = count + 1) {
    roll = Math.ceil(Math.random() * 6);
    console.log("You rolled a " + roll + ".");
  }
  console.log("Times Rolled: " + count);
  return;
}
