var majorityElement = function(nums) {
    let count = 0;
  let candidate = null;

  for (let num of nums) {
    
    if (count === 0) {
      candidate = num;
    }
   
    // console.log(candidate,"candidate")
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};
let nums = [3,2,3]

console.log(majorityElement(nums))