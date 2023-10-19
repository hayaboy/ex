//예제A
// fun = function () {
//     console.log("하나");
// }

// fun = function () {
//     console.log("둘");
// }

// fun();

//예제B
// fun = function () {
//     console.log("하나");
// }

// function fun() {
//     console.log("둘");
// }

// fun();

//예제C
// function fun() {
//     console.log("둘");
// }

// fun = function () {
//     console.log("하나");
// }

// fun();

//예제D
// fun = function () {
//     console.log("하나");
// }

// fun = function () {
//     console.log("둘");
// }
// fun();


//선언적 함수의 곧바로 호출
(function hi() {
    console.log("hi")
})();

// hi();


//익명 함수의 곧바로 호출
(function () {
    console.log("hi2")
})();


//화살표 함수의 곧바로 호출
( () => {    console.log("hi3") })();