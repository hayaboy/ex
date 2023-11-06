const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

http
  .createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain"); //단일 헤더 값을 설정합니다. 전송할 헤더에 해당 헤더가 이미 존재하는 경우 해당 값이 대체됩니다.
    // 동일한 이름을 가진 여러 헤더를 보내려면 문자열 배열을 사용하십시오.
    response.write("hi3");
    response.end("end");
  })
  .listen(port, hostname, () => {
    console.log("현재 서버는 클라이언트의 요청을 받아들인 준비가 된 상태임");
    console.log(`Server running at http://${hostname}:${port}/`);
  });

const port2 = 3001;
http
  .createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain"); //단일 헤더 값을 설정합니다. 전송할 헤더에 해당 헤더가 이미 존재하는 경우 해당 값이 대체됩니다.
    // 동일한 이름을 가진 여러 헤더를 보내려면 문자열 배열을 사용하십시오.
    response.write("안녕");
    response.end("end");
  })
  .listen(port2, hostname, () => {
    console.log("현재 서버는 클라이언트의 요청을 받아들인 준비가 된 상태임");
    console.log(`Server running at http://${hostname}:${port2}/`);
  });
