const nums = [4, 1, 2, 1, 2];
let result = 0;
for (let num of nums) {
  result ^= num;
}
console.log(result); 
