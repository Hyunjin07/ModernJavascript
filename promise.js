const id = "jamsu";
const pw = "1111";

function pro1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      //resolve("success");
      reject("pro1 fail");
    }, 1000);
  });
}

function pro2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("pro2 success");
    }, 1000);
  });
}

//프로미스의 체이닝
pro1()
  .then(function (result) {
    console.log("result", result);
    return pro2();
  })
  .catch(function (err) {
    console.log("err", err);
  })
  .then(function (result) {
    console.log("result2", result);
  });
