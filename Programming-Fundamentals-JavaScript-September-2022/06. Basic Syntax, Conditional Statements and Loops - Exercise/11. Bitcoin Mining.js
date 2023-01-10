function bitcoinMining(array) {

    let bitcoin = 11949.16;
    let pricePerGramGold = 67.51;
    let totalSum = 0;
    let day = 0;
    let firstDay = 0
    let boughtBitcoin = 0;
    let countBitcoin = 0;
    let sumBitcoins = 0;
 
    for (let i = 0; i < array.length; i++) {
        day++;

        let goldMided = array[i];

        if (day % 3 === 0) {
            goldMided *= 0.7;
        }

        let singleDayEarning = goldMided * pricePerGramGold;
        totalSum += singleDayEarning;
 
 
        if (totalSum >= bitcoin) {
            countBitcoin++;
            boughtBitcoin = Math.floor(totalSum / bitcoin);
            totalSum = totalSum - (bitcoin * boughtBitcoin);
            sumBitcoins += boughtBitcoin;
        }
        if (countBitcoin == 1) {
            firstDay = day;
        }
    }
 
    console.log(`Bought bitcoins: ${sumBitcoins}`);
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
 
}

bitcoinMining([100, 200, 300]);

