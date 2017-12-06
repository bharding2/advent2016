const fs = require('fs');

//input is an array of numbers
var input = fs.readFileSync('input.txt').toString().split('\t').map((ele) => {
  return +ele;
});

var numCycles = 0;
var distrosSeen = {};
var dupedDistros = false;

function redistribute() {
  // create a string representation of the current distro for storage purposes
  var currentDistro = '';

  input.forEach((ele) => {
    currentDistro += ele + '-';
  });

  // if distro has been seen return out of function
  if (distrosSeen[currentDistro]) return true;

  //store current distro prepresentation as seen;
  distrosSeen[currentDistro] = true;

  // find largest block in distro
  var largestBlock = input[0];
  var largestBlockIdx = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] > largestBlock) {
      largestBlockIdx = i;
      largestBlock = input[i];
    }
  }

  // redistribute largest block
  var redistroIdx = largestBlockIdx + 1;
  var distrosRemaining = largestBlock;
  input[largestBlockIdx] = 0;

  while (distrosRemaining) {
    if (redistroIdx > input.length - 1) redistroIdx = 0;

    input[redistroIdx++]++;
    distrosRemaining--;
  }

  numCycles++;
  return false;
};

// redistribute until reaching a duplicate distro
while (!dupedDistros) {
  dupedDistros = redistribute();
}

console.log(numCycles);
