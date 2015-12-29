sort = function(wordList, sortOrder){
  valueHash = {};
  //create lexographic values
  sortOrder.split('').forEach(function(chr, index, array) {
    valueHash[chr] = index + 1;
  }.bind(this));

  determineValue = function(word) { 
    wordValue = 0;
    word.split('').forEach(function(chr, index, array) {
      wordValue += (Math.pow(10, (array.length - 1) - index)) * valueHash[chr];
    }.bind(this));
    return wordValue;
  }.bind(this);
  
  wordValueHash = {};
  //assign values to each word
  wordList.sort(function(a, b) {
    return determineValue(a) - determineValue(b);
  }.bind(this));

  return wordList;
}
console.log('input #1: ( ["acb", "abc", "bca"], "abc")');
console.log('Ouput:    ' + sort(["acb", "abc", "bca"], "abc"));

console.log('input #2: ( ["acb", "abc", "bca"], "cba")');
console.log('Ouput:    ' + sort(["acb", "abc", "bca"], "cba"));

console.log('input #3: (["aaa","aa",""], "a")');
console.log('Ouput:    ' + sort(["aaa","aa",""], "a"));
