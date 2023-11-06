const express = require("express");
//Express 애플리케이션을 생성합니다. express() 함수는 express 모듈에서 내보낸 최상위 함수입니다.
// console.log(express);
// console.log(typeof (express));
const app = express();

//서버 실행
app.listen(8087, function () {
  console.log("포트 8087에서 서버 대기중");
});

// use()는 요청이 왔을 때 실행함 함수 지정
app.use((request, response) => {
  response.send("<h6>wahoo3333<h6>");
  // response.send({ some: "json" });
  // response.status(404).send("Sorry, cant find that");
});
