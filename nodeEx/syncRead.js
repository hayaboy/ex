const fs = require("fs");

var startTime = new Date();
const a = fs.readFileSync("./a.txt");
const b = fs.readFileSync("./b.txt");
const c = fs.readFileSync("./c.txt");
console.log(c.toString(),b.toString(),a.toString());

var endTime = new Date();

// 시간 간격 계산
var timeDiff = endTime - startTime;

console.log("작업에 걸린 시간(밀리초): " + timeDiff + "ms");