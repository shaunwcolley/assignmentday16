let word1 = "Cat";
let word2 = "Bob";

function flipWord(word) {
  let testWord = "";
  for (let index = word.length -1 ; index >= 0; index--) {
    testWord += word[index];
  }
  return testWord;
}


function printResult(word, wordTwo) {
  if(wordTwo == word){
    console.log("It's a palindrome!");
  }
  else if(wordTwo != word) {
    console.log("Nope, not a palindrome.");
  }
  else {
    console.log("Something weird has happened ...")
  }
}
testWord = flipWord(word1);
testWord = testWord.toLowerCase();
word1 = word1.toLowerCase();
printResult(testWord, word1);

testWord2 = flipWord(word2);
testWord2 = testWord2.toLowerCase();
word2 = word2.toLowerCase();
printResult(word2, testWord2);
