const fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split('\n');

var numSteps = 0;
var currentIdx = 0;

while (input[currentIdx] !== undefined) {
  numSteps++;
  currentIdx = currentIdx + input[currentIdx]++;
}

console.log(numSteps);
