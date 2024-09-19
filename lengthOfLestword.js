var lengthOfLastWord = function(s) {
   let a = s.trim()
   let b= a.replace(/\s+/g,",")
    let word = b.split(",")
    let lastWord = word[word.length-1]
    return lastWord.length
};

let d =lengthOfLastWord("   fly me   to   the moon  ")
console.log(d);
