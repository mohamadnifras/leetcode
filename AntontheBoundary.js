var returnToBoundaryCount = function(nums) {
    let length =nums.length
    let sum=0
    let count=0
    for(let i=0;i<length;i++){
       sum+=nums[i]
       if(sum===0)
       count++
    }
    return count;
};

console.log(returnToBoundaryCount([2,3,-5]));
