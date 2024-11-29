


var reverseWords = function(s) {
let d = s.split(" ")
let a =d.map((text)=> text.split("").reverse().join(""))
return a.join(" ")
};
console.log(reverseWords("Let's take LeetCode contest"));



