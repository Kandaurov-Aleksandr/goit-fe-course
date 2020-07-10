const findLongestWord = function (string) {
  const arrFromString = string.split(' ');

  let maxLengthWord = 'a';
  for (let word in arrFromString) {
      if (
          arrFromString[word].split('').length >
          maxLengthWord.split('').length
      ) {
          maxLengthWord = arrFromString[word];
      }
  }
  return maxLengthWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'