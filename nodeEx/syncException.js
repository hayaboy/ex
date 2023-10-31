const fs = require("fs");


try {
fs.readFileSync('none.txt');
} catch (exception) { 
    console.log("예외 발생");
    console.log(exception);
}

