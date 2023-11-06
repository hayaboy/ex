const express = require("express");

const app = express();

//서버의 환결 설정(포트)
app.set("port", process.env.PORT || 3000);

//서버 실행
app.listen(app.get("port"), function () {
  console.log(`${app.get("port")}번 포트에서 대기중`);
});

//키("/") , 밸류(화살표함수)
app.get("/", (request, response) => {
  response.send("<h1>닭강정<h1>");
});

app.get("/lunch", (request, response) => {
  response.send("<h1>곱창<h1>");
});

app.get("/indexhtml", (request, response) => {
  response.sendFile("C:/ex/nodeEx/server/index.html");
});
app.get("/indexpug", (request, response) => {
  response.sendFile("C:/ex/nodeEx/server/index.pug");
});