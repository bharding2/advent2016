const fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split('\t').map((ele) => {
  return +ele;
});

var numCycles = 0;
var distrosSeen = {};

// same as before, only we are storing the cycle a distro is seen
var dupedDistroCycle = 0;

function redistribute() {
  var currentDistro = '';

  input.forEach((ele) => {
    currentDistro += ele + '-';
  });

  if (distrosSeen[currentDistro]) return distrosSeen[currentDistro];

  // storing cycle and incrementing number of cycles at the same time
  distrosSeen[currentDistro] = numCycles++;

  var largestBlock = input[0];
  var largestBlockIdx = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] > largestBlock) {
      largestBlockIdx = i;
      largestBlock = input[i];
    }
  }

  var redistroIdx = largestBlockIdx + 1;
  var distrosRemaining = largestBlock;
  input[largestBlockIdx] = 0;

  while (distrosRemaining) {
    if (redistroIdx > input.length - 1) redistroIdx = 0;

    input[redistroIdx++]++;
    distrosRemaining--;
  }

  return false;
};

while (!dupedDistroCycle) {
  dupedDistroCycle = redistribute();
}

// finding the number of cycles between between duplicates
console.log(numCycles - dupedDistroCycle);
