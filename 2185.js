var prefixCount = function(words, pref) {
    return words.filter(word => word.startsWith(pref)).length;
};

const words = ["apple", "app", "application", "banana", "applause"];
const pref = 'app'
console.log(prefixCount(words,pref))