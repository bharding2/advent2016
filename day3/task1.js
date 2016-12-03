const fs = require('fs');

var inputTxt = fs.readFileSync('./input.txt').toString().trim().split('\n');

var input = inputTxt.map((ele) => {
  var cleaned = ele.replace(/\s+/, 'x').replace(/\s+/, 'x').split('x');

  return cleaned;
});

var numTriangles = 0;
var allTriangles = [];

function isTriangle(triangle) {
  triangle.sort();

  if (+triangle[2] + +triangle[1] > +triangle[0] && +triangle[0] + +triangle[1] > +triangle[2] && +triangle[2] + +triangle[0] > +triangle[1]) {
    numTriangles++;
    return triangle;
  }
}

allTriangles = input.filter((ele) => {
  return isTriangle(ele);
});

console.log(allTriangles);
console.log(allTriangles.length);
