const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { ContentType: "text/html;charset=utf-8" });
  response.write("<h1>hi3</h1>");
  response.end("");
});

server.listen(8080);

server.on("listening", () => {
  console.log("현재 서버는 클라이언트의 요청을 받아들인 준비가 된 상태임2");
});

server.on("error", (error) => {
  console.log("에러가 남", error);
});
