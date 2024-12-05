var arrayStringsAreEqual = function(word1, word2) {
    let w1 = word1.join("")
    let w2 = word2.join("")
    if(w1 === w2){
        return true
    }
    return false
};
console.log(arrayStringsAreEqual(["ab", "c", 'd'],["abcd"]));





