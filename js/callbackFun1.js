//callback   : 함수의 매개변수로 전달되는 함수

// let cb1 = function () {
//     console.log("nice");
// }

let cb1 = () => { console.log("nice"); };

function sunja1(clbk) {
    console.log(clbk);
    clbk();
}

sunja1("hong");  // 자바스크립트는 동적 타입핑(들어가는 매개변수의 데이터 타입에 따라 타입이 정해짐)
// console.log(typeof (cb1));
// sunja1(cb1);