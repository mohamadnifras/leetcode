var sumZero = function(n) {
    const result = []

    for(let i=1; i<n; i++){
        result.push(i)
    }
   const sum = result.reduce((acc,num)=> acc + num,0)
   result.push(-sum)
   return result
};
console.log(sumZero(5));


