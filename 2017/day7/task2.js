const fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split('\n');
var discs = {};

input.forEach((ele) => {
  var discName = ele.split(' ')[0];
  var discWeight = ele.split(' ')[1].replace('(', '').replace(')', '');
  var discChildren = ele.split(' -> ')[1] ? ele.split(' -> ')[1].split(', ') : false;

  if (!discs[discName]) {
    discs[discName] = {
      weight: discWeight,
      children: discChildren,
      parent: null
    }
  } else {
    discs[discName].weight = discWeight;
    discs[discName].children = discChildren;
  }

  if (discs[discName].children) {
    discs[discName].children.forEach((disc) => {
      if (!discs[disc]) {
        discs[disc] = {
          parent: discName
        }
      } else {
        discs[disc].parent = discName;
      }
    });
  }
});

var baseDisc = '';
var allDiscs = Object.keys(discs);

allDiscs.forEach((disc) => {
  if (!discs[disc].parent) baseDisc = disc;
});

function calcDiscBranchWeight(disc) {
  var totalWeight = 0;

  if (discs[disc].children) {
    discs[disc].children.forEach((child) => {
      totalWeight += +discs[child].weight;

      if (child.children) {
        child.children.forEach((grandchild) => {
          totalWeight += calcDiscBranchWeight(grandchild);
        });
      }
    });
  }

  return totalWeight;
};

var unbalancedTrees = {};

allDiscs.forEach((branch) => {
  var balanced = true;
  var branchValue = null;
  if (discs[branch].children) {
    discs[branch].children.forEach((grandbranch) => {
      var branchWeight = calcDiscBranchWeight(grandbranch);
      if (branchValue === null) {
        branchValue = branchWeight;
      } else if (branchWeight !== branchValue) {
        balanced = false;
      }
    });
  }

  if (!balanced && branchValue !== 0) {
    unbalancedTrees[branch] = branchValue;
  }
});

var allTrees = Object.keys(unbalancedTrees);

allTrees.forEach((tree) => {
  if (unbalancedTrees[discs[tree].parent]) unbalancedTrees[discs[tree].parent] = false;
});

console.log(unbalancedTrees);