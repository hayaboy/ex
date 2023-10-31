//전역(전체 영역), 쉽게 말해 아무곳에서나 아무런 변수를 선언하지 않고 사용할 수 있는 것
//전역 = 내장
//전역 변수, 전역 함수, 전역 객체
// console.log(__filename);
// console.log(__dirname);

//전역 객체 //process,  global, console

// console.log(process);
// process.exit();
// console.log(process.memoryUsage());
//console.log(process.uptime());

// console.log("평범한 로그")
// console.error("에러메시지는 이렇게 찍기")

//타이머 전역 함수, 타이머 함수들은 모두 아이디를 반환함, 아이디를 사용하여 타이머를 취소할 수 있다.
//전역 함수 setTimeOut(콜백함수, 밀리초)
//전역 함수 setInterval(콜백함수, 밀리초)
//전역 함수 setImmediate(콜백함수)

// let setTimeoutID = setTimeout(() => { console.log("1.5초 후 실행") }, 1500);
// console.log(typeof (setTimeoutID));
// clearTimeout(setTimeoutID);

// let setIntervalID = setInterval(() => { console.log("1초 마다 실행") }, 1000);
// console.log(typeof (setIntervalID));
// clearInterval(setIntervalID);


let setImmediateID = setImmediate(() => { console.log("즉시 실행 ") });
// console.log(typeof (setImmediateID));
// console.log(setImmediateID);
clearImmediate(setImmediateID);