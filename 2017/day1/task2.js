var input = require('./input.js');
var superInput = input + input;
input = input.split('');
superInput = superInput.split('')
var answer = 0;

input.forEach((num, idx) => {
  if (num === superInput[idx + input.length / 2]) answer += +num;
});

console.log(answer);
