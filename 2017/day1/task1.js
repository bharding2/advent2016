var input = require('./input.js').split('');
var answer = 0;

input.forEach((num, idx) => {
  if (num === input[idx + 1]) answer += +num;
  if (idx === input.length - 1 && num === input[0]) answer += +num;
});

console.log(answer);
