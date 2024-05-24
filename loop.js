// for (var i = 0; i < 10; i++) {
//   console.log("*");
// }

// var sum = 0;
// for (var i = 1; i < 11; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// var i = 0;

// for (;;) {
//   if (i > 100) break;
//   console.log("충전중 :" + i + "%");
//   i++;
// }

//var arr = new Array();

var arr = [];

var arr = ["자바스크립트", "C언어", "파이썬"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

arr.push("ASP.NET");
arr.push("C#.NET");
// console.log(arr[3]);
// console.log(arr[4]);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var i = 0;

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("단수를 입력하세요: ", function (dan) {
//   var i = 1;

//   while (i <= 9) {
//     console.log(dan + "*" + i + "=", dan * i);
//     i++;
//   }

//   rl.close();
// });

// var value = 0;
// while (true) {
//   if (value > 100) break;

//   console.log("value의 값: " + value);
//   value++;
// }
// console.log("value는 100보다 크다");

// var value = 0;
// while (value < 10) {
//   value++;
//   if (value % 2 == 0) continue;
//   console.log("value의 값: " + value);
// }

var dan = 2;
while (dan <= 10) {
  var i = 1;
  if (dan >= 6) continue;
  while (i < 10) {
    console.log(dan + "*" + i + "=" + dan * i);
    i++;
  }
  dan++;
}

var dan = 2;
outside: while (dan < 10) {
  var i = 1;
  while (i < 10) {
    if (dan == 6 && i == 1) break outside;
    console.log(dan + "*" + i + "=" + dan * i);
    i++;
  }
  dan++;
}
