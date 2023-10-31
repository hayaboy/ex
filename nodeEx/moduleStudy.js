//os 모듈을 불러올 경우 함수  require()

const os = require("os");  // CommonJS 방식을 사용해야함, ES방식은 제한이 있음 
console.log(os.hostname());

const path = require("path");  

const request = require("request");  

const express = require("express");  

const morgan = require("morgan");  
const bodyparser = require("body-parser");  

const async = require("async");  