/*
1. 다음 괄호 안을 채우시오.
(1) 키
    (2) 메소드
        (3) 클래스
            (4) new
                2. 다음 질문에 OX를 표시하시오.
(1) X
    (2) O
        (3) O
            (4) O
                (5) X
::식별자로 사용할 수 없는 문자열도 키로 사용할 수 있습니다::
(6) X
:: C++, 자바 등의 프로그래밍 언어는 생략할 수 있지만, 자바스크립트는 생략할 수 없습니다.::
(7) X
::복잡한 자료형도 속성으로 가질 수 있습니다::
(8) O
3. ④
4. ④
5. ①, ③ 

*/


// let product = {
//     제품명: '망고'
// }

// console.log(typeof (product.제품명));
// console.log(product.제품명);
// console.log(product[제품명]);
// console.log(product['제품명']);

// let product2 = {
//     '제품명': '망고'
// }
// console.log(typeof (product2.제품명));
// console.log(product2.제품명);
// console.log(product2['제품명']);

// let product3 = {
//     $: '망고1',
//     _: '망고2',
//     fruit3: '망고3',

// }
// console.log(product3.$);
// console.log(product3._);
// console.log(product3.fruit3);
// for (let obj in product3) {
//     console.log(obj);
// }

// for (let obj in product3) {
//     console.log(product3[obj]);
// }


// for (let obj in product3) {
//     console.log(`키 : ${obj}, 밸류 :  ${product3[obj]}` );
// }

// f1=function (){
//     console.log("hi1");

// }

// function f2() {
//     console.log("hi2");

// }

// let obj3 = { 제품명: '망고' }
// console.log(typeof (obj3));
let students = {
    m : function f5() {
        console.log(`hi1   ${this}`);
        console.log(`${this == students}`);
        
    },
    m2:function () {
        console.log(`hi2   ${this}`);
        console.log(`${this == students}`);
    },
    m3: () => {
        console.log(this);
        console.log(`hi3   ${this}`);
        console.log(`${this == students}`);
        // console.log(`${this == m3()}`);
    }
}

// for (let obj in students) {
//     console.log(`key : ${obj}, value :  ${students[obj]}`);
// }
// students.m
students.m()
students.m2()
students.m3()




// C++이나 자바, C# 등 프로그래밍 언어에서는  this 키워드 생략 가능, 하지만 자바스크립트
// this를 사용하지 않으면 오류, 반드시 this 키워드 사용
//익명함수
// let object1 = {
//     name: '바나나',
//     price: 1200,
//     print: function(){ console.log(`${this.name}은 가격은 ${this.price}`) }

// }
// object1.print();
// // 화살표함수
// let object2 = {
//     name: '바나나',
//     price: 1200,
//     print: () => { console.log(`${this.name}은 가격은 ${this.price}`) }

// }
// object2.print();