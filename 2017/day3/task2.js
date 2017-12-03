var inputValue = 289326;

var grid = {
  1: {
    x: 0,
    y: 0,
    value: 1
  }
};

function getValue(currentCell) {
  var newValue = 0;

  for (var i = 1; i < currentCell; i++) {
    var xDiff = Math.abs(grid[currentCell].x - grid[i].x);
    var yDiff = Math.abs(grid[currentCell].y - grid[i].y);

    if (xDiff <= 1 && yDiff <= 1) {
      if (grid[i].value) newValue += grid[i].value;
    }
  }

  return newValue;
};

function createLevel(sides) {
  var currentCell = sides ** 2

  var corner1 = currentCell;
  var corner2 = corner1 - (sides - 1);
  var corner3 = corner2 - (sides - 1);
  var corner4 = corner3 - (sides - 1);

  var lastCell = corner4 - (sides - 2);

  while (currentCell >= lastCell) {
    var cellX = 0;
    var cellY = 0;
    var midPoint = 0;

    if (currentCell <= corner4) {
      midPoint = corner4 - Math.floor(sides / 2);

      cellX = Math.floor(sides / 2);
      cellY = currentCell - midPoint;
    } else if (currentCell <= corner3) {
      midPoint = corner3 - Math.floor(sides / 2);

      cellY = Math.floor(sides / 2);
      cellX = midPoint - currentCell;
    } else if (currentCell <= corner2) {
      midPoint = corner2 - Math.floor(sides / 2);

      cellX = -Math.floor(sides / 2);
      cellY = midPoint - currentCell;
    } else {
      midPoint = corner1 - Math.floor(sides / 2);

      cellY = -Math.floor(sides / 2);
      cellX = currentCell - midPoint;
    }

    grid[currentCell] = {
      x: cellX,
      y: cellY
    };

    currentCell--;
  }
}

var sides = 3;
var bigCell = 0;
var bigValue = 0;

while (bigValue < inputValue) {
  bigCell = (sides) ** 2;

  createLevel(sides);
  var gridKeys = Object.keys(grid);

  for (var i = 2; i < gridKeys.length + 1; i++) {
    grid[i].value = getValue(i);
  }

  bigValue = grid[bigCell].value;
  sides += 2;
}

var allGridKeys = Object.keys(grid);

var targetValue = 0;

allGridKeys.forEach((gridKey) => {
  if (targetValue === 0 && grid[gridKey].value > inputValue) targetValue = grid[gridKey].value;
});

console.log(targetValue);