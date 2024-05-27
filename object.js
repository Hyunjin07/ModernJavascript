// 객체 생성 방법
// let num = 100;
// const user = "이귀엽";
// let obj1 = new Object;
// const obj2 = new Object;

// 객체의 구성 : 키, 값 사전
// let dic = new Object();

// dic.boy = "소년";
// dic.girl = "소녀";
// dic.friend = '친구';

// console.log(dic.boy);
// console.log(dic.girl);
// console.log(dic.friend);

// 객체 리터럴
const dic = {
  boy: "소년", // 프로퍼티, 속성
  girl: "소녀",
  friend: "친구",
  present: "현재",
};

// 객체.키
// 객체["키"]
console.log(dic["boy"]);
console.log(dic["girl"]);
console.log(dic["friend"]);
console.log(dic["present"]);

// dic.apple = "사과";
// dic.ten = 10;

// console.log(dic.apple);
// console.log(dic.ten);

// delete dic.girl;

// console.log(dic.girl);

// dic.present = "선물";  // c#의 프로퍼티 기능 => 멤버함수 처럼 작동 (get)
// console.log(dic.present); // (set)

// 객체의 프로퍼티와 메소드
// 변수와 함수, 프로퍼티(속성), 메소드

// const unit = {
//     attack(weapon){
//         return `${weapon} (으)로 공격한다.`;
//     }
// }

// console.log(unit.attack('도끼'))

// const readline = require('require');

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
// const obj  = {
//     boy : "소년",     // 프로퍼티, 속성
//     girl : "소녀",
//     friend : "친구",
//     present: "현재"
// };

// rl.question('찾을 단어를 입력 : ', function(key) {
//    let word = key;
//    console.log(obj[word]);

//    rl.close();
// });

// // 단축 프로퍼티 : 객체의 프로퍼티 키와 값의 이름이 같은 경우

// let id = 'jamsu';
// let pw = '1111';

// let user = {
//     id,
//     pw,
// };

// console.log(user.id);
// console.log(user.pw);

// for ~ in

let user = {
  id: "jamsu",
  pw: 1234,
  name: "ich",
  mobile: "010",
  contry: "대한민국",
};

for (let info in user) {
  // why using it ? object type is unspecific
  console.log(`${info} : ${user[info]}`);
}
