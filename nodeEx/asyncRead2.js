const fs = require("fs");
const async=require('async')

var startTime = new Date();

// fs.readFile("./a.txt", (error, data) => { console.log(data)});
// fs.readFile("./b.txt", (error, data) => { console.log(data)});
// fs.readFile("./c.txt", (error, data) => { console.log(data)});

async.parallel([(data) => { fs.readFile("./a.txt", data) },
    (data) => { fs.readFile("./b.txt", data) },
    (data) => { fs.readFile("./c.txt", data) }
], (err, data) => { console.log(data.toString())});

var endTime = new Date();

// 시간 간격 계산
var timeDiff = endTime - startTime;

console.log("작업에 걸린 시간(밀리초): " + timeDiff + "ms");