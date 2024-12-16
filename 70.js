var climbStairs = function(n) {
    let a = 1, b = 2 
    if(n <= 2)return n;
    for(let i=3; i<=n; i++){
      let temp = a + b;
      a = b;
      b = temp
    } 
    return b
  };
console.log(climbStairs(2));
console.log(climbStairs(3));
