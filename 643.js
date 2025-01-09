var findMaxAverage = function(nums, k) {
    let max = -Infinity; 
    let sum = 0;
    let windowStart = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i - windowStart === k - 1) {
            let average = sum / k;
            max = Math.max(max, average);
            sum -= nums[windowStart];
            windowStart++;
        }
    }
    return max;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));

