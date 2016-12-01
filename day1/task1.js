var input = require('./input').split(', ');

var directions = {
  north: {
    L: 'west',
    R: 'east'
  },
  east: {
    L: 'north',
    R: 'south'
  },
  south: {
    L: 'east',
    R: 'west'
  },
  west: {
    L: 'south',
    R: 'north'
  }
};

var currentDir = 'north';
var currentPos = [0, 0];

function move(turn, dist) {
  currentDir = directions[currentDir][turn];

  if (currentDir === 'north') currentPos[0] += dist;
  if (currentDir === 'south') currentPos[0] -= dist;
  if (currentDir === 'east') currentPos[1] += dist;
  if (currentDir === 'west') currentPos[1] -= dist;
};

input.forEach((ele) => {
  move(ele[0], +ele.slice(1));
});

var result = Math.abs(currentPos[0]) + Math.abs(currentPos[1]);
console.log(currentDir, currentPos);
console.log('result', result);
