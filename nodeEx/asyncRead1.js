const fs = require("fs");

var startTime = new Date();

fs.readFile("./a.txt", (error, data) => { console.log(data)});
fs.readFile("./b.txt", (error, data) => { console.log(data)});
fs.readFile("./c.txt", (error, data) => { console.log(data)});



var endTime = new Date();

// 시간 간격 계산
var timeDiff = endTime - startTime;

console.log("작업에 걸린 시간(밀리초): " + timeDiff + "ms");