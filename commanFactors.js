var commonFactors = function(a, b) {
    let n =Math.max(a, b);
    let i = 1
    let result=[]
    while(n>=i){
        if(a % i==0 && b % i ==0){
            result.push(i)
        }
         i++
    }
    return result.length
};

console.log(commonFactors(12, 6));
console.log(commonFactors(25, 30));
