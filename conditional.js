// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("프로그래밍 언어를 입력하시요 : ", function (data) {
//   console.log("가장 좋아하는 언어는" + data + "입니다.");
//   rl.close();
// });

// const readline = require("readline");

//짝수 홀수 판별
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("정수를입력하시요 : ", function (num) {
//     num =  num %2;
//     if(num){
//         console.log('홀수 입니다.');
//     }else{
//         console.log('짝수 입니다.');
//     }

//   rl.close();
// });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("나이를입력하시요 : ", function (age) {
//   if (age >= 19 && age <= 100) {
//     console.log("성인입니다");
//   } else if (age >= 0 && age < 19) {
//     console.log("미성년자입니다");
//   } else {
//     console.log("값이 유효하지 않습니다.");
//   }

//   rl.close();

// });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("C 드라이브를 포멧하시겠습니까? :", function (ch) {
//   switch (ch) {
//     case "y":
//       console.log("예, 드라이브를 포멧하겠습니다.");
//       break;
//     case "n":
//       console.log("아니오 드라이브를 포맷하겠습니다.");
//       break;
//     default:
//       console.log("유효하지 않은 문자입니다.");
//       break;
//   }

//   rl.close();
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("커피를 선택하세요 :", function (coffe) {
  switch (coffe) {
    case "아메리카노":
      console.log("아메리카노");
      break;
    case "카페라떼":
      console.log("카페라떼");
      break;
    case "헤이즐넛":
      console.log("헤이즐넛");
      break;
    default:
      console.log("유효하지 않은 문자입니다.");
      break;
  }

  rl.close();
});
