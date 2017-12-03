var targetCell = 289326;

var boxLevel = Math.ceil(Math.sqrt(targetCell));
if (boxLevel % 2 === 0) boxLevel++;
var stepsIn = Math.floor(boxLevel / 2);

var corner1 = boxLevel ** 2;
var corner2 = corner1 - (boxLevel - 1);
var corner3 = corner2 - (boxLevel - 1);
var corner4 = corner3 - (boxLevel - 1);

var midPoint = 0;
var stepsSidways = 0;

if (targetCell <= corner4) {
  midPoint = corner4 - Math.floor(boxLevel / 2);
  stepsSidways = Math.abs(midPoint - targetCell);
} else if (targetCell <= corner3) {
  midPoint = corner3 - Math.floor(boxLevel / 2);
  stepsSidways = Math.abs(midPoint - targetCell);
} else if (targetCell <= corner2) {
  midPoint = corner2 - Math.floor(boxLevel / 2);
  stepsSidways = Math.abs(midPoint - targetCell);
} else {
  midPoint = corner1 - Math.floor(boxLevel / 2);
  stepsSidways = Math.abs(midPoint - targetCell);
}

console.log(stepsSidways + stepsIn);