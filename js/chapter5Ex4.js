//원래는 this는 node에서 최상위는 Object, 웹브라우저에서는 Window


//익명함수와 화살표 함수의 차이는 함수 내부에서의 this 키워드가 가지는 의미

//1)익명함수 :  함수 내부에서 this는 자바스크립트 최상위 객체(Object) 또는 외부에서 강제로 연결한 객체

// (function () { console.log(this) })();

//2)화살표함수 내부에서의 this는 '자기 자신과 관련된 것'만을 나타냄, 현재 여기서는 자기 자신과 관련된 것이 없으므로 빈 객체가 나옴

// (() => { console.log(this) })();

//13번 문제 풀이
let outer = this;

//1)
console.log(`1번위치 : ${outer == this}`); //this가 {} -> true

//2)
(() => { console.log(`2번위치 : ${outer == this}`); })(); //this가 {} -> true    //결론 :  this는 '자기 자신과 관련된 것'의미로 제대로 사용하고자 할 
//경우가 많으므로 화살표 함수를 사용해서 화살표 함수 내부에서 this를 사용하는 형태의 코드를 많이 보게될 것이고, 여러분도 그렇게 연습하세요!!!!

//3)
(function () { console.log(`3번위치 : ${outer == this}`); })();   //this가 Object -> false

//4)
function fun() { console.log(`4번위치 : ${outer == this}`); }    //this가 Object -> false
fun();








