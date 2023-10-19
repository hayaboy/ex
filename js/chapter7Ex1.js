// 1.
// (1) 프로토타입(prototype)
// (2) 메소드 체이닝
// (3) 파괴적 메소드
// (4) 비파괴적 메소드
// (5) 유닉스 타임
// (6) push()
// (7) pop()
// (8) JavaScript Object Notaion
// 2.
// (1) X
// (2) X
// (3) type X
// ::(1) - (3) 모두 object가 나옵니다. ::
// (4) X
// ::사용할수 있습니다.::
// (5) X
// ::여러 가지 제약이 존재합니다.::

//기본 자료형도 속성과 메서드를 가지고 있다. 이는 기본 자료형의 속성 또는 메서드를 사용할 때
//기본 자료형이 자동으로 객체로 변환됨
let str = '과자|1500원';
// console.log(str.split('|'));
// console.log(typeof(str));

let str2 = new String('과자|1500원');
// console.log(str2.split('|'));
// console.log(typeof(str2));
//차이는 기본 자료형은 객체가 아니므로 속성과 메서드를 추가할 수 없다.

let primitiveNumber = 273;

primitiveNumber.methodName=function () {
    return "Primitive Method";
}

// let result = primitiveNumber.methodName();
// console.log()

//그러면 기본 자료형에 속성 또는 메서드를 추가하고자 하면 prototype이라는 특별한 객체를 사용해서
//일회용 옷을 입힘

Number.prototype.methodName=function () {
    return "Primitive Method";
}

let result2 = primitiveNumber.methodName();
console.log(result2)