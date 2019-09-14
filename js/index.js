// Hoisting 테스트
// (function() {
//   console.log("name", name)
//   var name = "백윤기"
//   console.log("name", name)
// })()

// //위의 코드는 사실 아래와 같다.
// (function() {
//   var name
//   console.log("name", name)
//   name = "백윤기"
//   console.log("name", name)
// })() // 즉 함수안에서 변수가 선언 됐을 때, 함수의 최 상단으로 올라가서 선언된다. interpreter 언어의 특징 때문인 것 같다.

// 그렇다면, es6에서 등장한 let 과 const 도 실험해보지 않을 수 없잖아?
// const hoisting = () => {
//   console.log("First:", firstName)
//   let firstName = "백"
//   console.log("Full Name:", "윤기"+firstName)
// }
// hoisting() // Uncaught ReferenceError: Cannot access 'firstName' before initialization

// {
//   console.log("before", test)
//   {
//     var test = 100
//   }
//   console.log("after", test)
// }
// console.log("global", test)

for(let i = 0; i < 2; i++) {
  var variable1 = 'I am in a block';
  let variable2 = 'I am in a block';
  const variable3 = 'I am in a block';
  console.log(variable1); console.log(variable2); console.log(variable3);
}
console.log(variable1);