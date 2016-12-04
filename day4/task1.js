const fs = require('fs');

var inputTxt = fs.readFileSync('./input.txt').toString().trim().split('\n');

console.log(inputTxt);
