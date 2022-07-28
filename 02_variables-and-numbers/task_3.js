// let n = 0, m = 100;
let n = 100, m = - 5;

let range;

let randomNumber;


if (m > n) {
  range = Math.abs(m - n);

  randomNumber = Math.round(Math.random() * (m - n) + n);

}
else {
  range = Math.abs(n - m);

  randomNumber = Math.round(Math.random() * (n - m) + m);
};


// console.log(randomNumber);

console.log("task 3");

if (randomNumber % 2 == 0) {
  if (n < 0 && m < 0) {
    console.log((randomNumber + 1) * -1);
  }
  else {
    console.log(randomNumber + 1);
  }
}
else {
  if (n < 0 && m < 0) {
    console.log(randomNumber * -1);
  }
  else {
    console.log(randomNumber);
  }
}

