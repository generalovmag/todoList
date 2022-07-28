let a = 13.123456789;
let b = 2.123;
let c = 5;

// let = a = 13.890123, b = 2.891564, n = 2;

// let = a = 13.890123, b = 2.891564, n = 3;

let a1 = Math.floor((a % 1) * Math.pow(10, c));
let b1 = Math.floor((b % 1) * Math.pow(10, c));

console.log("task 2");

console.log("a =", a1);

console.log("b =", b1);

console.log(a1 > b1);

console.log(a1 < b1);

console.log(a1 >= b1);

console.log(a1 <= b1);

console.log(a1 === b1);

console.log(a1 !== b1);