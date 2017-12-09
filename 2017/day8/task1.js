const fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split('\n');

var registers = {};

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
});

var maxRegister = 0;

allRegisters = Object.keys(registers);

allRegisters.forEach((register) => {
  if (registers[register] > maxRegister) maxRegister = registers[register];
});

console.log(maxRegister);