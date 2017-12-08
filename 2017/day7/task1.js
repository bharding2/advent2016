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

console.log(baseDisc);


