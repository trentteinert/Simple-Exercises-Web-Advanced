let num = 5;

function fact(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}

function displayF() {
  let f = fact(num);
  console.log(f);
}
