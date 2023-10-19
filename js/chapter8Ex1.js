// // console.log(error);

// let error = new Error();
// console.log(error);

/*

1. 
(1) 예외

(2) 예외 처리

(3) throw

(4) 예외 객체

Error      범용적인 예외 객체
RangeError 숫자 값이 허용 범위를 벗어났을 때의 발생하는 예외 객체
ReferenceError 잘못된 참조를 만났을 때 발생하는 예외 객체
SyntaxError 문법에 어긋날 경우 발생하는 예외 객체
TypeError 변수 및 인수 타입이 유효하지 않을 때 발생하는 예외 객체
*/

// let pi = 3.14159;
// console.log(pi.toFixed(2));


// x++;

// let a = -1;
// if(a>0){a++


// let obj = {};
// let obj = [];
// obj.join();


// console.log(['hi', 'nice'].join('/'));

// 2.
// (1) X
// (2) O
// (3) O
// (4) X

// 3.1
// 4.1


// const error = new Error('에러가 났을 때의 메시지2');

// error.name = '나의 에러';
// // error.message = '에러가 났을 때의 메시지';

// throw error;

// 5.1
// 6.3

// try {
//     // let arr = [1, 2, 3, 4, 5]
//     // console.log(arr[-100])
//     // error.error.error();
//     // let num = NEW Number(10);
//     let num = 20;
//     num();
// }finally {
//     console.log("반드시 실행");
// }

// catch (error) {
//     console.log("예외 발생");
// }

// 8-4

// try {
//     // let arr = [1, 2, 3, 4, 5]
//     // console.log(arr[-100])
//     // error.error.error();
//     // let num = NEW Number(10);
//     // let num = 20;
//     // num();
// }catch (error) {
//     console.log("예외 발생");
// }finally {
//     throw new Error();
// }

// try {   
//     console.log("try 위치");
//     // throw new Error("예외 강제 발생");
//     throw "예외 강제 발생";
// }catch (error) {
//     console.log("catch 위치");
//     console.log(error);
// }







try {   
    console.log("try 위치");
    const error = new Error("메시지");
    error.name = '내가 만든 에러 이름;'
    error.message = '오류 메시지'
    
    throw error
}catch (err) {
    console.log(`${err.name}`);
    console.log(err.message);
}




