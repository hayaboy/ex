
//익명함수는 덮어쓰므로 나중에 정의된 것이 나온다.
// let fun1;

// fun1 = function () {
//     console.log("hi");
// }
// fun1 = function () {
//     console.log("nice");
// }
// fun1();

//선언전 함수
// function fun1() {
//     console.log("hi");
// }

// function fun1() {
//     console.log("nice");
// }

// fun1();




// let fun1 = function () {
//     console.log("hi");
// }
// function fun1() {
//     console.log("nice");
// }

// fun1();


//동일한 이름의 익명함수와 선언적 함수가 동시에 있을 경우
//1) 익명-선언적 함수 (선언적 함수는 코드를 실행하기 전에 생성됨)
// 아래의 코드를 보면 익명함수 다음 선언전 함수가 나오긴 했으나
// 선언적 함수는 코드를 실행하기 전에 생성된다는 문법에 의해
// 선언적 함수가 먼저 생성되고, 이후에 익명함수를 만듭니다.
// fun1 = function () {
//     console.log("hi");
// }
// function fun1() {
//     console.log("nice");
// }

// fun1();

//2) 선언적-익명  함수 (선언적 함수는 코드를 실행하기 전에 생성됨)
// function fun1() {
//     console.log("nice");
// }
// fun1 = function () {
//     console.log("hi");
// }

// fun1();

// function fun1() {
//     console.log("nice");
// }
// let fun1 = function () {
//     console.log("hi");
// }

// fun1();