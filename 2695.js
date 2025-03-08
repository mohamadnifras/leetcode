var ArrayWrapper = function(nums) {
    this.nums = nums; // Store the array
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, num) => sum + num, 0); // Sum of elements
};

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`; // Convert array to string format
};

// Example Usage:
const obj1 = new ArrayWrapper([1, 2, 3]);
const obj2 = new ArrayWrapper([4, 5, 6]);

console.log(obj1 + obj2); 
console.log(String(obj1));
console.log(String(obj2)); 
