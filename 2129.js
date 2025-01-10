var capitalizeTitle = function (title) {
    const capitalizeTitle = title.toLowerCase()
        .split(" ")
        .map((word) => {
            if(word.length>2){

           return  word.charAt(0).toUpperCase() + word.slice(1)}
           else{
           return  word
           }
            }
            ).join(" ")

        return capitalizeTitle


};
console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));


