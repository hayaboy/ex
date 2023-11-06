const fs = require("fs");
const async = require("async");

async.parallel(
  {
    fileA: (callback) => {
      fs.readFile("./a.txt", "utf8", callback);
    },
    fileB: (callback) => {
      fs.readFile("./b.txt", "utf8", callback);
    },
    fileC: (callback) => {
      fs.readFile("./c.txt", "utf8", callback);
    },
  },
  (err, results) => {
    // console.log(typeof (results));
    console.log(results);
  }
);



