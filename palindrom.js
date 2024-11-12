var isPalindrome = function(x) {
  if(x<0){
    return false
  }else{
   let xStr =x.toString()
   let rStr = xStr.split('').reverse().join('')
   return xStr === rStr
}  
};








