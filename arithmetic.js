console.log("긴급출동" + 119);
console.log(+"1024" + 1); //정수형 출력 +가 "1024" 붙으면 정수형으로 타입캐스팅
console.log(+true); //+를 붙였으므로 정수형 1 출력
console.log(+false);
console.log("10" - 2); // -를 붙여서 정수형 출력

// +=, = , *=, /= 복합할당 연산자

var a = 3;
a += 2;
console.log(a);

//a++, ++a

//일치연산자, 동등 연산자
var size1 = 1024;
var size2 = "1024";

// console.log(size1 == size2); // == 값만비교
// console.log(size1 === size2); // 값과 타입 둘다 비교

// console.log(300 > "200");
// console.log("10" > 9);
// console.log(true == 10);
// console.log(false == 1);
// console.log(true == "1");

//null, undefined
console.log(null == undefined); //값이 비어있다 true

//조건부 연산자
// 조건 ?  value1 :  value2;

// var age = 30;
// var result = age >= 19 ? "성인입니다." : "더 자라렴";
// console.log(result);

//논리 연산자
// &,||,!

// console.log(true && true);
// console.log(true && false);
// console.logt(false && false);

// console.log(true || true);
// console.log(true || false);
// console.logt(false || false);

// var id = "jamsuham";
// var pw = "1111";
// var result = (id == "jamsuham" && pw == "1111") ? "로그인 되었습니다" : "아이디 또는 비번이 틀렸습니다";

// console.log(result);

// console.log(false && "jamsuham");
// console.log(true && "80");

// var age = 30;
// var result = age > 65 || age < 7 ? "지원 대상입니다." : "지원 대상이 아닙니다.";
// console.log(result);

// console.log(!0);


// nullish 병합 연산자 '??'

// var id = "jamsuham";
// var pw = "1111";

// var result = (id ?? null) ? "아이디가 입력되었습니다" : "아이디가 입력되지 않았습니다.";
// console.log(result);

// 연산자 우선순위: +, -, &&, || , < >, (),[],{}
// 2 + 3 *4 =


