const fs = require("fs");
//동기적으로 파일 읽기
// const txtData = fs.readFileSync("./textfile.txt");
// console.log(txtData);
// console.log(txtData.toString());

//비동기적으로 파일 읽기
fs.readFile("./textfile.txt", (error, data) => { console.log(data.toString()) })