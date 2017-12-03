const fs = require('fs');

const input = fs.readFileSync('input.txt').toString();

var inputRows = input.split('\n');
var checksum = 0;

inputRows.forEach((row) => {
  var cleanRow = row.split('\t');
  var rowCalc = 0;

  cleanRow.forEach((value, idx, arr) => {
    for (var i = 0; i < arr.length; i++) {
      if (value % arr[i] === 0 && i !== idx) rowCalc += value / arr[i];
    }
  })

  checksum += rowCalc;
});

console.log(checksum);