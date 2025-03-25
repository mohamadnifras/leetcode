var sortBy = function(arr, fn) {
    arr.sort((a,b)=>fn(a)-fn(b))
    return arr
};
arr = [5, 4, 1, 2, 3], fn = (x) => x
console.log(sortBy(arr,fn))