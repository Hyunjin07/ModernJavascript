// function plus(a,b){
//     return a + b;

// }

//1.function 없애기
//2.함수 이름을 변수로 변경
//3. 괄호뒤에 화살표 추가

let plus = () => "플러스";

let reuslt = plus();
console.log(reuslt);

//비구조화 할당(구조분해 할당)
const color = ["red", "green", "blue"];

// let r = color[0];
// let g = color[1];
// let b = color[2];

// let [r, g, b] = color; //배열의 구조분해
// [b, g, r] = [r, g, b];

// console.log(r);
// console.log(g);
// console.log(b);

//const [a, b, c] = ["C#", "javascript"]; // 기본값을 설정하지 않으면 undefined c에해당
//const [a, b, c = "python"] = ["C#", "javascript"];
// const [a, , c, d] = ["C#", "javascript", "python", "react"]; //의도적으로 비워두고 싶을때는 쉼표로 비워둠
// console.log(a);
// //console.log(b);
// console.log(c);
// console.log(d);

//배열의 나머지 요소 가져오기 ...

// const [a, b, ...rest] = ["C#", "javascript", "python", "react", "C++"];

// console.log(a);
// console.log(b);
// console.log(rest.length);
// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest[2]);

const arr1 = ["C#", "javascript"];
const arr2 = ["python", "react", "C++"];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// let {a,b} = {a:값1, b:값2};

let user = {
  //   id: "jamsu",
  //   pw: "1234",
  name: "lch",
  age: 20,
};

//let id = user.id;
//let pw = user.pw;
//let name = user.name;
//let age = user.age;

// let { id, pw, name, age } = { id: "jamsu", pw: "1234", name: "lch", age: 20 };
let { id = "guest", pw = "1111", name, age } = user;
console.log(id);
console.log(pw);
console.log(name);
console.log(age);
