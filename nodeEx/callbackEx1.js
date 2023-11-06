


//콜백함수
// 예전에는 국제 전화를 걸 때 상대방에게 한 번 전화를 걸어 자신의 전화번호를 알려주고, 상대방에게 전화를 다시
// 걸어달라고 요청하는 콜백 기법이 있었습니다. 이 함수가 동작하는 방식이 마치 콜백과 비슷하다고 해서 콜백 함수라는 이름이 붙었습니다.
// 콜백 함수는 함수를 호출할 때 무언가 새로운 일이 생기거나 그 함수의 실행이 끝나면 지정한 콜백 함수를 실행해 주도록 함수에 요청해야 할 
// 때 사용함


// 자바스크립트의 함수는 객체이며 다른함수에 인수(매개변수)로 넘겨질 수 있다.
// 함수2가 콜백

//함수1(함수2)


// 아래에서는 함수1이 f, 함수2가 g

function g() {
    console.log("hi");
}

function f(callback) {
    callback();
}

f(g);
