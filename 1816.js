var truncateSentence = function(s, k) {
 let a = s.split(" ").slice(0,k).join(" ")  
 return a
};
console.log(truncateSentence("Hello how are you Contestant",4));




