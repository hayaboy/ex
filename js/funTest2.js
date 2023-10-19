//선언적 함수의 this 호출 -> this는 최상위 객체, 여기서의 자기 자신이란 최상위인 Object를 가리킴
// (function hi() {
//     console.log("최상위객체가 나옴 : ",this)
// })();

// hi();




//익명 함수의 this 호출 -> this는 최상위 객체, 여기서의 자기 자신이란 최상위인 Object를 가리킴
// (function () {
//     console.log(this)
// })();

//하지만 화살표 함수는 다름 , 자기자신과 관련된 것만 호출함, 아래에서는 자기자신과 관련된 것이 없음
// //화살표 함수의 곧바로 호출
// (() => { console.log(this) })();

(() => {    
    console.log(this)
})();