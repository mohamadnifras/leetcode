var sumOfTheDigitsOfHarshadNumber = function(x) {
   let sumDigit = x.toString().split('').reduce((sum,digit)=> sum + Number(digit),0)
   if(x%sumDigit ===0){
    return sumDigit
   }else{
    return -1
   }
};

console.log(sumOfTheDigitsOfHarshadNumber(18));



 