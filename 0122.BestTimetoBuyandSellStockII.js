var maxProfit = function(prices) {
    if(prices.length===0){
        return 0
    }

    let profit=0,vally=prices[0],peak=prices[0]
    let i=0
    while(i<prices.length-1){ //到倒数第二个
        while(i<prices.length-1){
            while(i<prices.length-1 && prices[i]>=prices){
                i++ //跌
            }
            vally=prices[i]

            while(i<prices.length-1 && prices[i]<=prices[i+1]){
                i++
            }
            peak=prices[i]
            profit+=peak-vally
        }

        return profit
    }
};
