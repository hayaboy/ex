//callback 함수를 이용한 계산기
//1)익명함수
let add1 = function (num1, num2) {
    console.log(num1 + num2);
}
//2)화살표 함수
let add2 = (num1, num2) => { console.log(num1 + num2); }

//콜백 함수 정의
function callBackFun(duhagi) {
    // duhagi();
    duhagi(4, 5);
}


//콜백 함수 사용
callBackFun(add1);
//콜백 함수 사용
callBackFun(add2);