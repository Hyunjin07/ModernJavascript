// function plus(a, b) {
//   return a + b;
// }

// var result = plus(10, 20);
// console.log(result);

// function Week() {
//   console.log("Mon");
//   console.log("Tue");
//   console.log("Wed");

//   return; // 종료, 종료하면서 반환 두개의 기능 return뒤에 반환값이 없으면  return뒤에는 프로그램을 종료하겠다는 의미
//   console.log("Thr");
// }
// // Week();

//함수 표현식 동적바인딩
var nickName = function nickName() {
  console.log("이예쁜");
};

nickName();

nickName = function () {
  console.log("이귀엽");
};

nickName();

var userName = nickName;

userName();
