var differenceOfSum = function(nums) {
    let x = nums.reduce((total,sum)=> total+sum,0)
    let  digit= nums.flatMap((num)=> num.toString().split('').map(Number))
    let y = digit.reduce((total,sum)=> total+sum,0)
    return x -y
    
};
console.log(differenceOfSum([ 1, 15, 6, 3 ]));
console.log(differenceOfSum([1,2,3,4]));





