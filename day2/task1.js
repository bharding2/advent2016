const fs = require('fs');

var input = fs.readFileSync('./input.txt').toString().trim().split('\n');

var currentKey = 5;
var keyCode = [];

var keypad = {
  1: {
    U: null,
    D: 4,
    L: null,
    R: 2
  },
  2: {
    U: null,
    D: 5,
    L: 1,
    R: 3
  },
  3: {
    U: null,
    D: 6,
    L: 2,
    R: null
  },
  4: {
    U: 1,
    D: 7,
    L: null,
    R: 5
  },
  5: {
    U: 2,
    D: 8,
    L: 4,
    R: 6
  },
  6: {
    U: 3,
    D: 9,
    L: 5,
    R: null
  },
  7: {
    U: 4,
    D: null,
    L: null,
    R: 8
  },
  8: {
    U: 5,
    D: null,
    L: 7,
    R: 9
  },
  9: {
    U: 6,
    D: null,
    L: 8,
    R: null
  }
};

function getKey(dirs) {
  var dirArr = dirs.split('');

  dirArr.forEach((ele) => {
    if (keypad[currentKey][ele]) currentKey = keypad[currentKey][ele];
  });

  keyCode.push(currentKey);
  return currentKey;
};

input.forEach((ele) => {
  getKey(ele);
});

console.log(keyCode.join(''));
