const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

var numPassingPhrases = 0;

input.forEach((row) => {
  var allPhrases = row.split(' ');
  var phraseMap = {};
  var hasAnagramDupes = false;

  allPhrases.forEach((phrase) => {
    var sortedPhrase = phrase.split('').sort().join('');

    if (phraseMap[sortedPhrase]) {
      hasAnagramDupes = true;
    } else {
      phraseMap[sortedPhrase] = true;
    }
  });

  if (!hasAnagramDupes) numPassingPhrases++;
});

console.log(numPassingPhrases);