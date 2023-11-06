/* 
1. 
(1) 전역 변수

(2) process

(3) require()

(4) 네이티브 모듈
(5) npm

(6) 유의적 버전(Semantic Versioning)



2. 
(1) X
::on() 메서드를 사용합니다.::
(2) O
(3) O
(4) X


3. ①

4. ④

*/

// const fs = require("fs");

// // const f=fs.readFile("./a.txt", (error, data) => {
// //   console.log(data.toString());
// // });

// const f = fs.readFile("./a.txt");

// console.log(f);
// console.log(f.toString());

const querystring = require("querystring");

// 7. crypto 모듈
//8. 동기 처리는 코드를 순서대로 실행하고, 비동기 처리는 백그라운드에 요청해서 실행하므로 순서가 보장되지 않을 수 있음(이외에도 차이를 하나 이상이라도 제대로 설명했다면 답으로 인정)