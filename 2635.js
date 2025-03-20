var map = function(arr, fn) {
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i))
    }
    return result
};

arr = [1,2,3], fn = function plusone(n) { return n + 1; }
console.log(map(arr,fn))