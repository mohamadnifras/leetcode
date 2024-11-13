var subtractProductAndSum = function(n) {
  let numStr = n.toString().split('')
  let numArr = numStr.map(Number)
  let product = numArr.reduce((num,total)=> num * total,1)
  let sum = numArr.reduce((num,total)=> num + total,0)
  return product - sum


};

 console.log(subtractProductAndSum(234));



  










