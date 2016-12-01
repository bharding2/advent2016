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
var locations = [[0, 0]];
var firstVisited = '';

function move(turn, dist) {
  currentDir = directions[currentDir][turn];

  if (currentDir === 'north') {
    for (var i = 1; i <= dist; i++) {
      locations.push([currentPos[0] + i, currentPos[1]]);
    }

    currentPos[0] += dist;
  }

  if (currentDir === 'south') {
    for (var j = 1; j <= dist; j++) {
      locations.push([currentPos[0] - j, currentPos[1]]);
    }

    currentPos[0] -= dist;
  }

  if (currentDir === 'east') {
    for (var x = 1; x <= dist; x++) {
      locations.push([currentPos[0], currentPos[1] + x]);
    }

    currentPos[1] += dist;
  }

  if (currentDir === 'west') {
    for (var y = 1; y <= dist; y++) {
      locations.push([currentPos[0], currentPos[1] - y]);
    }

    currentPos[1] -= dist;
  }
};

input.forEach((ele) => {
  move(ele[0], +ele.slice(1));
});

locations.forEach((ele, index) => {
  if (!firstVisited) {
    for (var z = index + 1; z < locations.length; z++) {
      if (ele[0] === locations[z][0] && ele[1] === locations[z][1]) firstVisited = ele;
    }
  }
});

console.log(firstVisited);

var result = Math.abs(firstVisited[0]) + Math.abs(firstVisited[1]);
console.log('result', result);
