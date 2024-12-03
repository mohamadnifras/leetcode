var buyChoco = function(prices, money) {
    let sumPrices = 0
    let price = prices.sort((a,b) => a-b)
    for(let i=0;i<2;i++){
         sumPrices += price[i]
        }
        if(sumPrices<=money){
          return money - sumPrices
        }else{
            return money
        }
    
};
console.log(buyChoco([1,2,2],3));
