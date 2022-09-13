let n = 5;

function triangle(n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    line += "\n";
  }
  return line + "\n";
}

function makeTriangle() {
  let t = triangle(n);
  console.log(t);
}
