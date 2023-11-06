// const fs = require("fs");

const async = require("async");
// console.log(async);

async.parallel(
  [
    function (callback) {
        setTimeout(function () {
            // console.log(callback);  
            callback( null, "one");        
      }, 3000);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, "two");
      }, 5000);
    },
  ],
    function (err, results) {
        // console.log(results[0]);
        console.log(results[1]);
        //console.log(typeof(results));
        // console.log(results);
  }
);