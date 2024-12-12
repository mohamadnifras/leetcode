var hammingWeight = function (n) {
   binaryNumber = n.toString(2).split("")
   let binaryOne = 0;
   for (let i = 0; i < binaryNumber.length; i++) {
     if(binaryNumber[i] === "1"){
      binaryOne++
     }

   }
   return binaryOne

};
console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
