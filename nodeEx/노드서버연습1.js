const http = require("http");

//요청이 들어올때마다 콜백함수가 실행
http
  .createServer((request, response) => {
    response.writeHead(200, { ContentType: "text/html;charset=utf-8" });
    response.write("<h1>hi2</h1>");
    response.end("");
  })
  .listen(8080, () => {
    console.log("현재 서버는 클라이언트의 요청을 받아들인 준비가 된 상태임");
  });
