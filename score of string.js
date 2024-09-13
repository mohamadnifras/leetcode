var scoreOfString = function(s) {
    let score = 0;

 
  for (let i = 0; i < s.length - 1; i++) {
      
      let currentCharCode = s.charCodeAt(i);
      let nextCharCode = s.charCodeAt(i + 1);

      
      score += Math.abs(currentCharCode - nextCharCode);
  }

  return score;
};

let sum = scoreOfString("hello")
console.log(sum);
