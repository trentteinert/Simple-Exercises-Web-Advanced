// 2. Roll dice 1-6 prints msg based on number rolled
function rollDice() {
  let roll = Math.ceil(Math.random() * 6);
  console.log(roll);
  if (roll == 6) {
    console.log("You rolled the highest number.");
    return;
  }
  if (roll == 1) {
    console.log("Unlucky.");
    return;
  }
  if (roll > 3) {
    console.log("You won.");
  } else {
    console.log("You lose.");
  }
}
console.log(rollDice());
