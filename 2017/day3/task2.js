// so it turns out we have to build that shitty grid anyways
// this is a mess, but basically we are going to build one level
// at a time until we have the one that has a cell with a higher
// value than the target value

var inputValue = 289326;

// initializing grid with center cell
var grid = {
  1: {
    x: 0,
    y: 0,
    value: 1
  }
};

// our function to get the value of a cell, it checks all adjacent
// cells to see if they contain a value then sums them.  it needs
// to be used when the current cell is the largest cell in the grid
function getValue(currentCell) {
  var newValue = 0;

  // here we are checking all adjacent squares, aka all cells that
  // are zero or one steps away on both the x and y axis
  for (var i = 1; i < currentCell; i++) {
    var xDiff = Math.abs(grid[currentCell].x - grid[i].x);
    var yDiff = Math.abs(grid[currentCell].y - grid[i].y);

    if (xDiff <= 1 && yDiff <= 1) {
      if (grid[i].value) newValue += grid[i].value;
    }
  }

  return newValue;
};

// we are creating a new outer level with a certain number of
// cells per side, this logic is similar to the task 1 solution
function createLevel(sideSize) {
  // initializing current cell at highest cell number on level
  var currentCell = sideSize ** 2

  var corner1 = currentCell;
  var corner2 = corner1 - (sideSize - 1);
  var corner3 = corner2 - (sideSize - 1);
  var corner4 = corner3 - (sideSize - 1);

  // lowest cell on level
  var lastCell = corner4 - (sideSize - 2);

  // building the cells on the level
  while (currentCell >= lastCell) {
    var cellX = 0;
    var cellY = 0;
    var midPoint = 0;

    // checking which side of the box it is on, then find
    // the x and y coordinates with center cell being 0,0
    if (currentCell <= corner4) {
      midPoint = corner4 - Math.floor(sideSize / 2);

      cellX = Math.floor(sideSize / 2);
      cellY = currentCell - midPoint;
    } else if (currentCell <= corner3) {
      midPoint = corner3 - Math.floor(sideSize / 2);

      cellY = Math.floor(sideSize / 2);
      cellX = midPoint - currentCell;
    } else if (currentCell <= corner2) {
      midPoint = corner2 - Math.floor(sideSize / 2);

      cellX = -Math.floor(sideSize / 2);
      cellY = midPoint - currentCell;
    } else {
      midPoint = corner1 - Math.floor(sideSize / 2);

      cellY = -Math.floor(sideSize / 2);
      cellX = currentCell - midPoint;
    }

    grid[currentCell] = {
      x: cellX,
      y: cellY
    };

    currentCell--;
  }
}

// we initialized the grid with the center cell, so we start
// with the next level, which has 3 cells per side
var sideSize = 3;
var bigCell = 0;
var bigValue = 0;

// while the largest value on the outer level is less than the
// target value, we will create a new level
while (bigValue < inputValue) {
  bigCell = (sideSize) ** 2;

  // this creates the cells on that level
  createLevel(sideSize);

  // this next super ugly bit walks through all of the cells and
  // updates the values, starting with cell 2 because we initialized
  // the grid with cell 1.  I was pissed off at this point, so I am
  // updating all of the values on the grid each time we get to a
  // new level.  There really should be logic to only update the
  // vaules on the cells on the new level
  var gridKeys = Object.keys(grid);

  for (var i = 2; i < gridKeys.length + 1; i++) {
    grid[i].value = getValue(i);
  }

  bigValue = grid[bigCell].value;
  sideSize += 2;
}

// this other ugly bit is just finding the target cell on our grid
// with a larger value than our input and then logging that value
var allGridKeys = Object.keys(grid);
var targetValue = 0;

allGridKeys.forEach((gridKey) => {
  if (targetValue === 0 && grid[gridKey].value > inputValue) targetValue = grid[gridKey].value;
});

console.log(targetValue);