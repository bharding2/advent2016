const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

var numPassingPhrases = 0;

input.forEach((row) => {
  var allPhrases = row.split(' ');
  var phraseMap = {};
  var hasDupes = false;

  allPhrases.forEach((phrase) => {
    if (phraseMap[phrase]) {
      hasDupes = true;
    } else {
      phraseMap[phrase] = true;
    }
  });

  if (!hasDupes) numPassingPhrases++;
});

console.log(numPassingPhrases);
