const fs = require("fs");

fs.readFile("none.txt", (err, data) => {
  
    console.log(Boolean(err));
    if (err) {
        console.log("파일이 없음"); 
        return;
    } else { 
        console.log(data);
    }
});

//  fs.readFile("C:/ex/data/test1.txt", (err, data) => {
//    console.log(data.toString());
//  });
