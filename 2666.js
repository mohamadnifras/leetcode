var once = function(fn) {
    let calls = false
    let result;
    return function(...args){
       if(!calls){
        calls = true
        result = fn(...args); 
        return result;
       } 
       return undefined
    }
};

let fn = (a, b, c) => a + b + c; 
let onceFn = once(fn);  

console.log(onceFn(1, 2, 3));
console.log(onceFn(4, 5, 6)); 
console.log(onceFn(7, 8, 9)); 