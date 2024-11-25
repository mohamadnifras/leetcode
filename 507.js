var checkPerfectNumber = function(num) {
    let divisor = []
    for(let i=1;i<=num/2;i++){
    if(num%i === 0){
      divisor.push(i)
    }
 }
 return divisor.reduce((sum, num)=> sum + num,0) === num

};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));


