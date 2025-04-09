var balancedStringSplit = function(s) {
    let count = 0;
   let result = 0;
   for (let i = 0; i < s.length; i++) {
       
       if (s[i] === 'L') count++;
       else count--;
       if (count === 0) result++;
   }
   return result;
};
let s = "RLRRLLRLRL"
console.log(balancedStringSplit(s))