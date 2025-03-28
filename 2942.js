var findWordsContaining = function(words,z) {
  return words.map((word,index)=> word.includes(z) ? index : -1)
  .filter(index => index !== -1); 
}

let words = ['leet','code']
let z = 'a'
console.log(findWordsContaining(words,z))
