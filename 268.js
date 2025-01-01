var missingNumber = function(nums) {
    const n = nums.length;
   const totalSum = (n * (n + 1)) / 2;
   const arraySum = nums.reduce((acc, num) => acc + num, 0);
   return totalSum - arraySum;  
};
console.log(missingNumber([3,0,1]))