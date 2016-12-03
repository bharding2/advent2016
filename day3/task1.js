const fs = require('fs');

var inputTxt = fs.readFileSync('./input.txt').toString().trim().split('\n');

var input = inputTxt.map((ele) => {
  var cleaned = ele.replace(/\s+/, 'x').replace(/\s+/, 'x').split('x');
  var numArray = cleaned.map((ele) => {
    return +ele;
  });

  return numArray;
});

var allTriangles = [];

function isTriangle(triangle) {
  triangle.sort((a, b) => {
    return a - b;
  });

  if (triangle[0] + triangle[1] > triangle[2]) return triangle;
}

allTriangles = input.filter((ele) => {
  return isTriangle(ele);
});

console.log(allTriangles);
console.log(allTriangles.length);
