var targetCell = 289326;

// we are finding the number of sides of the outer square.
// the bottom corner is always a perfect square of an odd
// number, so we are finding the next odd number perfect
// square to be the number of sides of the outer box
var boxLevel = Math.ceil(Math.sqrt(targetCell));
if (boxLevel % 2 === 0) boxLevel++;
// we find how far out from the center cell we are
var stepsIn = Math.floor(boxLevel / 2);

// when then find the cells at each corner of the outer box
var corner1 = boxLevel ** 2;
var corner2 = corner1 - (boxLevel - 1);
var corner3 = corner2 - (boxLevel - 1);
var corner4 = corner3 - (boxLevel - 1);

// we find which side of the outer box our target cell is on
// then find out how far from the midpoint of the side is to
// know how many steps sideways we need to go
var midPoint = 0;
var stepsSideways = 0;

if (targetCell <= corner4) {
  midPoint = corner4 - Math.floor(boxLevel / 2);
  stepsSideways = Math.abs(midPoint - targetCell);
} else if (targetCell <= corner3) {
  midPoint = corner3 - Math.floor(boxLevel / 2);
  stepsSideways = Math.abs(midPoint - targetCell);
} else if (targetCell <= corner2) {
  midPoint = corner2 - Math.floor(boxLevel / 2);
  stepsSideways = Math.abs(midPoint - targetCell);
} else {
  midPoint = corner1 - Math.floor(boxLevel / 2);
  stepsSideways = Math.abs(midPoint - targetCell);
}

console.log(stepsSideways + stepsIn);