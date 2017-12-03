const fs = require('fs');

const input = fs.readFileSync('input.txt').toString();

var inputRows = input.split('\n');
var checksum = 0;

inputRows.forEach((row) => {
  var cleanRow = row.split('\t');
  var rowCalc = 0;

  var sortedRow = cleanRow.sort((a, b) => {
    return b - a;
  });

  rowCalc = sortedRow[0] - sortedRow[sortedRow.length - 1];

  checksum += rowCalc;
});

console.log(checksum);
