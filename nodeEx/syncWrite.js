const fs = require("fs");

//버퍼 : 메모리(주기억장치)의 데이터

//1 동기적으로 쓰기
// fs.writeFileSync("C:/ex/data/today1.txt", "hi");

//2 비동기적으로 쓰기

fs.writeFile("C:/ex/data/today3.txt", "하하", (err) => {
    console.log(err);
    console.log("파일에 비동기적으로 씀");
});

