
var sortColors = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                // Swap nums[i] and nums[j]
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums; // Return the sorted array
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

