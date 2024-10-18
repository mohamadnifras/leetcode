var findGCD = function(nums) {
   
    const minNum=Math.min(...nums)
    const maxNum=Math.max(...nums)
 
    
     let hcf=1
    for(let i=2;i<=minNum;i++){
 
     if(minNum%i==0 && maxNum%i==0){
         hcf=i
     }
    }
    return hcf
 };

 console.log(findGCD([2,5,6,9,10]));
 