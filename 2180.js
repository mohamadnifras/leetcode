var countEvenDigitSum = function(num) {
    let count = 0;

 
    for (let i = 1; i <= num; i++) {
        
        let digitSum = i.toString()
            .split('')
            .map(Number)
            .reduce((sum, digit) => sum + digit, 0);

      
        if (digitSum % 2 === 0) {
            count++;
        }
    }

    return count; 
};

console.log(countEvenDigitSum(30));  
 



    
    
 
   
 
  

 
 
 


