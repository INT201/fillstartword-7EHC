const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word==null||word==undefined) {
      //console.log(undefined)
      return undefined
    } 
    else if(word.includes(startWord)) {
      //console.log(word)
      return word
    }
    else {
      //console.log(startWord+word)
      return startWord+word 
    }
}
module.exports = fillStartWord
// fillStartWord("1-2565-", "Hello World")
// fillStartWord("JS", "beginner")
// fillStartWord("first", "firststep")
// fillStartWord("first", null)
// fillStartWord("first", undefined)


