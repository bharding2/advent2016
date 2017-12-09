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

  operation = operation.replace('inc', '+=');
  operation = operation.replace('dec', '-=');

  var operationRegister = operation.split(' ')[0];
  var conditionRegister = condition.split(' ')[0];

  operation = operation.replace(operationRegister, 'registers[operationRegister]');
  condition = condition.replace(conditionRegister, 'registers[conditionRegister]');

  if (eval(condition)) eval(operation);

  if (registers[operationRegister] > registerMax) registerMax = registers[operationRegister];
});

console.log(registerMax);