var filter = function(arr, fn) {
    let result = []
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){

        result.push(arr[i])
        }
    }
    return result
};
arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr,fn))