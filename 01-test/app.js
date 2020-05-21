const express = require("express");          // когато няма ./ значи си взима модул от node_modules; 3-rd party module
const fs = require("fs");    // node.js  core module, не е депенданси 
const add = require('./someFuncToRequire');


console.log(add(1,2,3));
console.log("yey!");
let a = 5;
let b = "baba";
const c = {};
