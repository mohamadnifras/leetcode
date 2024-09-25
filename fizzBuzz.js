var fizzBuzz = function(n) {
    let arr=[] 
    for(let i=1;i<=n;i++){
     let srt=""
     if(i%3===0) srt+="Fizz"
     if(i%5===0) srt+="Buzz"
 
 
     if(srt==="") srt+=i
     arr.push(srt);
    }
    return arr;
 };
 console.log(fizzBuzz(3));
 