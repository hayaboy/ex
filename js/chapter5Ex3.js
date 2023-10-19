//즉시 실행함수

// () 그룹 연산자로 묶으면 괄호안의 함수 정의식이 평가되어 함수값(정확히는 함수 객체의 참조 값)으로 바뀝니다.
//선언적 함수 가능
// (function f1() { console.log("hi"); })();
//익명 함수 가능
// (function () { console.log("hi2"); })();
//화살표 함수 가능
// (() => { console.log("hi3"); })();


//자바스크립트에서의 this(해당 객체 자기 자신)
//1) 실행 문맥이 초기화 될 때 그 안의 디스 바인딩 컴포넌트가 전역 환경을 가리키도록 초기화 되므로 노드 환경에서는 최상위 객체인 Object, 웹브라우저에서는 Window 임
//2) 이벤트 환경(처리기)에서의 this
// 이벤트 처리기 안에 있는 this는 이벤트가 발생한 요소 객체(이벤트 처리기가 등록된 객체)를 가리킴


let tom = {};
// console.log(typeof (tom));
tom = {
    name: "Tom",
    sayHello: function () {
        // console.log(this);
        console.log("Hi " + this.name);
    }
};

tom.sayHello();


