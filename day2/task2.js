const fs = require('fs');

var input = fs.readFileSync('./input.txt').toString().trim().split('\n');

var currentKey = 5;
var keyCode = [];

var keypad = {
  1: {
    U: null,
    D: 3,
    L: null,
    R: null
  },
  2: {
    U: null,
    D: 6,
    L: null,
    R: 3
  },
  3: {
    U: 1,
    D: 7,
    L: 2,
    R: 4
  },
  4: {
    U: null,
    D: 8,
    L: 3,
    R: null
  },
  5: {
    U: null,
    D: null,
    L: null,
    R: 6
  },
  6: {
    U: 2,
    D: 'A',
    L: 5,
    R: 7
  },
  7: {
    U: 3,
    D: 'B',
    L: 6,
    R: 8
  },
  8: {
    U: 4,
    D: 'C',
    L: 7,
    R: 9
  },
  9: {
    U: null,
    D: null,
    L: 8,
    R: null
  },
  A: {
    U: 6,
    D: null,
    L: null,
    R: 'B'
  },
  B: {
    U: 7,
    D: 'D',
    L: 'A',
    R: 'C'
  },
  C: {
    U: 8,
    D: null,
    L: 'B',
    R: null
  },
  D: {
    U: 'B',
    D: null,
    L: null,
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
