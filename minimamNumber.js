var numberGame = function(nums) {
    arr=[]
a=nums.sort((a,b)=>a-b)
for(let i=0;i<a.length;i++){
    if(i==0||i%2==0){
        arr.push(a[i+1])
    }else if (i%2==1){
        arr.push(a[i-1])
    }
}
return arr
}
console.log(numberGame([5,4,2,3]));

