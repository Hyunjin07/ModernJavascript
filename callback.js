// function order(callback) {//callback은 함수 포인터
//   callback();
// }

//callback 함수
const coffe = function () {
  console.log("주문하신 아메리카노가 나왔습니다.");
};

coffe();

setTimeout(coffe, 3000); // 한번호출  setInterval 주기적으로 호출
