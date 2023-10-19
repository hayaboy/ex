//선언적 함수
// function sunja1() {
//     console.log("hi");
// }

// console.log(sunja1);

//익명(anonymous) 함수 : 이름(함수명)을 숨기는
// function () {
//     console.log("hi");
// }
// let num1 = 4;
// console.log(typeof (num1));

// let sunja1 = function () {
//     console.log("hi");
// }
// console.log(typeof (sunja1));
// console.log(sunja1);
// sunja1();

//주로 콜백 함수(매개변수에 함수가 들어가있는 형태)에 많이 사용

//2)
let sunja2 = function (gift) {
    console.log(gift);
}

//3 X O
let sunja3 = function () {
    return "과자";
}

//4 O O
let sunja4 = function (gift) {
    console.log(gift);
    return "사탕"
}

// sunja2("꼬치");
// let gift = sunja3();
// console.log(gift);
let gift = sunja4("떡볶이");
console.log(gift);