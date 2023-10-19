/**
 * 3. ③
4. 화살표 함수를 일반 익명 함수로 교체합니다. 내부에서의 this 키워드가 문자열 자기 자신을 나타내지 않기 때문입니다.





5.

[
  {
     "name": "일벌레",
     "mineral": 50,
     "gas": 0,
     "supply": 1
  }, {
     "name": "여왕",
     "mineral": 150,
     "gas": 0,
     "supply": 2
  }, {
     "name": "바퀴",
     "mineral": 75,
     "gas": 25,
     "supply": 2
  }, {
     "name": "히드라리스크",
     "mineral": 100,
     "gas": 50,
     "supply": 2
  }, {
     "name": "타락귀",
     "mineral": 150,
     "gas": 100,
     "supply": 2
  }
]

6.
hello world..!
hello world..!
7. string = string.toUpperCase() 형태로 리턴을 받아서 사용해야 한다.
8. 이외에도 공식 문서 내에서 소개하고 있는 메소드라면 정답으로 처리함
_.compact(): 필터링된 값의 새 배열을 반환합니다.
_.concat(): 연결된 새 배열을 반환합니다.
_.difference(): 필터링된 값의 새 배열을 반환합니다. 
_.drop(): 슬라이스된 배열을 반환합니다.
_.filter(): value에 받은 값으로 치환된 배열을 반환합니다.


 */

const { functions } = require("lodash");


// const date = new Date(2000, 12, 10);
// console.log(date);
// console.log(date.toString());



String.prototype.contain = function(input){ 
    return this.indexOf(input) > -1;
};

console.log("안녕하세요".contain("hdksf"));
console.log("안녕하세요".indexOf("안녕"));
console.log("안녕하세요".indexOf("ㅓㅏㅣㄴㄹㅇㄹㅇ"));