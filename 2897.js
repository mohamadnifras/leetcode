var differenceOfSums = function(n, m) {
    let a = [];
  for(let i=1; i<=n; i++){
     a.push(i)
  }  
let num1 = a.filter((num) => num % m !== 0).reduce((sum,num)=> sum+num,0)
let num2 = a.filter((num) => num % m ==0).reduce((sum,num)=> sum+num,0)
return num1 - num2
};


console.log(differenceOfSums(10,3));
