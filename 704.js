var search = function (nums, target) {
    let result = -1;
    for (let i = 0; i <= nums.length; i++) {
      result = nums[i] === target ? i : result 
    }
    return result
   
}
console.log(search([-1, 0, 3, 5, 9, 12], 9));



