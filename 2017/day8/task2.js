const fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split('\n');

var registers = {};
var registerMax = 0;

input.forEach((line) => {
  var lineChars = line.split(' ');
  if (!registers[lineChars[0]]) registers[lineChars[0]] = 0;
  if (!registers[lineChars[4]]) registers[lineChars[4]] = 0;
});

input.forEach((line) => {
  var operation = line.split(' if ')[0];
  var condition = line.split(' if ')[1];

  var operationSplit = operation.split(' ');
  var conditionSplit = condition.split(' ');

  if (operationSplit[1] === 'inc') {
    operationSplit[1] = '+=';
  } else {
    operationSplit[1] = '-=';
  }

  operation = 'registers["' + operationSplit[0] + '"] ' + operationSplit[1] + ' ' + operationSplit[2];
  condition = 'registers["' + conditionSplit[0] + '"] ' + conditionSplit[1] + ' ' + conditionSplit[2];

  if (eval(condition)) eval(operation);

  if (registers[operationSplit[0]] > registerMax) registerMax = registers[operationSplit[0]]
});

console.log(registerMax);