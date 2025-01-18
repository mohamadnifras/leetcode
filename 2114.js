var mostWordsFound = function (sentences) {
    max_Words = 0
    sentences.forEach(sentence => {
        const wordCount = sentence.split(" ").length
        max_Words = Math.max(max_Words, wordCount)
    });
    return max_Words
};
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
